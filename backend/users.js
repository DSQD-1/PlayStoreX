const supabase = require("./database");



async function createUser(user) {

  const { data, error } = await supabase

    .from("users")

    .insert([

      {

        telegram_id: user.id,

        username: user.username || null,

        first_name: user.first_name,

        balance: 0

      }

    ])

    .select();



  if (error) {

    console.log(error);

    return null;

  }


  return data[0];

}




async function getUser(telegramId) {


  const { data, error } = await supabase

    .from("users")

    .select("*")

    .eq(
      "telegram_id",
      telegramId
    )

    .single();



  if (error) {

    return null;

  }


  return data;

}



module.exports = {

  createUser,

  getUser

};