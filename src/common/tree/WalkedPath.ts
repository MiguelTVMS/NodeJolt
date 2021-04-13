import { JToken } from "../../JToken";
import { MatchedElement } from "./MatchedElement";
import { PathStep } from "./PathStep";

export class WalkedPath extends Set<PathStep> {
    constructor(treeRef: JToken, matchedElement: MatchedElement) {
        super();
        this.add(new PathStep(treeRef, matchedElement));
    }
}
