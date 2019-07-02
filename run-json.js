/*
DWebhookr 1.0
Made by Chiphyr (Chiphyr ✨#0001)
Licensed under the MIT License.
*/

const inquirer = require('inquirer');
const axios = require('axios');
const config = require('./config.json');
const chalk = require('chalk');

function next(){
    const questions = [{
        type: 'input',
        name: 'message',
        message: "Message:\n",
    }];
    
    inquirer.prompt(questions).then(answers => {
        let url = config.url;
        let username = config.username;
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
        next();
    });
};

function run(){
    const questions = [{
        type: 'input',
        name: 'message',
        message: "I'm using the config.json file. Message:\n",
    }];

    console.log(chalk.green.bold.underline("DWebhookr") + " by "  + chalk.bold("Chyphyr (Chiphyr ✨#0001)\n\n"));
    
    inquirer.prompt(questions).then(answers => {
        let url = config.url;
        let username = config.username;
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
        next();
    });
};

run();
