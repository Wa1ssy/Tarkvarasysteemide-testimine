function runCLI(args = process.argv.slice(2)) {
  if (args.length === 0) {
    console.log('Viga: puudub argument');
    process.exit(1);
  }

  const [command, name] = args;

  if (command === 'hello' && name) {
    console.log(`Hello, ${name}!`);
  } else if (command === 'hello' && !name) {
    console.log('Viga: nimi puudub');
  } else {
    console.log(`Tundmatu käsk: ${command}`);
  }
}

if (require.main === module) {
  runCLI();
}

module.exports = { runCLI };
