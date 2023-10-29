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
    

	const sdk = require('api')('@render-api/v1.0#1ifry11lo91zxhg');

	sdk.auth('rnd_dbjVtRsFHMVGqUPbdHtlPLN4ulbq');
	sdk.resumeService({serviceId: 'srv-ckud7cmb0mos738u2ssg'})
  	.then(({ data }) => console.log(data))
  	.catch(err => console.error(err));
		});

});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`Server is up and running, server listening on port ${PORT}.`);
});
