import { Ops } from "./Ops";
import { WildCards } from "./WildCards";
import { SpecError } from "../errors/Errors";

export class OpsUtils {

    public static Parse(key: String): Ops {
        if (key.indexOf(WildCards.STAR) >= 0) {
            if (WildCards.STAR !== key) {
                throw new SpecError(`Defaultr key ${key} is invalid.  * keys can only contain *, and no other characters.`);
            }

            return Ops.STAR;
        }

        if (key.indexOf(WildCards.OR) >= 0) {
            return Ops.OR;
        }
        return Ops.LITERAL;
    }

}