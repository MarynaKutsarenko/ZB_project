import { Options } from "./options";

export interface Select {
   "title": string,
   "options": Array<Options>,
   "image"?: string, 
   "type": string
}
