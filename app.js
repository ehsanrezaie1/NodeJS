  


const path = require('path');
pathObj = path.parse(__filename)
console.log(pathObj);

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);

// file system
const fs = require('fs');
const mfiles = fs.readdirSync('./')
console.log(`Files : ${mfiles}`);
// async file
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err)
    else
    console.log('Result:', files)
})


const Logger = require('./logger')
const logger = new Logger();

// Register listener , order before raised event
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');



// jshint
function helloWorld(name) {
    console.log("Hello "+name);    
    
}

helloWorld("Ehsan");



const http = require('http');
const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if( req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});
/*
server.on('connection', (socket) =>{
    console.log('New Connection')
})
*/
server.listen(3000);

console.log('Listening on port 3000 ...')