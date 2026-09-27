import { describe, expect, it } from "vitest";
import { portalSectionKeys } from "./Home";

describe("student portal navigation", () => {
  it("keeps every requested student section available", () => {
    expect(portalSectionKeys).toEqual([
      "overview",
      "homework",
      "classwork",
      "performance",
      "holidays",
      "notices",
    ]);
  });
});
