import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

function useFetch({ endpoint, enabled, select, queryKey, onError, onSuccess }) {
  const config = {
    headers: {
      // Authorization: authorizationHeader,
      // Accept:"*/*",
      // "allow-Access-control-Allow-origin":"*/*"
      
    },
  };
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const query = useQuery({
    queryKey,
    queryFn: () => axios.get(`${baseUrl}/${endpoint}`, config),
    enabled,
    select,
    onError: (error) => {
      if (error.message === "unauthenticated") {
        console.log("🚀 ~ error.message:", error);
      }
      if (onError) {
        onError(error);
      }
    },
    onSuccess,
  });
  return query;
}

export default useFetch;
