import axios from 'axios';
import { toast } from 'sonner';

/**
 * @param first_name {string}
 * @param last_name {string}
 * @param university {string}
 * @param phone_number {string}
 * @param academic_year {string}
 * @param email {string}
 * @param password {string}
 * @param password_question {string}
 * @param password_answer {string}
 */

export async function signup({
  first_name,
  last_name,
  university,
  phone_number,
  academic_year,
  email,
  password,
  password_question,
  password_answer,
  picture,
}) {
  try {
    const Form = new FormData();
    Form.append("first_name", first_name);
    Form.append("last_name", last_name);
    Form.append("university", university);
    Form.append("phone_number", phone_number);
    Form.append("academic_year", academic_year);
    Form.append("email", email);
    Form.append("password", password);
    Form.append("password_question", password_question);
    Form.append("password_answer", password_answer);
    Form.append("picture", picture);
    const res = await axios.post("http://localhost:5012/api/student", Form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
      console.error(error);
      throw new Error("Failed to create account");
  }
}

export async function signupAsTutor({
  first_name,
  last_name,
  university,
  course,
  price,
  status,
  teaching_method,
  rating,
  email,
  password,
  phone_number,
  password_question,
  password_answer,
  picture,
}) {
  try {
    const Form = new FormData();
    Form.append("first_name", first_name);
    Form.append("last_name", last_name);
    Form.append("university", university);
    Form.append("course", course);
    Form.append("price", price);
    Form.append("status", status);
    Form.append("teaching_method", teaching_method);
    Form.append("rating", rating);
    Form.append("email", email);
    Form.append("password", password);
    Form.append("phone_number", phone_number);
    Form.append("password_question", password_question);
    Form.append("password_answer", password_answer);
    Form.append("picture", picture);
    await axios.post("http://localhost:5012/api/tutor", Form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Account created successfully. Please choose a plan on the next page and complete your payment.");
  } catch (error) {
    console.error(error);
    toast.error("Failed to create account");
    throw new Error("Failed to create account");
  }
}