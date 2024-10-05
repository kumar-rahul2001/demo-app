import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// default baseURL
axios.defaults.baseURL =
  import.meta.env.VITE_ENVIRONMENT === "development"
    ? import.meta.env.VITE_BASE_URL_DEV
    : import.meta.env.VITE_BASE_URL_PROD;

// defaullt content type
axios.defaults.headers.post["Content-Type"] = "application/json";

/**
 * Sets the default authorization
 * @param token - The authorization token to set
 */

const setAuthorization = (token: string | null): void => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

class APIClient {
  /**
   * Fetches data from a given url
   * @param url - The endpoint URL
   * @param params - Optional request parameters
   * @param config - Optional Axios request configuration
   */
  get = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
    return axios.get(url, config);
  };

  /**
   * Posts given data to a url
   * @param url - The endpoint URL
   * @param data - The data to be posted
   * @param config - Optional Axios request configuration
   */
  create = async (
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<any> => {
    return axios.post(url, data, config);
  };

  /**
   * Updates data at a given url
   * @param url - The endpoint URL
   * @param data - The data to be updated
   * @param config - Optional Axios request configuration
   */
  update = (
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<any> => {
    return axios.put(url, data, config);
  };

  /**
   * Partially updates data at a given url
   * @param url - The endpoint URL
   * @param data - The data to be updated partially
   * @param config - Optional Axios request configuration
   */
  patch = (
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<any> => {
    return axios.patch(url, data, config);
  };

  /**
   * Deletes data at a given url
   * @param url - The endpoint URL
   * @param config - Optional Axios request configuration
   */
  delete = (url: string, config?: AxiosRequestConfig): Promise<any> => {
    return axios.delete(url, config);
  };
}

// Function to get the access token from localStorage
const getAccessToken = () => {
  try {
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
      const parsedAuthUser = JSON.parse(authUser);
      return parsedAuthUser?.token || null; // Return the token if it exists
    }
    return null;
  } catch (error) {
    console.error("Error retrieving access token from localStorage:", error);
    return null;
  }
};

// setting token to the axios as default header
setAuthorization(getAccessToken());

export { APIClient, setAuthorization, getAccessToken };
