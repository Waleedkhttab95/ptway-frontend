export default function education_level(key) {
  let level = [];
  if (key == 'HS') {
    level.push(
      { value: 'High-school-first-year', viewValue: 'اول ثانوي' },
      { value: 'High-school-second-year', viewValue: 'ثاني ثانوي' },
      { value: 'High-school-third-year', viewValue: 'ثالث ثانوي' },
      { value: 'High-school-fourth-year', viewValue: 'رابع ثانوي' }
    );
    return level;
  } else if (key == 'BHO') {
    level.push(
      { value: 'University-first-year', viewValue: 'فصل أول' },
      { value: 'University-second-year', viewValue: 'فصل ثاني' },
      { value: 'University-third-year', viewValue: 'فصل ثالث' },
      { value: 'University-forth-year', viewValue: 'فصل رابع' },
      { value: 'University-fith-year', viewValue: 'فصل خامس' },
      { value: 'University-sixth-year', viewValue: 'فصل سادس' },
      { value: 'University-seventh-year', viewValue: 'فصل سابع' },
      { value: 'University-eigth-year', viewValue: 'فصل ثامن' },
      { value: 'University-ninth-year', viewValue: 'فصل تاسع' },
      { value: 'University-ten-year', viewValue: 'فصل عاشر' }
    );
    return level;
  } else if (key == 'MASTER') {
    level.push(
      { value: 'master-first-year', viewValue: 'اول ماستر' },
      { value: 'master-second-year', viewValue: 'ثاني ماستر' },
      { value: 'master-third-year', viewValue: 'ثالث ماستر' }
    );
    return level;
  } else if (key == 'diploma') {
    level.push(
      { value: 'diploma-first-year', viewValue: 'فصل اول' },
      { value: 'diploma-second-year', viewValue: 'فصل ثاني' },
      { value: 'diploma-third-year', viewValue: 'فصل ثالث' },
      { value: 'diploma-fourth-year', viewValue: 'فصل رابع' }
    );
    return level;
  } else if (key == 'Undergraduate') {
    level.push({ value: 'Undergraduate', viewValue: 'خريج' });
    return level;
  }
}
