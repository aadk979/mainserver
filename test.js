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

// Assuming you have a Socket.IO server instance named 'io'


// Usage:
// Call this function when you want to close all connections, for example, before shutting down the server.



io.on("connection", (socket) => {
    

	const options = {
 	 method: 'POST',
  	hostname: 'api.render.com',
  	port: null,
  	path: '/v1/services/srv-ckud7cmb0mos738u2ssg/suspend',
  	headers: {
   	 accept: 'application/json',
    	authorization: 'Bearer rnd_dbjVtRsFHMVGqUPbdHtlPLN4ulbq'
  	}
	};

	const req = http.request(options, function (res) {
 	 	const chunks = [];

  		res.on('data', function (chunk) {
   		 chunks.push(chunk);
  		});

  		res.on('end', function () {
   		 const body = Buffer.concat(chunks);
    	 console.log(body.toString());
  		});
	});

	req.end();
});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`Server is up and running, server listening on port ${PORT}.`);
});
