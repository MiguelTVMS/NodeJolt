import { JEnumerable } from "./JEnumerable";
import { JObject } from "./JObject";
import { JTokenType } from "./JTokenType";

export interface IJToken extends JEnumerable<JToken> {
    [key: string]: Object | Array<any>;
    readonly Type: JTokenType;

    clone(): IJToken;
}

export class JToken extends JEnumerable<JToken> implements IJToken {
    [key: string]: Object | JEnumerable<JToken>;
    readonly Type: JTokenType;

    constructor(value?: Object | JEnumerable<JToken>) {
        super();

        // Checking the type of the value parameter.
        if (value == undefined) this.Type = JTokenType.Undefined;
        else if (value === null) this.Type = JTokenType.Null;
        else if (typeof value === "function" || typeof value === "object") this.Type = JTokenType.Object;
        else if (Array.isArray(value)) this.Type = JTokenType.Array;
        else this.Type = JTokenType.None;

        // If it's an array
        if (this.Type === JTokenType.Array) this.push(value as JEnumerable<JToken>);
    }

    clone(): IJToken {
        throw new Error("Method not implemented.");
    }
}
