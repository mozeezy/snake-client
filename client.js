const net = require("net");
const client = require("./client");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
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
  });

  return conn;
};

module.exports = { connect };
