import { IMatchablePathElement } from "../../common/pathelement/IMatchablePathElement";
import { IBaseSpec } from "../../common/spec/IBaseSpec";
import { WalkedPath } from "../../common/tree/WalkedPath";
import { JObject } from "../../JObject";
import { JToken } from "../../JToken";

export abstract class ShiftrSpec implements IBaseSpec {
    protected readonly _pathElement: IMatchablePathElement;

    constructor(rawJsonKey: string) {}

    getPathElement(): IMatchablePathElement {
        throw new Error("Method not implemented.");
    }
    apply(inputKey: string, inputOptional: JToken, walkedPath: WalkedPath, output: JObject, context: JObject): boolean {
        throw new Error("Method not implemented.");
    }
}
