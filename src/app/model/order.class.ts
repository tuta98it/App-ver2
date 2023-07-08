export class Order {
  id = 0;
  patient: any = null;
  patientId = 0;
  isConsult = false;
  reasonNotContacted = 0;
  counselors = '';
  consultationTime = '';
  consultationTimeStr = '';
  getResultType = 0;
  getResultPhone = '';
  getResultAddress = '';
  getResultReceiver = '';
  orderDetails: any = [];
  dateCreated: Date = null;
  timePrint: Date = null;
  timePrintStr = '';
  userValid = '';
  code = '';
  address = '';
  isFullResult = false;
  isSendEmail = false;
  isValid = false;
  isSendSms = false;
  timeSendEmail: Date = null;
  timeSendEmailStr = '';
  timeSendSms: Date = null;
  timeSendSmsStr = '';
  chanDoan = '';
  orderDoctor = '';
  timeValid: Date = null;
  timeValidStr = '';
  assignToUser: any = null;
  note = '';
  privateNote = '';
  partner: any;
  orderDate = new Date();
  visitCode = '';
  visiteDate = new Date();
  khoa = '';
  buong = '';
  giuong = '';
  status = '';
  momWeight = '';
  momHeightCm = '';
  gestationalWeek = null;
  gestationalDay = null;
  pregnancyNo = null;
  fetusAmount = null;
  nt = null;
  crl = null;
  ultrasoundDate = new Date();
  expectedDateOfBirth = new Date();
  isPrintResult = null;
}

export class Patient {
  id = 0;
  name = '';
  phoneNo = '';
  dob: Date = null;
  sex = 0;
  email = '';
  yob = '';
  address = '';
}


export class Partner {
  sendEmail = false;
  sendEmailPatient = false;
  sendSms = false;
  sendSmspatient = false;
  needConsult = false;
  nameForPrint = '';
  name = '';
  code = '';
}
