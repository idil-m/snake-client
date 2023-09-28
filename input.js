const handleUserInput = function (key) {
  // If the key is \u0003 (ctrl+c), exit the game
  if (key === '\u0003') {
    console.log("Exiting game...");
    process.exit();
  }
  // if the key is up
  // if (key === '\up') {
  //   conn.write("Move: up")
  // }
  
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = setupInput 