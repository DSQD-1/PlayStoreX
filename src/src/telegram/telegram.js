const tg = window.Telegram?.WebApp;


export function initTelegram() {

  if (!tg) {

    console.log("Telegram WebApp не найден");

    return null;

  }


  tg.ready();

  tg.expand();


  return tg;

}



export function getTelegramUser() {

  if (!tg) return null;


  return tg.initDataUnsafe?.user || null;

}