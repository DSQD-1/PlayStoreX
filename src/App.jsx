import Header from "./components/Header";

import TelegramAuth from "./components/TelegramAuth";


function App() {


  return (

    <div className="app">


      <Header />


      <main>


        <TelegramAuth />


        <section className="hero">


          <h1>
            🎮 PlayStoreX
          </h1>


          <p>
            Маркетплейс игр, аккаунтов и Robux
          </p>


        </section>



      </main>


    </div>

  );

}


export default App;