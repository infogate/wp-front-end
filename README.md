# Learning Gulp

This is a source repository to compliment the youtube videos about NodeJS and gulp.

- Playlist: https://www.youtube.com/playlist?list=PLwQf6Mb9WjZAcbae_O76poYwstJWvSZVo
- Video 1: http://youtu.be/No-r-7I1BCQ
- Video 2: https://www.youtube.com/watch?v=7U6KSOWF2Mo
- Video 3: https://www.youtube.com/watch?v=GYJmLBt4nRY

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