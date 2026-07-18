import { useEffect } from "react";

import Header from "./components/Header";
import Home from "./src/pages/Home";

import { initTelegram } from "./telegram/telegram";


function App() {

  useEffect(() => {

    initTelegram();

  }, []);


  return (

    <div className="app">

      <Header />

      <Home />

    </div>

  );

}


export default App;