import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sorting",
})
export class SortingPipe implements PipeTransform {
    transform(value: any, searchValue: string): any {
        if (!searchValue) {
            return value;
        }
        console.log(searchValue);
        return value.data?.filter(
            (v) =>
                v.schoolClass
                    .toLowerCase()
                    .replace(/\s/g, "")
                    .indexOf(searchValue.toLowerCase().replace(/\s/g, "")) > -1
        );
    }
}
