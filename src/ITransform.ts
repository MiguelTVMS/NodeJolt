import { JoltTransform } from "./JoltTransform";

export interface ITransform extends JoltTransform {
    transform: (input: Object) => Object;
}
