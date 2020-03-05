interface I {
  t?: (I | null);
  a: number;
}

const i: I = {
  t: { a: 2 },
  a: 1
};

i.t.a
