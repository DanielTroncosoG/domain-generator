import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let hacks = [".com", ".us", ".cl", ".org", ".net"];

let numero = rango => Math.floor(Math.random() * rango);

const armarDomain = (pron, adj, noun, hacks) => {
  let domain = `${pron[numero(pron.length)]}${adj[numero(adj.length)]}${
    noun[numero(noun.length)]
  }${hacks[numero(hacks.length)]}`;
  return domain;
};

let domainRandom = document.querySelector("#domainRandom");

const showDomain = () => {
  domainRandom.innerHTML = armarDomain(pronoun, adj, noun, hacks);
};

const boton = document
  .querySelector("#ClickMe")
  .addEventListener("click", showDomain);
