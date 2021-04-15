import { MatchedElement } from "../tree/MatchedElement";
import { WalkedPath } from "../tree/WalkedPath";
import { IPathElement } from "./IPathElement";

export interface IMatchablePathElement extends IPathElement {
    /**
     * See if this PathElement matches the given dataKey.  If it does not match, this method returns null.
     * If this PathElement does match, it returns a LiteralPathElement with subKeys filled in.
     * @param dataKey string key value from the input data
     * @param walkedPath "up the tree" list of LiteralPathElements, that may be used by this key as it is computing its match
     * @return null or a matched LiteralPathElement
     */
    match(dataKey: string, walkedPath: WalkedPath): MatchedElement;
}
