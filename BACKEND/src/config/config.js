require("dotenv").config()
// Configurações de ascesso ao banco de dados
 const config={
    host:process.env.DATABASE_IP,
    user:process.env.DATABASE_USER,
    password:process.env.DTABASE_PASS,
    port:process.env.DATABASE_PORT,
    database:process.env.DATABASE_NAME
}
module.exports = config