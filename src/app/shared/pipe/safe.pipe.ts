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
  name: 'safe',
})
export class SafePipe implements PipeTransform {
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
  transform(
    value: string,
    type: string
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        // eslint-disable-next-line no-underscore-dangle
        return this._sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        // eslint-disable-next-line no-underscore-dangle
        return this._sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        // eslint-disable-next-line no-underscore-dangle
        return this._sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        // eslint-disable-next-line no-underscore-dangle
        return this._sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        // eslint-disable-next-line no-underscore-dangle
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        // eslint-disable-next-line no-underscore-dangle
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}
