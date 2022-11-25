// / create a rolling file logger based on date/time that fires process events
const opts = {
	errorEventName:'error',
    logDirectory:'storage/logs', // NOTE: folder must exist and be writable...
    fileNamePattern:'log-<DATE>.log',
    dateFormat:'YYYY-MM-DD',
    timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
};

const log = require('simple-node-logger').createRollingFileLogger( opts );

module.exports = log;