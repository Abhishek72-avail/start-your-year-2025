function plus(x, y) {
  if ((typeof x === "number") && (typeof y === "number")) {
    return x + y;
  }
}

console.log(plus(2025, 1));
console.log(plus(undefined, 21));
console.log(plus("StackUp", "Learn"));
