// Email notification via internal API route (which uses Nodemailer + Gmail SMTP)

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
    ...payload.data,
    "Timestamp (IST)": timestamp,
  };

  try {
    const res = await fetch("/api/notify-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });
    if (!res.ok) console.warn("[Email Notification] API returned", res.status);
  } catch (err) {
    console.warn("[Email Notification]", err);
  }
}
