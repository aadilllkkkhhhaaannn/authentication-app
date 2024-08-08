import axios from "axios";

const API_URL =
  "https://authenticationeskills.vercel.app/api/user/";

// const API_URL = "https://authentication-2-qgze.onrender.com/api/user"

const register = async(formData) => {
   try {
      const response = await axios.post(API_URL + "register", formData);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
   } catch (error) {
      console.log(error);
   }
   
}

const login = async(formData) => {
    const response = await axios.post(API_URL + "login" , formData)
    localStorage.setItem("user" , JSON.stringify(response.data))
    return response.data
 }

 const facebook = async (formData) => {
   const response = await axios.post(API_URL + "login", formData);
   localStorage.setItem("user", JSON.stringify(response.data));
   return response.data;
 };

 const authService = {
    register,
    login,
    facebook,
}

export default authService;