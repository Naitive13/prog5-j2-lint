import { Wallet } from "./Wallet.ts";
import { Size } from "./Size.ts";

const myWallet: Wallet = new Wallet("blue", Size.LARGE);

myWallet.addVola(200_000);
console.log(myWallet.checkVola());
