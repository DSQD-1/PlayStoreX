import { useEffect, useState } from "react";

import { getTelegramUser } from "../telegram/telegram";


function UserProfile() {

  const [user, setUser] = useState(null);


  useEffect(() => {

    const telegramUser = getTelegramUser();

    setUser(telegramUser);

  }, []);



  return (

    <div className="profile">


      <span>

        👤 {user ? user.first_name : "Гость"}

      </span>


      <span className="balance">

        💰 0 ₽

      </span>


    </div>

  );

}


export default UserProfile;