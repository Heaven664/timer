const args = process.argv.slice(2).filter(arg => !isNaN(arg));

const timer = (numArray) => {
  const args = numArray.filter(arg => !isNaN(arg));

  const sorted = args.sort((a, b) => a - b);
  
  for (let number in sorted) {
    sorted[number] = Number(sorted[number]);
    if (sorted[number] < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sorted[number] * 1000);
  }
};

timer(args);