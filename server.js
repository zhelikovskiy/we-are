import express from "express";
import * as http from "http";

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
