const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_KEY = '978224b4-a739-43a1-9312-e82daf653193';

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

/**
 * Submit form data via Web3Forms API.
 * CORS-friendly — works directly from the browser.
 */
export async function submitForm(
  subject: string,
  fields: Record<string, string>,
): Promise<void> {
  if (!WEB3FORMS_KEY) {
    throw new Error('WEB3FORMS_KEY is not configured');
  }

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `[Cited] ${subject}`,
      from_name: 'Cited Website',
      ...fields,
    }),
  });

  const data: Web3FormsResponse = await response.json();

  if (!data.success) {
    throw new Error(data.message ?? 'Form submission failed');
  }
}

/**
 * Fire-and-forget variant — swallows errors silently.
 * Use for secondary tracking (e.g. GeoScore lead capture alongside results).
 */
export function submitFormSilent(
  subject: string,
  fields: Record<string, string>,
): void {
  submitForm(subject, fields).catch(() => {});
}
