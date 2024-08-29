import axios from "axios";
const fetchData = async (endpoint, language) => {
  const config = {
    // headers: {
    //   "Accept-Language": language,
    // },
  };
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const response = await axios.get(`${baseUrl}/${endpoint}`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
