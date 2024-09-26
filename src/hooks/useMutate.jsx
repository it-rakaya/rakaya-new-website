import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

export function useMutate({
  endpoint,
mutationKey,
  onError,
  onSuccess,
  formData,
  onMutate,
  method = "post",
}) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const user_token = Cookies.get("token");
  const token = user_token;
  const authorizationHeader = `Bearer ${token}`;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const {
    data,
    isLoading,
    isSuccess,
    mutate,
    failureReason,
    isError,
    isPending,
  } = useMutation({
    mutationKey,
    mutationFn: (values) => {
      const requestConfig = {
        method: method.toUpperCase(),
        url: `${baseUrl}/${endpoint}`,
        data: values,
        headers: formData
          ? {
              "Content-Type": "multipart/form-data",
              // Authorization: authorizationHeader,
              // 'Accept-Language': isRTL ? 'ar' : 'en',
              // Accept: "*/*",
              "Accept-Language": "ar",
            }
          : {
              "Content-Type": "application/json; charset=utf-8",
              // Authorization: authorizationHeader,
              "Accept-Language": "ar",
              // Accept: "*/*",
            },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted); 
        },
      };

      return axios(requestConfig);
    },
    onSuccess,
    onError,
    onMutate,
  });

  return {
    data,
    isLoading,
    isSuccess,
    mutate,
    failureReason,
    isError,
    isPending,
    uploadProgress,
  };
}
