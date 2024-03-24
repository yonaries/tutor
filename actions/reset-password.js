import axios from "axios";
import { toast } from "sonner";

export const resetPassword = async ({email, role}) => {
  try {
    const response = await axios.post(
      `http://localhost:5012/api/${role}/recovery`,
      {
        email,
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
};

export const changePassword = async ({email, password, role}) => {
  try {
    const response = await axios.put(
      `http://localhost:5012/api/${role}/recovery/${email}`,
      {
        password,
      }
    );
    toast.success("Password Changed Successfully");
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error(error.data.message);
    throw error;
  }
};