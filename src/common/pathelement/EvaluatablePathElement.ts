import { WalkedPath } from "../tree/WalkedPath";
import { PathElement } from "./PathElement";

export interface EvaluatablePathElement extends PathElement {
    evaluate(walkedPath: WalkedPath): string;
}
