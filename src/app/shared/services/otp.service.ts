import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor() { }

  generateOTP(length: number): string {
    const digits = '0123456789';
    let otp = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      otp += digits[randomIndex];
    }

    return otp;
  }
}
