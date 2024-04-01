const quadraticFormula = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return "Complex roots are not supported.";
  }

  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [root1, root2];
};

console.log()
