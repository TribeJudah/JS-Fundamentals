const args = process.argv.slice(2);
const toInteger = Math.floor(Number(args[0]));

if (Number.isInteger(toInteger)) {
    console.log(`My number: ${toInteger}`);
} else {
    console.log("Not a number");
}