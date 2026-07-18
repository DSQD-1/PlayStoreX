import { useEffect, useState } from "react";

import { getTelegramUser } from "../telegram/telegram";

import { loginUser } from "../api";



function TelegramAuth() {


  const [user, setUser] = useState(null);



  useEffect(() => {


    async function auth() {


      const telegramUser =
        getTelegramUser();



      if (!telegramUser) {

        return;

      }



      const result =
        await loginUser(
          telegramUser
        );



      setUser(
        result.user
      );


    }



    auth();


  }, []);



  return (

    <div>

      {user ? (

        <p>
          👋 Привет, {user.first_name}
        </p>

      ) : (

        <p>
          Ожидание Telegram...
        </p>

      )}

    </div>

  );

}


export default TelegramAuth;