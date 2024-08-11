import axios from "axios";

const apiGwtData = axios.create({
  baseURL: "http://localhost:3001",
});

apiGwtData.interceptors.request.use(
  (config) => {
    config.headers.Authorization =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJoYmdlcmhqQGdtYWlsLmNvbSIsImlhdCI6MTY4MjA1NTQxNH0.mJY6KRMkJGcRXSpeKwKWSFRaG9crHL64q0bEo2V1WkI";

    return config;
  },
  (error) => {
    console.log("error", error);
    if (error.response.status === 401) {
      console.error("Network error:", error);
    }
    return Promise.reject(error);
  }
);
export default apiGwtData;
