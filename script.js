const makeChange = (c) => {
  let cents = Math.floor(Number(c));

  const q = Math.floor(cents / 25);
  cents = cents % 25;

  const d = Math.floor(cents / 10);
  cents = cents % 10;

  const n = Math.floor(cents / 5);
  cents = cents % 5;

  const p = cents;

  return { q, d, n, p };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
