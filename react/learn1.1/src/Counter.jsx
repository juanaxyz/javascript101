import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count berubah menjadi ", count);
  }, [count]);
  return (
    <>
      <p>Hitung : {count}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tambah 1
      </button>
      <button type="button"
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </>
  );
}

export default Counter;
