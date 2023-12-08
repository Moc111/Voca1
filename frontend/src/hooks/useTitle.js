import { useEffect, useState } from 'react';

// set title for component
function useTitle(title = 'VOCA', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title = title !== 'VOCA' ? `${title} - VOCA` : title;
    }
  }, []);

  return null;
}

export default useTitle;
