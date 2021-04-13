import { IJToken, JToken } from "./JToken";

export interface IJEnumerable<T extends IJToken> extends Set<T> {}

export class JEnumerable<T extends JToken> extends Set<T> implements IJEnumerable<T> {}
