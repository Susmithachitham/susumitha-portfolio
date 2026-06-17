import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const startTyping = () => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    };

    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
}
