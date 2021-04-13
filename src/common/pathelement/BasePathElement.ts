import { IPathElement } from "./IPathElement";

export abstract class BasePathElement implements IPathElement {
    readonly rawKey: string;

    constructor(key: string) {
        this.rawKey = key;
    }

    toString(): string {
        return this.getCanonicalForm();
    }

    public abstract getCanonicalForm(): string;
}
