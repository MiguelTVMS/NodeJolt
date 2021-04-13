import { MatchedElement } from "./MatchedElement";

export class ArrayMatchedElement extends MatchedElement {
    private readonly _origSize: number;

    constructor(key: string, origSize: number) {
        super(key);
        this._origSize = origSize;
    }

    getOrigSize = () => this._origSize;

    getRawIndex = () => Number.parseInt(this.rawKey);
}
