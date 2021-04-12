export interface PathElement {
    readonly rawKey: String;

    getCanonicalForm(): String;
}
