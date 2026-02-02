export async function POST(request) {
  console.log('Contact API route hit')
  try {
    // Get environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    console.log(serviceId, templateId, publicKey, privateKey)

    if (!serviceId || !templateId || !publicKey) {
      console.error("Email configuration is missing. Please check environment variables.");
      return JSON.stringify(
        { error: "Email configuration is missing. Please check environment variables." },
        { status: 500 }
      );
    }

    // Get payload from request
    const payload = await request.json();
    const { user_name, company, email, message } = payload;
    console.log(user_name, company, email, message)

    if (!user_name?.trim() || !company?.trim() || !email?.trim() || !message?.trim()) {
      return JSON.stringify(
        { error: "Name, company, email, and message are required" },
        { status: 400 }
      );
    }

    // EmailJS REST API (see https://www.emailjs.com/docs/rest-api/send/)
    const body = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        user_name,
        company,
        email,
        message,
      },
      accessToken: privateKey,
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    if (!response.ok) {
      console.error("EmailJS error:", response.status, text);
      return JSON.stringify(
        { error: "Failed to send email" },
        { status: 502 }
      );
    }

    return JSON.stringify(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return JSON.stringify(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
