import { Char } from "./Char";

export class SpecStringParser {
    public static parseDotNotation(pathStrings: Array<string>, iter: IterableIterator<Char>, dotNotationRef: string): Set<string> {
        if (!iter.next().done) {
            return pathStrings;
        }
    }
}
