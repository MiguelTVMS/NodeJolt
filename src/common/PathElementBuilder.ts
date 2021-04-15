import { IMatchablePathElement } from "./pathelement/IMatchablePathElement";
import { IPathElement } from "./pathelement/IPathElement";

export class PathElementBuilder {
    private constructor() {}

    public static buildMatchablePathElement(rawJsonKey: string): IMatchablePathElement {}

    /**
     * Inspects the key in a particular order to determine the correct sublass of PathElement to create.
     * @param origKey string that should represent a single PathElement
     * @return a concrete implementation of PathElement
     */
    public static parseSingleKeyLHS(origKey: string): IPathElement {
        var elementKey: string, // the string to use to actually make Elements
            keyToInspect: string; // the string to use to determine which kind of Element to create

        if (origKey.includes("\\")) {
            // only do the extra work of processing for escaped chars, if there is one.
            keyToInspect = SpecStringParser.RemoveEscapedValues(origKey);
            elementKey = SpecStringParser.RemoveEscapeChars(origKey);
        } else {
            keyToInspect = origKey;
            elementKey = origKey;
        }
    }
}
