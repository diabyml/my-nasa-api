function isValid(date) {
  if (date.toString() === "Invalid Date") {
    return false;
  } else {
    return true;
  }
}

module.exports = { isValid };
