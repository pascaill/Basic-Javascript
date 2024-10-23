function factorial(n) {
  // Base case
  if (n === 0) return 1;
  // Recursive case
  return n * factorial(n - 1);
}

export default factorial;
