import Singleton from './Singleton'

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log("A es igaul a b?", a === b);