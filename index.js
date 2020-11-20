// External
import repl from "repl";
import lodash from "lodash";
import Arweave from "arweave";
import smartweave from "smartweave";

const arweave = Arweave.init({
    host: 'arweave.net',
    protocol: 'https',
    port: 443
});

let replServer = repl.start({
    prompt: "smartweave > ",
});

const context = {
    arweave,
    ...smartweave,
    lodash,
};

console.log(`
*********************************
*       Smartweave Console      *
*********************************

examples:
> await readContract(arweave, "qcxXgQxu1XuHDMYJW9adKn9P8a06_KWEwwyr2y0vkZs")

Press enter to start.
`);

lodash.assign(replServer.context, context);
