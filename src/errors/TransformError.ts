import { JoltError } from "./JoltError";


export class TransformError extends JoltError {
    constructor(message: string | undefined) {
        super(message);
        Object.setPrototypeOf(this, JoltError.prototype);
    }
}