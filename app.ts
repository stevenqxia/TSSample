// A sample project to try modulization of TypeScript

import {meow} from "./modules/cat";
import {bark} from "./modules/dog";

console.log(meow());
console.log(bark());
