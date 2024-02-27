import { useState } from "react";
import axios from "axios";

/**
 * Custom hook to post data to a specified endpoint.
 * @param {string} endpoint The URL to post the data to.
 * @returns An object containing the postData function, isLoading, isSuccess, and error state.
 */
export function usePostData(endpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // Add isSuccess state
  const [error, setError] = useState(null);
  const baseUrl = "https://front-api.rmcc.sa/api";
 
  const postData = async (formData) => {
    setIsLoading(true);
    setIsSuccess(false); // Reset success state on new post attempt
    setError(null);
    try {
      const response = await axios.post(`${baseUrl}${endpoint}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsLoading(false);
      setIsSuccess(true); // Set success state on successful post
      return response.data; // You might want to return some data or handle it differently
    } catch (err) {
      setError(err);
      setIsLoading(false);
      setIsSuccess(false); // Ensure success state is false on error
      throw err; // Re-throw the error if you want to handle it outside the hook as well
    }
  };

  return { postData, isLoading, isSuccess, error };
}
