export const idx = (p, o, r) =>
  p.reduce((xs, x) => (xs && xs[x] ? xs[x] : r), o)
