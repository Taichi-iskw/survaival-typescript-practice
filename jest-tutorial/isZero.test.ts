import { isZero } from "./isZero";

test("isZero", () => {
  expect(isZero(0)).toBe(true);
});

test("isNotZero", () => {
  expect(isZero(1)).toBe(false);
});