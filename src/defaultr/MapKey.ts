import { Key } from "./Key";

export class MapKey extends Key {

    constructor(rawJsonKey: string, spec: Object) {
        super(rawJsonKey, spec);
    }

    GetLiteralIntKey(): Number {
        throw new ReferenceError("Shouldn't be be asking a MapKey for int getLiteralIntKey().");
    }
}