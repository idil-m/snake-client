const connect = require("./client.js")

const conn = connect();
conn.on("connect", ()=>{
  console.log("Successfully connected to game server")
  conn.write("Name: SNK")
})
