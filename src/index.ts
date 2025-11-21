import { Wallet } from "./Wallet.ts";

const myWallet: Wallet = new Wallet("blue", "SMALL");

myWallet.addVola(200_000);
console.log(myWallet.checkVola());
myWallet.getVola(300);
console.log(myWallet.checkVola());

console.log(myWallet.isOpen);
console.log(myWallet.isLost);
