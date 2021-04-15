import { JObject } from "../../JObject";
import { JToken } from "../../JToken";
import { IMatchablePathElement } from "../pathelement/IMatchablePathElement";
import { WalkedPath } from "../tree/WalkedPath";

export interface IBaseSpec {
    /**
     * Gimme the LHS path element
     * @return LHS path element for comparison
     */
    getPathElement(): IMatchablePathElement;

    /**
     * This is the main recursive method of the Shiftr/Templatr/Cardinality parallel "spec" and "input" tree walk.
     *
     * It should return true if this Spec object was able to successfully apply itself given the
     *  inputKey and input object.
     *
     * In the context of the Shiftr parallel treewalk, if this method returns true, the assumption
     *  is that no other sibling Shiftr specs need to look at this particular input key.
     *
     * @return true if this this spec "handles" the inputkey such that no sibling specs need to see it
     */
    apply(inputKey: string, inputOptional: JToken, walkedPath: WalkedPath, output: JObject, context: JObject): boolean;
}
