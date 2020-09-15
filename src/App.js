import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";

const alanKey = "";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);

  return (
    <div className="app">
      <h1>Test</h1>
    </div>
  );
}

export default App;
