export const updateMetaTitle = (
  title: string, 
  state: string, 
  keywordVariation: string
): void => {
  if (!title || !state || !keywordVariation) {
    return;
  }
  document.title = `${title} in ${state} - ${keywordVariation}`;
};