import { JoltError } from "./JoltError";

export class SpecError extends JoltError {
    constructor(message: string | undefined) {
        super(message);
        Object.setPrototypeOf(this, JoltError.prototype);
    }
}