const stdin = process.stdin;

// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setTimer = () => {
  stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.stdout.write('\nThanks for using me, ciao!\n');
      process.exit();
    }
    if (key === 'b') {
      process.stdout.write('\x07');
    }
    if (Number(key) > 0 && Number(key) < 10) {
      console.log(`setting timer for ${key} seconds`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(key) * 1000);
    }
  });
};

setTimer();