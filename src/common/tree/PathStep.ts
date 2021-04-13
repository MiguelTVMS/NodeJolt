import { JToken } from "../../JToken";
import { ArrayMatchedElement } from "./ArrayMatchedElement";
import { MatchedElement } from "./MatchedElement";

export class PathStep {
    private readonly _treeRef: JToken;
    public get treeRef(): JToken {
        return this._treeRef;
    }

    private readonly _matchedElement: MatchedElement;
    public get matchedElement(): MatchedElement {
        return this._matchedElement;
    }

    private readonly _origSize: Number | undefined;
    public get origSize(): Number | undefined {
        return this._origSize;
    }

    constructor(treeRef: JToken, matchedElement: MatchedElement) {
        this._treeRef = treeRef;
        this._matchedElement = matchedElement;
        if (matchedElement instanceof ArrayMatchedElement) {
            this._origSize = (matchedElement as ArrayMatchedElement).getOrigSize();
        }
    }
}
