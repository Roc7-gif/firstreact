import { useState, useEffect, useCallback } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);       // données reçues
  const [loading, setLoading] = useState(true); // état de chargement
  const [error, setError] = useState(null);     // erreurs
  const [reload, setReload] = useState(0);      // pour refetch manuel

  const refetch = useCallback(() => {
    setReload((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController(); // permet d'annuler la requête
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    fetch(url, { ...options, signal })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP : ${res.status}`);
        }
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return res.json();
        } else {
          return res.text();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort(); // annuler si le composant est démonté
  }, [url, reload, options]);

  return { data, loading, error, refetch };
}
