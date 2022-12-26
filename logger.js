// Events
const EventEmitter = require('events');
// create instance of class
// const emitter = new EventEmitter();


var url = 'http://myloggger.io/log';
class Logger extends EventEmitter{
    
    log(message) {
        // send an HTTP Request
        console.log(message);

        // Raised an event (emit : make a noise)
        this.emit('messageLogged', {id:1, url: 'http://'})
        // emitter.emit('messageLogged', {id:1, url: 'http://'})
    }
}

module.exports = Logger