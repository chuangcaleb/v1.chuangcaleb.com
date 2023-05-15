import type { APIRoute } from "astro";
import axios, { AxiosError } from "axios";

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const email = data.get("email");
  const message = data.get("message");

  // Validation
  if (!email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const requestBody = {
    email: email,
    message: message,
  };

  // Execution
  try {
    // const response = await axios.post(
    //   import.meta.env.PIPEDREAM_URL,
    //   requestBody,
    //   { timeout: 5000 }
    // );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: (error as AxiosError).message,
      }),
      { status: Number((error as AxiosError).code) || 520 }
    );
  }

  // Return
  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
