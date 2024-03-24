import axios from "axios";

export async function getAllCourses(){
    try {
        const res = await axios.get(`http://localhost:5012/api/course`);
        return res.data.data;
    } catch (error) {
        console.error(error);
    }
}