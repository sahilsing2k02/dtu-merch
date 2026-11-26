// Email notification via Web3Forms (client-side) + /api/notify-cart (Resend / Gmail SMTP / server Web3Forms)

export interface NotificationPayload {
  subject: string;
  data: Record<string, string | number | null | undefined>;
  attachmentDataUrl?: string;
  attachmentName?: string;
}

const CLIENT_WEB3FORMS_KEY = (process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "").trim();

function dataUrlToBlob(dataUrl: string): Blob | null {
  const m = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!m) return null;
  const bytes = Uint8Array.from(atob(m[2]), (c) => c.charCodeAt(0));
  return new Blob([bytes], { type: m[1] });
}

async function sendWeb3FormsFromBrowser(
  subject: string,
  fields: Record<string, string | number | null | undefined>,
  attachmentDataUrl?: string,
  attachmentName?: string
): Promise<boolean> {
  if (!CLIENT_WEB3FORMS_KEY) return false;

  // Try multipart upload first (works on Web3Forms Pro with file attachments)
  if (attachmentDataUrl) {
    const blob = dataUrlToBlob(attachmentDataUrl);
    if (blob) {
      try {
        const form = new FormData();
        form.append("access_key", CLIENT_WEB3FORMS_KEY);
        form.append("subject", subject);
        form.append("from_name", "DTU Merch Store");
        for (const [k, v] of Object.entries(fields)) {
          if (v != null) form.append(k, String(v));
        }
        form.append("attachment", blob, attachmentName || "payment-screenshot.jpg");
        const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
        const json = await res.json().catch(() => null);
        if (res.ok && json?.success) return true;
      } catch {
        // Fall through to JSON submission
      }
    }
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: CLIENT_WEB3FORMS_KEY,
        subject,
        from_name: "DTU Merch Store",
        ...fields,
      }),
    });
    const json = await res.json().catch(() => null);
    return !!(res.ok && json?.success);
  } catch {
    return false;
  }
}

export async function sendEmailNotification(payload: NotificationPayload) {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const fields = {
    ...payload.data,
    "Timestamp (IST)": timestamp,
  };

  const sentViaClientWeb3 = await sendWeb3FormsFromBrowser(
    payload.subject,
    fields,
    payload.attachmentDataUrl,
    payload.attachmentName
  );

  const bodyData: Record<string, unknown> = {
    _subject: payload.subject,
    _skipWeb3Forms: sentViaClientWeb3,
    ...fields,
  };

  if (payload.attachmentDataUrl) {
    bodyData._attachmentDataUrl = payload.attachmentDataUrl;
    bodyData._attachmentName = payload.attachmentName || "payment-screenshot.jpg";
  }

  try {
    const res = await fetch("/api/notify-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });
    if (!res.ok && !sentViaClientWeb3) {
      console.warn("[Email Notification] API returned", res.status);
    }
    return res.ok || sentViaClientWeb3;
  } catch (err) {
    console.warn("[Email Notification]", err);
    return sentViaClientWeb3;
  }
}
