export interface IPathElement {
    readonly rawKey: String;

    getCanonicalForm(): String;
}
