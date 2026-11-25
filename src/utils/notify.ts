// Email notification service for DTU Merch alerts
const TARGET_EMAIL = "merchdtudce@gmail.com";

interface NotificationPayload {
  subject: string;
  data: Record<string, string | number | null | undefined>;
}

export async function sendEmailNotification(payload: NotificationPayload) {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const bodyData: Record<string, unknown> = {
    _subject: payload.subject,
    _template: "table",
    _captcha: "false",
    ...payload.data,
    "Timestamp (IST)": timestamp,
  };

  try {
    // 1. Direct browser dispatch via FormSubmit to merchdtudce@gmail.com
    await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(bodyData),
    });
  } catch (err) {
    console.warn("[Email Notification - FormSubmit Direct]", err);
  }

  try {
    // 2. Also notify internal Next.js API proxy route for redundancy
    await fetch("/api/notify-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });
  } catch (err) {
    console.warn("[Email Notification - Internal API]", err);
  }
}
