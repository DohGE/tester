import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class IsAllObjectFalse {
    isAllObjectFalse(object): boolean {
        let i = 0;
        Object.values(object).forEach((v) => {
            if (!v) {
                i++;
            }
        });
        if (i === Object.getOwnPropertyNames(object).length) {
            return true;
        } else {
            return false;
        }
    }
}
