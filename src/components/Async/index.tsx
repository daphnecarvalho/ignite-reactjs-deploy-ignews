import { useEffect, useState } from "react";

export function Async() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Async</h1>
      {isButtonVisible && <button>Button</button>}
      {!isButtonVisible && <button>Button Invisible</button>}
    </div>
  );
}
