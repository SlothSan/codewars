const last = (...args) => {
  if (
    args.length === 1 &&
    (Array.isArray(args[0]) || typeof args[0] === "string")
  ) {
    const input = args[0];
    return input[input.length - 1];
  }
  return args[args.length - 1];
};

console.log(last(1, "b", 3, "d", 5)); //5
