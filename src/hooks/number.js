export const formatPhone = (num) => {
  if (!num) {
    return "";
  } else {
    var phoneNumber = num.replace(/[^\d]/g, "");
    if (phoneNumber.length < 4) {
      return phoneNumber;
    } else if (phoneNumber.length >= 4 && phoneNumber.length < 7) {
      var area_code = phoneNumber.slice(0, 3);
      var prefix = phoneNumber.slice(3, phoneNumber.length);
      return `(${area_code}) - ${prefix}`;
    } else if (phoneNumber.length >= 7) {
      var area_code = phoneNumber.slice(0, 3);
      var prefix = phoneNumber.slice(3, 6);
      var suffix = "";
      if (phoneNumber.length <= 10)
        suffix = phoneNumber.slice(6, phoneNumber.length);
      else suffix = phoneNumber.slice(6, 10);
      return `(${area_code})-${prefix}-${suffix}`;
    }
  }
};
