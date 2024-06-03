import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

function useFetch({ endpoint, enabled, select, queryKey, onError, onSuccess }) {

  const config = {
    headers: {
      // Authorization: authorizationHeader,
    },
  };
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const query = useQuery({
    queryKey,
    queryFn: () => axios.get(`${baseUrl}/${endpoint}`, config),
    // .then((res) => res.data)
    // .catch((err) => {
    //   if (
    //     err.response.data.message == "Unauthenticated." ||
    //     err.response.status == 403 ||
    //     err.response.status == 401
    //   ) {
    //     setUser(null);
    //     window.localStorage.removeItem("user");
    //     window.localStorage.removeItem("token");
    //     setToken(null);
    //     Cookies.remove("role");
    //     Cookies.remove("token");
    //     window.location.reload();
    //     navigate("/", { replace: true });
    //     throw new Error("unauthenticated");
    //   }
    //   throw err;
    // }),
    enabled,
    select,
    onError: (error) => {
      if (error.message === "unauthenticated") {
        console.log("🚀 ~ error.message:", error.message);
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
