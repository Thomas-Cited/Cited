import { useEffect, useMemo } from 'react';

export function useJsonLd(schema: Record<string, unknown> | null) {
  const schemaString = useMemo(
    () => (schema ? JSON.stringify({ '@context': 'https://schema.org', ...schema }) : null),
    [schema],
  );

  useEffect(() => {
    if (!schemaString) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = schemaString;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schemaString]);
}
