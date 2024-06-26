const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

function kill(){
  const axios = require('axios');

	const options = {
  	method: 'POST',
  	url: 'https://api.render.com/v1/services/srv-cl7plbauuipc73ejtf30/suspend',
  	headers: {
    	accept: 'application/json',
    	authorization: 'Bearer rnd_dbjVtRsFHMVGqUPbdHtlPLN4ulbq'
  	}
	};

	axios
  	.request(options)
  	.then(function (response) {
    	console.log(response.data);
      io.emit("server" , "server shut down succesfully");
  	})
  	.catch(function (error) {
    	console.error(error);
  	});
}


io.on("connection", (socket) => {
    socket.on("server-kill" , (data) =>{
      if (data.akc === process.env.akc && data.acc === process.env.acc){
       kill();
       return;
      }else{
        io.emit("server" , "Authentication failed , unable to shutdown server");
	return;
      }
    });
});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`Server is up and running, server listening on port ${PORT}.`);
});
