var app = require("express")();

app.get("/api/whoami", function(req, res){
	res.end(JSON.stringify({
		ipaddress: req.connection.remoteAddress.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/)[0]
	}));
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Server is listening...");
});