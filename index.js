const express = require("express");

const app = express();

app.get("/", function(res, resp) {
	return resp.json({ hi: "world" });
});

app.listen(5000);
