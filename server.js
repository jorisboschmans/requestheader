var app = require("express")();

app.get("/api/whoami", function(req, res){
	var sw = req.headers["user-agent"].match(/\(.+\)/)[0];
	sw = sw.substring(1,sw.length-1);
	res.end(JSON.stringify({
		ipaddress: req.headers['x-forwarded-for']/*.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/)[0]*/,
		language: req.headers["accept-language"].match(/(^.+)(?=\,)/)[0],
		software: sw
	}));
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Server is listening...");
});