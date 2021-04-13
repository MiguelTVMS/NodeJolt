import { PathElement } from "./PathElement";

export abstract class BasePathElement implements PathElement {
    readonly rawKey: string;

    constructor(key: string) {
        this.rawKey = key;
    }

    toString(): string {
        return this.getCanonicalForm();
    }

    public abstract getCanonicalForm(): string;
}
