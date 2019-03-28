import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "uppercase"
})
export class UppercasePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let arr: string[] = [];
    const string: string[] = value.split("");
    string.forEach((element, index) => {
      if (index === 0) {
        element = element.toUpperCase();
        arr.push(element);
      } else {
        arr.push(element);
      }
    });
    value = arr.join("");
    return value;
  }
}
