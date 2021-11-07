function leapYear(year, seireki) {
  if (seireki % 4 === 0 && seireki % 100 !== 0) {
    return `${year}年はうるう年`;
  } else if (seireki % 400 === 0) {
    return `${year}年はうるう年`;
  } else {
    return `${year}年はうるう年ではない`;
  }
}

console.log(leapYear("2020", 2020));
console.log(leapYear("2021", 2021));
