function fibonacci(n) {
  // Base cases
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  
  // Recursive case
  const fibs = fibonacci(n - 1);
  const length = fibs.length;
  fibs.push(fibs[length - 1] + fibs[length - 2]);
  return fibs;
}

export default fibonacci;
