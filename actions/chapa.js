import axios from "axios";
import { toast } from "sonner";

export async function initializeChapaCheckout({
    amount,
    email,
    first_name,
    last_name,
    phone_number,
}) {
  try {
    const payload = {
      amount,
      email,
      first_name,
      last_name,
      phone_number,
      callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
      return_url: "https://www.test.com/",
    };

    const response = await axios.post('http://localhost:5012/api/payment/init', payload);
    toast.success("Payment initialized, redirecting to payment page...");
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to initialize payment");
  }
}
