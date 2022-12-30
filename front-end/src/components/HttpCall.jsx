import { useEffect, useState } from "react";

export default function HttpCall() {
  const [score, setScore] = useState("");

  useEffect(() => {
    fetch("/http-call", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setScore(responseData.data);
      });
  });
  return (
    <>
      <h3>Data from normal http</h3>
      <h3 className="http">{score}</h3>
    </>
  );
}
