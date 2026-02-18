/**
 * Submit data to a Tally form using a hidden iframe.
 * Standard HTML form POST avoids CORS issues that block fetch().
 */
export function submitToTally(
  tallyUrl: string,
  fields: Record<string, string>,
): Promise<void> {
  return new Promise((resolve) => {
    const id = `tally-${Date.now()}`;

    const iframe = document.createElement('iframe');
    iframe.name = id;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = tallyUrl;
    form.target = id;
    form.style.display = 'none';

    for (const [name, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    }

    document.body.appendChild(form);

    const cleanup = () => {
      if (document.body.contains(iframe)) document.body.removeChild(iframe);
      if (document.body.contains(form)) document.body.removeChild(form);
    };

    const timer = setTimeout(() => {
      cleanup();
      resolve();
    }, 5000);

    iframe.addEventListener('load', () => {
      clearTimeout(timer);
      cleanup();
      resolve();
    });

    form.submit();
  });
}
