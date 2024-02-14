const generateRoutine = (days, hours, goal) => {
  const routine = {};
  switch (goal) {
    case "lose weight":
      if (days === 1) {
        if (hours === 1) {
          routine["1"] = ["0685", "0798", "2612", "1160"];
        } else {
          routine["1"] = ["0662", "1476", "0685", "0798", "2612", "1160"];
        }
      } else if (days === 2) {
        if (hours === 1) {
          routine["1"] = ["0685", "0798", "2612", "1160"];
          routine["2"] = ["1160", "2612", "2311", "3666"];
        } else {
          routine["1"] = ["0662", "1476", "0685", "0798", "2612", "1160"];
          routine["2"] = ["0129", "0555", "1160", "2612", "2311", "3666"];
        }
      } else if (days === 3) {
        routine["1"] = ["0685", "0798", "2612", "1160"];
        routine["2"] = ["0662", "0129", "1476", "0555"];
        routine["3"] = ["1160", "2612", "2311", "3666"];
      } else {
        routine["1"] = ["0685", "0798", "2612", "1160"];
        routine["2"] = ["0662", "0129", "1476", "0555"];
        routine["3"] = ["1160", "2612", "2311", "3666"];
        routine["4"] = ["0662", "0129", "1476", "0555"];
      }
      break;
    case "gain muscle":
      if (days === 1) {
        routine["1"] = ["0025", "0027", "0043", "0032"];
      } else if (days === 2) {
        routine["1"] = ["0025", "0027", "0043", "0032"];
        routine["2"] = ["0025", "0027", "0043", "0032"];
      } else if (days === 3) {
        routine["1"] = ["0025", "0027", "0043", "0032"];
        routine["2"] = ["0294", "0231", "0405", "0585", "0599", "0605"];
        routine["3"] = ["0025", "0027", "0043", "0032"];
      } else if (days === 4) {
        routine["1"] = ["0025", "0027", "0294", "0231", "0405"];
        routine["2"] = ["0043", "0032", "0585", "0599", "0605"];
        routine["3"] = ["0025", "0027", "0294", "0231", "0405"];
        routine["4"] = ["0043", "0032", "0585", "0599", "0605"];
      } else {
        routine["1"] = ["0025", "0047", "0231", "0405"];
        routine["2"] = ["0027", "0150", "0294", "0602"];
        routine["3"] = ["0410", "1459", "0585", "0599", "0605"];
        routine["4"] = ["0025", "0027", "0294", "0231", "0405"];
        routine["5"] = ["0043", "0032", "0585", "0599", "0605"];
      }
      break;
    default:
      if (days === 1) {
        routine["1"] = ["0025", "0027", "0043", "0032", "0798"];
      } else if (days === 2) {
        routine["1"] = ["0025", "0027", "0043", "0032", "0798"];
        routine["2"] = ["0025", "0027", "0043", "0032", "3666"];
      } else if (days === 3) {
        routine["1"] = ["0025", "0027", "0043", "0032", "0798"];
        routine["2"] = ["0294", "0231", "0405", "0585", "0599", "0605", "3666"];
        routine["3"] = ["0025", "0027", "0043", "0032", "0798"];
      } else if (days === 4) {
        routine["1"] = ["0025", "0027", "0294", "0231", "0405", "0798"];
        routine["2"] = ["0043", "0032", "0585", "0599", "0605", "3666"];
        routine["3"] = ["0025", "0027", "0294", "0231", "0405", "0798"];
        routine["4"] = ["0043", "0032", "0585", "0599", "0605", "3666"];
      } else {
        routine["1"] = ["0025", "0047", "0231", "0405", "0798"];
        routine["2"] = ["0027", "0150", "0294", "0602", "0798"];
        routine["3"] = ["0410", "1459", "0585", "0599", "0605", "3666"];
        routine["4"] = ["0025", "0027", "0294", "0231", "0405", "0798"];
        routine["5"] = ["0043", "0032", "0585", "0599", "0605", "3666"];
      }
      break;
  }

  return routine;
};

export { generateRoutine };
