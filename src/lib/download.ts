/**
 * Livraison de fichiers côté navigateur.
 *
 * Les documents sont hébergés sur un CDN (donc cross-origin) : l'attribut
 * `download` est ignoré par le navigateur et la page naviguerait vers le PDF.
 * On récupère donc le fichier en Blob à l'avance, puis le clic déclenche la
 * sauvegarde de façon synchrone (l'activation utilisateur est conservée,
 * Safari/iOS étant le plus strict sur ce point).
 */

/** Déclenche la sauvegarde d'un Blob déjà en mémoire. */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // La libération immédiate du Blob URL casse le téléchargement sur certains navigateurs.
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}

/**
 * Sauvegarde un fichier : partage natif sur mobile quand c'est possible
 * (« Enregistrer dans Fichiers » sur iOS), sinon téléchargement classique.
 */
export async function deliverFile(blob: Blob, filename: string) {
  try {
    const file = new File([blob], filename, { type: blob.type });
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (touch && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: filename });
        return;
      } catch (error) {
        if ((error as DOMException).name === "AbortError") return;
      }
    }
  } catch {
    // Partage indisponible : on retombe sur le téléchargement.
  }
  downloadBlob(blob, filename);
}

/** Taille lisible en français : 4 022 279 -> "3,8 Mo". */
export function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "";
  const mb = bytes / 1024 / 1024;
  if (mb >= 1) return `${mb.toFixed(1).replace(".", ",")} Mo`;
  return `${Math.max(1, Math.round(bytes / 1024))} Ko`;
}
