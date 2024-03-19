import axios from "axios";

export async function signin({ email, password }) {
  try {
    const res = await axios.post("http://localhost:5012/api/student/login", {
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(res.data.data));
  } catch (error) {
    console.error(error);
  }
}
