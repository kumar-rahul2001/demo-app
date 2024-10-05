import { APIClient } from "@/helpers/apiHelper";
import * as url from "@/helpers/urlHelper";

const api = new APIClient();

export const fetchedUsers = async () => {
  try {
    const response = await api.get(url.demo);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Error Response:", error.response.data);
      throw new Error(error.response.data.message || "Something went wrong");
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("Error Request:", error.request);
      throw new Error("No response from the server");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error Message:", error.message);
      throw new Error("Request setup error");
    }
  }
};
