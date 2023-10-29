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
    

	const axios = require('axios');

	const options = {
  	method: 'POST',
  	url: 'https://api.render.com/v1/services/srv-ckud7cmb0mos738u2ssg/suspend',
  	headers: {
    	accept: 'application/json',
    	authorization: 'Bearer rnd_dbjVtRsFHMVGqUPbdHtlPLN4ulbq'
  	}
	};

	axios
  	.request(options)
  	.then(function (response) {
    	console.log(response.data);
  	})
  	.catch(function (error) {
    	console.error(error);
  	});

});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`Server is up and running, server listening on port ${PORT}.`);
});
