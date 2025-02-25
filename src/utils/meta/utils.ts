export const updateMetaTag = (name: string, content: string): string => {
  const metaTag = document.querySelector(`meta[name="${name}"]`);
    
  if (metaTag) {
    metaTag.setAttribute('content', content);
  } else {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  }
  
  return content;
};