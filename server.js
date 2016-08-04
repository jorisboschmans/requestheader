var app = require("express")();

app.get("/api/whoami", function(req, res){
	res.end(JSON.stringify({
		ipaddress: req.ip.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/)[0],
		language: null,
		software: null
	}));
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Server is listening...");
});