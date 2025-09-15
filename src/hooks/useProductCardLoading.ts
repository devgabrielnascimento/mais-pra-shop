import { useState, useEffect } from "react";


export function useProductCardLoading(): { isLoading: boolean } {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return { isLoading };
}
