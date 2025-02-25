/**
 * Transforms a Google Drive sharing URL into a direct image URL
 */
export const getImageUrl = (url: string | null | undefined): string => {
  if (!url) {
    return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80';
  }

  // Check if it's a Google Drive URL
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/id=([^&]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }

  return url;
};