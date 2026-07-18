export function getTelegramUser() {

  if (
    window.Telegram &&
    window.Telegram.WebApp
  ) {

    const tg =
      window.Telegram.WebApp;


    tg.ready();


    return tg.initDataUnsafe.user || null;

  }


  return null;

}