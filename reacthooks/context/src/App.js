import React, { createContext, useContext } from "react";
import "./styles.css";

const SampleContextObject = createContext();
const ConsumerComponent = () => {
  const messageText = useContext(SampleContextObject);

  console.log(messageText);

  return <p>{messageText}</p>;
};

const message = "I love React!!";

export default function App() {
  return (
    <SampleContextObject.Provider value={message}>
      <ConsumerComponent />
    </SampleContextObject.Provider>
  );
}
