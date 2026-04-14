import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const fetch = async () => {
    const result = await axios.get("https://backend-spring-production-d3e7.up.railway.app/");
    console.log(result.data);
    setData(result.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1>{data}</h1>
    </>
  );
}

export default App;
