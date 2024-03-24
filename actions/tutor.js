import axios from "axios";
import { toast } from "sonner";

export const fetchTutors = async () => {
  try {
    const response = await axios.get("http://localhost:5012/api/tutor");
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch tutors");
  }
};

export const getTutor = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5012/api/tutor/${id}`);
    return response.data.data[0];
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch tutor");
    throw error;
  }
};

export const rateTutor = async ({ id, student_id, score, hours, comment }) => {
  console.log(id, student_id, score, hours, comment);
  try {
    const response = await axios.put(
      `http://localhost:5012/api/rating/${id}/${student_id}`,
      { score, hours, comment }
    );
    toast.success("Tutor rated successfully");
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to rate tutor");
    throw error;
  }
};

export const fetchTutorRating = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:5012/api/rating/${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch tutor");
    throw error;
  }
};

export const fetchTutorQualification = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:5012/api/tutor/qualification/${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch tutor");
    throw error;
  }
}

export const uploadTutorQualification = async ({
  id,
  picture,
}) => {
  const formData = new FormData();
  formData.append("picture", picture);

  try {
    const response = await axios.post(
      `http://localhost:5012/api/tutor/qualification/${id}`,
      formData
    );
    toast.success("Qualification uploaded successfully");
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to upload qualification");
    throw error;
  }
}