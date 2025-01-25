import { useError } from "@contexts/ErrorContext";


let errorHandler = null;

export const registerErrorHandler = (handler) => {
  errorHandler = handler;
};

export const handleErrorMessage = (message) => {
  if (errorHandler) {
    errorHandler(message);
  } else {
    console.error("Error handler not registered.");
  }
};