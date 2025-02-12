const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

const router = require("./router/router");

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

const server = app.listen(port, () =>
   console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
