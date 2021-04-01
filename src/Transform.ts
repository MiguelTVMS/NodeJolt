import { JoltTransform } from "./JoltTransform";

export interface Transform extends JoltTransform {
    transform: (input: Object) => Object;
}

