const express = require("express");

const app = express();

app.get("/", function(res, resp) {
	return resp.json({ hi: "world" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
