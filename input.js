let connection;
const {
  EXIT_KEY,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_LEFT_KEY,
  CHAT_ENCOURGAE_KEY,
  CHAT_WARNING_KEY,
  CHAT_SNAKE_KEY,
  CHAT_TAUNT_KEY
} = require("./constants");

const handleUserInput = function(key) {
  if (key === EXIT_KEY) {
    console.log("Exiting game...");
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === CHAT_SNAKE_KEY) {
    connection.write("Say: hisssssssss");
  }
  if (key === CHAT_ENCOURGAE_KEY) {
    connection.write("Say: you got thisssss");
  }
  if (key === CHAT_WARNING_KEY) {
    connection.write("Say: too close!");
  }
  if (key === CHAT_TAUNT_KEY) {
    connection.write("Say: get snaked");
  }
  
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = setupInput;