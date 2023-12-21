import { wordList } from "./wordList.js";
export let printConsole = variable => {console.log(variable)};

export let randomNumber = () => Math.floor(Math.random() * wordList.length);