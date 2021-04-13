import { Transform } from "../Transform";
import { JObject } from "../JObject";
import { SpecDriven } from "../SpecDriven";
import { JToken } from "../JToken";
import { SpecError } from "../errors/SpecError";
import { JTokenType } from "../JTokenType";

export class Shiftr implements SpecDriven, Transform {
    constructor(spec: JToken) {
        if (spec === undefined || spec === null) throw new SpecError('Shiftr expected a spec of Map type, got "null".');
        if (spec.Type !== JTokenType.Object) throw new SpecError(`Shiftr expected a spec of Map type, got "${spec.Type}"`);
    }

    transform(input?: Object): Object {
        if (input == undefined) input = new JObject();

        return new Object();
    }
}
