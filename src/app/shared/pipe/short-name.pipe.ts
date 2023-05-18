// Angular
import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl,
} from '@angular/platform-browser';

/**
 * Sanitize HTML
 */
@Pipe({
  name: 'short',
})
export class SortNamePipe implements PipeTransform {
  /**
   * Pipe Constructor
   *
   * @param _sanitizer: DomSanitezer
   */
  // tslint:disable-next-line
  constructor(protected _sanitizer: DomSanitizer) {}

  /**
   * Transform
   *
   * @param value: string
   * @param type: string
   */
  transform(value: string) {
    const arrName = value.split(' ');
    const length = arrName.length;
    if (arrName.length >= 2){
      return arrName[length - 2].charAt(0) + arrName[length - 1].charAt(0).toUpperCase();
    } else {
      arrName[length - 1].charAt(0).toUpperCase();
    }
    return 'NA';
  }
}
