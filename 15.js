// تعریف متغیرها
let totalParticipants = 0;
let maleWithCode24 = 0;
let under18Participants = 0;
let code24Percentage = 0;

// تعریف تابع برای دریافت ورودی از کاربر
function getInput(message) {
  return prompt(message);
}

// تعریف تابع برای محاسبه درصد
function calculatePercentage(part, total) {
  return (part / total) * 100;
}

// خواندن اطلاعات شرکت‌کنندگان
while (true) {
  let name = getInput("نام شرکت‌کننده را وارد کنید (برای پایان، خالی بگذارید):");

  if (name === "") {
    break;
  }

  let participantId = getInput("شماره شرکت‌کننده را وارد کنید:");
  let diplomaType = parseInt(getInput("نوع دیپلم را وارد کنید (0: تجربی، 1: انسانی، 2: فنی و کار و دانش):"));
  let age = parseInt(getInput("سن شرکت‌کننده را وارد کنید:"));
  let majorCode = parseInt(getInput("کد رشته را وارد کنید:"));
  let genderCode = parseInt(getInput("کد جنسیت را وارد کنید:"));

  totalParticipants++;

  if (majorCode === 24) {
    code24Percentage++;
  }

  if (age < 18) {
    under18Participants++;
  }

  if (genderCode === 0 && majorCode === 24) {
    maleWithCode24++;
  }
}

// محاسبه درصد
code24Percentage = calculatePercentage(code24Percentage, totalParticipants);

// نمایش نتایج
console.log(`تعداد کل شرکت‌کنندگان: ${totalParticipants}`);
console.log(`تعداد پسران دارای کد رشته 24: ${maleWithCode24}`);
console.log(`تعداد شرکت‌کنندگان زیر 18 سال: ${under18Participants}`);
console.log(`درصد شرکت‌کنندگان دارای کد رشته 24: ${code24Percentage}%`);
