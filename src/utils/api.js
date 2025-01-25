import axios from "axios";
import { handleErrorMessage } from "@utils/errorService";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Set your base API URL from environment variables
  timeout: 10000, // 10 seconds timeout
});

// Add a response interceptor to handle errors
apiClient.interceptors.response.use(
  
  (response) => response.data, // Return response data for successful calls

  // Handle errors
  async (error) => {

    const status = error.response?.status;
    const originalRequest = error.config;
    console.error("API Error: OriginalRequest:", originalRequest);
    console.error("API Error Response:", error);

    // Handle Unauthorized Error (401)
    if (!originalRequest?._retry && status === 401) {
      console.warn("401 Unauthorized. Attempting tokens refresh...");
      const refreshToken = localStorage.getItem("refresh_token");

      // Attempt to refresh the tokens
      if (refreshToken) {
        console.warn("Refreshing tokens...");
        
        try {

          // Mark the request to prevent loops
          originalRequest._retry = true;

          const newTokens = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/auth/refresh-token`,
            { refresh_token: refreshToken }
          );

          localStorage.setItem("access_token", newTokens.data.access_token);
          error.config.headers.Authorization = `Bearer ${newTokens.data.access_token}`;

          // Retry the original request with the new token
          return apiClient.request(originalRequest);

        } catch (refreshError) {
          
          console.error("Token refresh failed:", refreshError);
          localStorage.clear();
          
          window.location.href = "/login";
        }

      } else {
        console.warn("No refresh token found. Logging out...");

        localStorage.clear();
        //handleErrorMessage("Session expired. Please log in again.");
        
        window.location.href = "/login";
      }
    }

    // Handle Network Errors
    if (!error.response) {
      console.error("Network error: Unable to reach the server.");
      handleErrorMessage("Network error: Please check your internet connection.");
      
      return { 
        message: "Network error", 
        data: {} 
      }; // Prevents propagation
    }

    // Map error messages for known statuses
    const errorMessageMap = {
      403: "You do not have permission to access this resource.",
      404: "The requested resource was not found.",
      500: "Internal server error. Please try again later.",
    };

    const errorMessage = errorMessageMap[status] || "An unexpected error occurred. Please try again.";
    console.error("API Error:", errorMessage);

    handleErrorMessage(errorMessage);
    return { message: errorMessage };
  }
);

const fetchAPI = async (endpoint, method = "GET", data = null, config = {}, useAuth = true) => {
    try {
      const options = { method, url: endpoint, ...config };
  
      if (useAuth) {
        const accessToken = localStorage.getItem("access_token");
        
        // Add Authorization header if token is available
        if (accessToken) {
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`,
          };
        }
      }
  
      // Add data to the request if it's a POST or PUT request
      if (data) {
        options.data = data;
      }
  
      console.warn("API Options:", options);
  
      const response = await apiClient(options);
      
      return response;

    } catch (error) {
      console.error("Fetch API Error:", error.message);
      throw error; // Pass the error back to the calling component
    }
  };

export default fetchAPI;
