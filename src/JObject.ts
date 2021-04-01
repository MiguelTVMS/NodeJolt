export class JObject extends Object {
    constructor(value?: any) {
        super(value);
        Object.setPrototypeOf(this, JObject.prototype);
    }

    public static fromJsonString(value: string): JObject {
        return new JObject(JSON.parse(value));
    }
}