import { WalkedPath } from "../tree/WalkedPath";
import { IPathElement } from "./IPathElement";

export interface IEvaluatablePathElement extends IPathElement {
    evaluate(walkedPath: WalkedPath): string;
}
