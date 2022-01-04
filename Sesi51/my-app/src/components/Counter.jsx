import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     window.addEventListener("blur", () => {
  //       console.log("Effect berjalan");
  //     });

  //     return () => {
  //       window.removeEventListener("blur");
  //     };
  //   });
  useEffect(() => {
    console.log("Efek berjalan/di-trigger di component counter");
  }, [counter]);

  return (
    <div>
      <h2>Let's count!</h2>
      <h3>{counter}</h3>

      <button
        onClick={() => setCounter(counter + 1)}
        //   style="font-size: 2em"
        style={{ fontSize: "2em" }}
      >
        Hit me!
      </button>
    </div>
  );
}

export default Counter;
