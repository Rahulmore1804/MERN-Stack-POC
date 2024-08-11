export const checkFirstname = (text, func) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(text)) {
      func("Name must not contain Whitespaces.");
      return false;
    }
    const isContainSpecialchar = /^(?=.*[@#$%^&-+=()]).*$/;
    if (isContainSpecialchar.test(text)) {
      func("Name must not have at any Special Character.");
      return false;
    }
    const isValidLength = /^.{2,10}$/;
    if (!isValidLength.test(text)) {
      func("Name must be 2-10 Characters Long.");
      return false;
    }
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (isContainsNumber.test(text)) {
      func("Name must not contain Digit.");
      return false;
    }
    return true;
  };
  export const checkPasswordValidity = (pass, func) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(pass)) {
      console.log('Password must not contain Whitespaces.');
      func('Password must not contain Whitespaces.');
      return false;
    }
    // ^ represents starting character of the string.
    // (?=.*[0-9]) represents a digit must occur at least once.
    // (?=.*[a-z]) represents a lower case alphabet must occur at least once.
    // (?=.*[A-Z]) represents an upper case alphabet that must occur at least once.
    // (?=.*[@#$%^&-+=()] represents a special character that must occur at least once.
    // (?=\\S+$) white spaces don’t allowed in the entire string.
    // .{8, 20} represents at least 8 characters and at most 20 characters.
    // $ represents the end of the string.
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(pass)) {
      console.log('Password must have at least one Uppercase Character.');
      func('Password must have at least one Uppercase Character.');
      return false;
    }
  
    const isContainSpecialchar = /^(?=.*[@#$%^&-+=()]).*$/;
    if (!isContainSpecialchar.test(pass)) {
      console.log('Password must have at least one Special Character.');
      func('Password must have at least one Special Character.');
      return false;
    }
  
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(pass)) {
      console.log('Password must have at least one Lowercase Character.');
      func('Password must have at least one Lowercase Character.');
      return false;
    }
  
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(pass)) {
      console.log('Password must contain at least one Digit.');
      func('Password must contain at least one Digit.');
      return false;
    }
  
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(pass)) {
      console.log('Password must be 8-16 Characters Long.');
      func('Password must be 8-16 Characters Long.');
      return false;
    }
    return true;
  };
  
  export const handleCheckEmail = (text, func) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  
    if (re.test(text) || regex.test(text)) {
      return true;
    } else {
      console.log('true');
      func("email should be in  'abc.@xyz.com format");
      return false;
    }
  };
  