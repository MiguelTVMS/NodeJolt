
import { Ops } from "./Ops";
import { OpsUtils } from "./OpsUtils";
import { WildCards } from "./WildCards";

export abstract class Key {

    static readonly OR_INPUT_REGEX = new RegExp(`\\${WildCards.OR}`);

    protected _rawKey: String;
    private _isArrayOutput = false;
    private _op: Ops;
    protected _keyStrings: Array<String>;
    private _orCount: Number = 0;
    private _literalValue: any | undefined;
    private _children: Set<Key> | undefined;
    private _outputArraySize: Number = -1;

    public get Op(): Ops {
        return this._op;
    }

    public get IsArrayOutput(): boolean {
        return this._isArrayOutput;
    }

    constructor(rawJsonKey: string, spec: Object) {

        this._rawKey = rawJsonKey;
        if (rawJsonKey.endsWith(WildCards.ARRAY)) {
            this._isArrayOutput = true;
            this._rawKey = this._rawKey.replace(WildCards.ARRAY, "");
        }

        this._op = OpsUtils.Parse(this._rawKey);

        switch (this._op) {
            case Ops.OR:
                this._keyStrings = this._rawKey.split(Key.OR_INPUT_REGEX);
                this._orCount = this._keyStrings.length;
                break;
            case Ops.LITERAL:
                this._keyStrings = [this._rawKey];
                break;
            case Ops.STAR:
                this._keyStrings = new Array<string>();
                break;
            default:
                throw new RangeError("Someone has added an op type without changing this method.");
        }

        // Spec is string -> Map   or   string -> Literal only
        if (spec.isPrototypeOf == Object) {
            this._children = Key.ProcessSpec(spec, this.IsArrayOutput);

            if (this.IsArrayOutput) {
                // loop over children and find the max literal value
                this._children.forEach(childKey => {
                    var childValue = childKey.GetLiteralIntKey();
                    if (childValue > this._outputArraySize) {
                        this._outputArraySize = childValue;
                    }
                });
            }
        }
        else {
            // literal such as string, number, or JSON array
            this._literalValue = spec;
        }

    }

    protected abstract GetLiteralIntKey(): Number;

    public static ProcessSpec(spec: Object, parentIsArray = false): Set<Key> {

        var results = new Set<Key>();

        if (parentIsArray)
            Object.getOwnPropertyNames(spec).forEach(element => {

            });
        else
            Object.getOwnPropertyNames(spec).forEach(element => {

            });

        return results;

    }

}
