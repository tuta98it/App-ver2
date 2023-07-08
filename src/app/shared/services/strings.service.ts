import { Injectable } from '@angular/core';
import { SHA256 } from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class StringsService {

  constructor() { }

  compareTwoStrings(s1: string, s2: string): boolean {
    const hash1 = SHA256(s1).toString();
    const hash2 = SHA256(s2).toString();

    return hash1 === hash2;
  }
}
