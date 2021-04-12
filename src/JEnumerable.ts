import { IJToken, JToken } from "./JToken";

export interface IJEnumerable<T extends IJToken> extends Array<T> {}

export class JEnumerable<T extends JToken> extends Array<T> implements IJEnumerable<T> {}
