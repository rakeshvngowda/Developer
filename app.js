const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" name="message">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method == 'POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>')
    res.write('<h2>Hello from my Node.js Server</h2>')
    res.write('</html>');
    res.end();
    // res.write();
});

server.listen(3030);