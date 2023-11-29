import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataState, setDataState] = useState("");
  const getData = async () => {
    const response = await fetch("http://localhost:4200/api/status");
    const data = await response.json();
    console.log(data);
    setDataState(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="App">{dataState.port}</div>
      <div className="Me">{dataState.project}</div>
    </>
  );
}

export default App;
