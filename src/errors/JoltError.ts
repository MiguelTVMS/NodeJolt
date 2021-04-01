


export class JoltError extends Error {
    constructor(message: string | undefined) {
        super(message);
        Object.setPrototypeOf(this, JoltError.prototype);
    }
}
