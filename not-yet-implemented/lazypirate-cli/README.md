# lazypirate-cli
The essential npm tool for lazy pirates.

Ever get an exciting idea you wanna prototype, roll up your sleeves, start setting the project up...

... look up the right command for this thing
... fix that thing
... forget what the project is about...

well this is the tool for you!

In two lines of code this tool will create boilerplates for several common applications:

- Webpack
- A-Frame
- P5
- socket.io
- johnny-five

once installed, running npm start will open up your hot-reload enabled project in your favourite web browser.

## Quick Start - Local Install

A local install is recommended, the cli package is very lightweight as its main purpose is to install other packages and move a few files around.
Begin by running the following in an empty directory:

yep an empty directory
```
npm i lazypirate-cli
```
Once installed, simply run the init command with your chosen boilerplate

example:
```
npx lazypirate init p5
```

### Boilerplate options:
```
npx lazypirate init webpack
npx lazypirate init aframe
npx lazypirate init socket.io
npx lazypirate init p5
npx lazypirate init johnny-five
```


## Quick Start - Global Install

If installed globally no need for `npx`.
First non-flag argument after create will be the new directory.
The second argument is the boilerplate type. ie. 'aframe'.

```
npx lazypirate create -f myProject webpack

npx lazypirate create -f myProject aframe

```
## Flags

```
-f
``` 
This will delete the chosen folder if it already exists.

Otherwise the program will not run if the folder exists.


### to run webpack on local server for testing of network and mobile devices

```
npx webpack-dev-server --host 0.0.0.0
```

## TODO

- Johnny 5 auto resolve arduino port using avr-girl
  - Check robot-io-johnny-five for how to

- Add raspi board support - seperate from arduino
```

//code for raspi board
npm i raspi-io
const Raspi = require('raspi-io');
const board = new five.Board({
    io: new Raspi()
})
```