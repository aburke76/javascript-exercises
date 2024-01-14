const leapYears = function (year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    // % === 0 if no remainder
};

//if year = 1900...1900%4 = 0, so the first side of && is TRUE.
//1900%100=0...0 !==0 is FALSE
///////////// OR /////////////
//1900%400=300...300 === 0 is FALSE

//So if the first side of && is TRUE and the second side 
//is FALSE, the return value is FALSE



// Do not edit below this line
module.exports = leapYears;
