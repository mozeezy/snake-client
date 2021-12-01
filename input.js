const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "\u0087") {
    cgtonnection.write("Move: up");
 }
  if (key === "\u0073") {
    connection.write("Move: down");
 }
  if (key === "\u0071") {
    connection.write("Move: left");
 }
  if (key === "\u0064") {
    connection.write("Move: right");
 }
 connection.write("Say: YEAH")
};

setupInput();

module.exports = {setupInput};