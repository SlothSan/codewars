/*
This is the Part II of Multiplying numbers as strings.
TODO

Multiply two numbers! Simple!
Rules

    The arguments are passed as strings.
    The numbers will be very large
    The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
    Answer should be returned as string
    The returned answer should not have leading or trailing zeroes (when applicable) e.g. "0123" and "1.100" are wrong, they should be "123" and "1.1"
    Zero should not be signed and "-0.0" should be simply returned as "0". 
*/

const multiply = (str1, str2) => {
  const cleanNumber = (num) => {
    num = num.replace(/^(-?)0+(?=\d|.)/, "$1");
    if (num.includes(".")) {
      num = num.replace(/\.?0+$/, "");
    }
    return num || "0";
  };

  const removeSign = (num) => (num[0] === "-" ? num.slice(1) : num);

  const getSign = (a, b) => (a[0] === "-" ? -1 : 1) * (b[0] === "-" ? -1 : 1);

  const multiplyIntegers = (num1, num2) => {
    let result = Array(num1.length + num2.length).fill(0);
    for (let i = num1.length - 1; i >= 0; i--) {
      for (let j = num2.length - 1; j >= 0; j--) {
        let product = (num1[i] - "0") * (num2[j] - "0") + result[i + j + 1];
        result[i + j + 1] = product % 10;
        result[i + j] += Math.floor(product / 10);
      }
    }
    return result.join("").replace(/^0+(?!$)/, "") || "0";
  };

  const processDecimal = (num) => {
    if (!num.includes(".")) return [num, 0];
    let [intPart, decPart] = num.split(".");
    return [intPart + decPart, decPart.length];
  };

  const sign = getSign(str1, str2);
  str1 = removeSign(str1);
  str2 = removeSign(str2);

  let [num1, dec1] = processDecimal(cleanNumber(str1));
  let [num2, dec2] = processDecimal(cleanNumber(str2));

  let result = multiplyIntegers(num1, num2);
  let totalDecimals = dec1 + dec2;

  if (totalDecimals > 0) {
    if (result.length <= totalDecimals) {
      result = "0".repeat(totalDecimals - result.length + 1) + result;
    }
    result =
      result.slice(0, -totalDecimals) + "." + result.slice(-totalDecimals);
    result = cleanNumber(result);
  }

  if (result.startsWith(".")) {
    result = "0" + result;
  }

  if (sign === -1 && result !== "0") {
    result = "-" + result;
  }

  return result;
};

console.log(multiply("2", "-3.000001"));
//-6.000002
