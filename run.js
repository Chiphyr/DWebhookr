/*
DWebhookr 1.0
Made by Chiphyr (Chiphyr ✨#0001)
Licensed under the MIT License.
*/

const axios = require('axios');
const inquirer = require('inquirer');
const chalk = require('chalk');

const questions = [{
    type: 'input',
    name: 'url',
    message: "Please enter the webhook URL you'd like to use.\n",
}, {
    type: 'input',
    name: 'username',
    message: "\n\nNice! Now tell me the username you want the message to hold.\n",
}, {
    type: 'input',
    name: 'message',
    message: "\n\nOkidoki! Now the message?\n",
}];

console.log(chalk.green.bold.underline("DWebhookr") + " by "  + chalk.bold("Chyphyr (Chiphyr ✨#0001)\n\n"));

inquirer.prompt(questions).then(answers => {
    let url = answers['url'];
    let username = answers['username'];
    let message = answers['message'];

    let data = {
        "username": username,
        "content": message
    };
    
    try{
        axios({
            method: 'post',
            url: url,
            data: data
        });
    } catch(e){
        console.log('Agh! I encountered an error.\n\n\n')
        console.log(e);
        return;
    };
    console.log("That's been sent.");
    return;
});
