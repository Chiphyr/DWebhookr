# DWebhookr
This is just what I use to send messages through webhooks in Discord. See below for help!

## Installing
Just download the repository as a ZIP file and extract it to any folder.

If you don't have `node.js` installed yet, get it at https://nodejs.org/.

Open a terminal/command prompt in the directory you extracted the ZIP to, and run `npm i inquirer`, followed by `npm i axios`, then `npm i chalk`. These are what the app relies on.

## Configuration
There is two versions of this. One takes the username and webhook URL from a configuration file, and one takes it from user input in the terminal. If you're going to be using this for more than a few messages, I recommend the `run-json.js` file. For just a few messages, use the `run.js` file.

Now how do I use the config file? It's simple. Just change the placeholders for your webhook URL, and the username you wish to use.

## Running
Okay, on to the real stuff. In the terminal window, just run `node run.js`, or `node run-json.js` depending on your preference. Enjoy!
