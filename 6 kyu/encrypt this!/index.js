const encryptThis = (text) => {
  return text
    .split(" ")
    .map((word) => {
      const length = word.length;
      return length >= 3
        ? word.charCodeAt() +
            word.charAt(length - 1) +
            word.slice(2, length - 1) +
            word.charAt(1)
        : word.charCodeAt() + word.charAt(1);
    })
    .join(" ");
};
