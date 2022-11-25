var logger = require("./utilities/logger");
var axios = require('axios');
var cron = require('node-cron');
var https = require('https');

console.log('Cron Running');

let iteration = 0;

logger.info('Cron Running');

var task = cron.schedule('* * * * *', () =>  {

    iteration++;
    
    logger.warn('\n\t Iteration ' + iteration);
    console.log('\n\t Iteration ', iteration);

    // At request level
    const agent = new https.Agent({  
        rejectUnauthorized: false
    });

    axios.get('https://game.test/job/mainCron.php', { httpsAgent: agent })
        .then(function (response) {
            // handle success
            console.log(response.data);
            logger.info(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            logger.error(error);
        })
        .finally(function () {
            // always executed
        });
});

// task.stop();
