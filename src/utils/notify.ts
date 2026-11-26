// Email notification via Web3Forms (CORS-simple FormData in browser) + /api/notify-cart backup

export interface NotificationPayload {
  subject: string;
  data: Record<string, string | number | null | undefined>;
}

const CLIENT_WEB3FORMS_KEY = (
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "910f3bcc-ada0-4311-a7de-022ed46e4119"
).trim();

async function sendWeb3FormsFromBrowser(
  subject: string,
  fields: Record<string, string | number | null | undefined>
): Promise<boolean> {
  if (!CLIENT_WEB3FORMS_KEY) return false;
  try {
    const form = new FormData();
    form.append("access_key", CLIENT_WEB3FORMS_KEY);
    form.append("subject", subject);
    form.append("from_name", "DTU Merch Store");
    for (const [k, v] of Object.entries(fields)) {
      if (v != null) form.append(k, String(v));
    }
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
    const json = await res.json().catch(() => null);
    return !!(res.ok && json?.success);
  } catch {
    return false;
  }
}

export async function sendEmailNotification(payload: NotificationPayload): Promise<boolean> {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const fields = {
    ...payload.data,
    "Timestamp (IST)": timestamp,
  };

  const sentViaClientWeb3 = await sendWeb3FormsFromBrowser(payload.subject, fields);

  try {
    const res = await fetch("/api/notify-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _subject: payload.subject,
        _skipWeb3Forms: sentViaClientWeb3,
        ...fields,
      }),
    });
    return sentViaClientWeb3 || res.ok;
  } catch {
    return sentViaClientWeb3;
  }
}
