# Learning Gulp

This is a source repository to compliment the youtube videos about NodeJS and gulp.

## Install

Windows/Mac

    https://nodejs.org/download/

Linux (Debian Based)

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs
    sudo chown -R $(whoami) ~/.npm

## Commands

Run NodeJS

    node

Run Node Package Manager

    npm

Install a package

    npm install packagename

Install gulp globally

    (Windows)
    npm install gulp -g  

    (Unix)
    sudo npm install gulp -g

Create a empty nodejs `package.json` file

    npm init

Install when a `package.json` is in the same folder

    npm install

Running Gulp

    gulp taskname