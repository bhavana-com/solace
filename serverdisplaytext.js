let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
	response.writeHead(200, {
		'content-type': 'text/html'
	});
	
	fs.readFile('./file1.txt', null, function (error,data) {
		if(error) {
			response.writeHead(404);
			response.write('file not found');
		} else{
			response.write(data);
		}
		response.end();
	});
};

http.createServer(handleRequest).listen(8081);