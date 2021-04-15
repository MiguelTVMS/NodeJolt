export class Char {
    private _value: number = -1;

    constructor(char: number | string) {
        this.setValue(char);
    }

    getValue(): string {
        return String.fromCharCode(this._value);
    }

    setValue(char: number | string) {
        if (typeof char === "number") {
            this._value = char;
        } else {
            this._value = (char as string).charCodeAt(0);
        }
    }
}
