import { Key } from "./defaultr/Key";
import { JoltError } from "./errors/JoltError";

export class JObject {

    [index: string]: Object;

    constructor(value?: Object) {
        if (value !== undefined) {
            Object.keys(value).forEach(k => {
                this[k] = Reflect.get(value, k);
            });
        }
        Object.setPrototypeOf(this, JObject.prototype);
    }


    public static fromJsonString(value: string): JObject {
        try {
            return new JObject(JSON.parse(value));
        } catch (error) {
            throw new JoltError(`Unable to serialize JSON: ${error.message}`);
        }

    }
}