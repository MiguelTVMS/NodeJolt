import { BasePathElement } from "../pathelement/BasePathElement";
import { EvaluatablePathElement } from "../pathelement/EvaluatablePathElement";
import { WalkedPath } from "./WalkedPath";

export class MatchedElement extends BasePathElement implements EvaluatablePathElement {
    private readonly _subKeys: Array<string>;
    private _hashCount = 0;

    constructor(key: string);
    constructor(key: string, subKeys?: Array<string>) {
        super(key);

        this._subKeys = new Array<string>(key);
        if (subKeys !== undefined) subKeys.forEach((e) => this._subKeys.push(e));
    }

    evaluate = (walkedPath: WalkedPath) => this.rawKey;

    getCanonicalForm = () => this.rawKey;

    getSubKeyRef(index: number): string {
        if (index < 0 || index >= this._subKeys.length) throw new RangeError(`MatchedElement cannot be indexed with index ${index}`);
        return this._subKeys[index];
    }

    getSubKeyCount = () => this._subKeys.length;

    getHashCount = () => this._hashCount;

    incrementHashCount(): void {
        this._hashCount++;
    }
}
