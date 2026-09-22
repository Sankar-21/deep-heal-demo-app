const test = require("node:test");
const assert = require("node:assert/strict");
const { add, health } = require("../src/app");

test("adds two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("reports healthy service", () => {
  assert.equal(health().status, "healthy");
});
