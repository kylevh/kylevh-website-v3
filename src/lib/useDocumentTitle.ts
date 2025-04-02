// src/hooks/useDocumentTitle.ts
import { useEffect } from 'react';

export const useDocumentTitle = (title: string, description?: string) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);
};