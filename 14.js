
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let personName = '';
let balance = 0;

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  personName = await prompt("lotfan name shakhs ra vared konim");

  while (true) {
    let transactionType = parseInt(await prompt("noee tarakonesh ra entekhab konid (variz:1,bardasht:2,khoroj:0)"));

    if (transactionType === 0) {
      break;
    }

    let amount = parseFloat(await prompt("mablagh tarkonesh ravared konid:"));

    if (transactionType === 1) {
      balance += amount;
    } else if (transactionType === 2) {
      balance -= amount;
    } else {
      console.log("entekhab name motghayer namotabr lotfan dobare vared konid.");
    }
  }

  console.log(`mojody${personName}: ${balance}`);
  rl.close();
}

main();
