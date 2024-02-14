import { jwtDecode } from "jwt-decode";

const decodeToken = (token) => {
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const exp = new Date(decodedToken.exp * 1000);

      if (new Date() > exp) {
        localStorage.removeItem("newstoken");
        return "";
      } else {
        return decodedToken;
      }
    } catch (error) {
      return "";
    }
  } else {
    return "";
  }
};

export default decodeToken;
