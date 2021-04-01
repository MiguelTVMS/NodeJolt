import { Key } from "./Key";
import { Ops } from "./Ops";

export class ArrayKey extends Key {

    private _keyInts: Array<Number>;
    private _keyInt: Number = -1;

    constructor(rawJsonKey: string, spec: Object) {
        super(rawJsonKey, spec);

        this._keyInts = new Array<Number>();

        switch (this.Op) {
            case Ops.OR:
                this._keyStrings.forEach(orLiteral => {
                    var orInt = new Number(orLiteral);
                    this._keyInts.push(orInt);
                });
                break;
            case Ops.LITERAL:
                this._keyInt = new Number(this._rawKey);
                this._keyInts.push(this._keyInt);
                break;
            case Ops.STAR:
                break;
            default:
                throw new RangeError("Someone has added an op type without changing this method.");
        }
    }

    GetLiteralIntKey = () => this._keyInt;

}