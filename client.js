const net = require("net");

const { IP, PORT } = require("./constants")

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });
  // establishing the 'connect' event
  conn.on("connect", () => {
    console.log("Successfully connected to a game server");
    conn.write("Name: MOE");
    // conn.write("Move: up");
    // setInterval(() => {conn.write("Move: up")}, 50);
  });

  return conn;
};

module.exports = { connect };
