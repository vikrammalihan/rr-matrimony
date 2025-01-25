
// image upload and resize
export const resizeImage = (file, maxWidth = 400, quality = 0.8) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        return reject(new Error("No file provided"));
      }
  
      const image = new Image();
      const reader = new FileReader();
  
      reader.onload = (event) => {
        image.src = event.target.result;
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      image.onload = () => {
        const aspectRatio = image.height / image.width;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        // Set canvas dimensions
        canvas.width = maxWidth;
        canvas.height = maxWidth * aspectRatio;
  
        // Draw the resized image on the canvas
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  
        // Convert the canvas to a Blob
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const resizedFile = new File([blob], file.name, { type: file.type });
              resolve(resizedFile);
            } else {
              reject(new Error("Failed to resize image"));
            }
          },
          file.type,
          quality // Compression quality
        );
      };
  
      image.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  };
  