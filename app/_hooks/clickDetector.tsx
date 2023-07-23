import { useEffect, useState } from "react";

const useClickDetector = ({ ref }: { ref: React.Ref<HTMLElement> }) => {
  const [clickedIn, setClickedIn] = useState(false);
  useEffect(() => {
    window.onclick = (event) => {
      if (
        //@ts-ignore
        event.target.contains(ref.current) &&
        //@ts-ignore
        event.target !== ref.current
      ) {
        setClickedIn(false);
      } else {
        setClickedIn(false);
      }
    };
  }, [ref]);
  return clickedIn;
};

export default useClickDetector;
