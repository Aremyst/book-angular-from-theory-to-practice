import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value: string, swearWords: string): string {
    let swearWordsArray: Array<string> = swearWords.split(',');

    for (let swearWord of swearWordsArray) {
      value = value.replace(new RegExp(swearWord, 'g'), '$%#@!')
    }
    return value;
  }

}
