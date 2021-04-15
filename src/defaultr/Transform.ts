import { ITransform } from "../ITransform";
import { SpecDriven } from "../SpecDriven";
import { JObject } from "../JObject";
import { Key } from "./Key";
import { WildCards } from "./WildCards";
import { JToken } from "../JToken";

export class Defaultr implements SpecDriven, ITransform {
    private readonly _mapRoot: Key;
    private readonly _arrayRoot: Key | undefined;

    constructor(spec: JToken) {
        var rootString = SpecDriven.RootKey;

        {
            var rootSpec = new JObject();
            rootSpec[rootString] = spec;
            this._mapRoot = Key.ParseSpec(rootSpec).values().next().value;
        }

        {
            var rootSpec = new JObject();
            rootSpec[rootString + WildCards.ARRAY] = spec;
            var tempKey: Key;
            try {
                tempKey = Key.ParseSpec(rootSpec).values().next().value;
                this._arrayRoot = tempKey;
            } catch (FormatException) {
                // this is fine, it means the top level spec has non numeric keys
                //  if someone passes a top level array as input later we will error then
            }
        }
    }

    transform(input?: Object): Object {
        if (input == undefined) input = new JObject();

        return new Object();
    }
}
