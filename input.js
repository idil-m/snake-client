let connection;  

const handleUserInput = function (key) {
  if (key === '\u0003') {  // Exit on Ctrl+C
    console.log("Exiting game...");
    process.exit();
  }
  if (key === 'w') {
    console.log('w')
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
};

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = setupInput 