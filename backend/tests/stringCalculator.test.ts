import { describe, it, expect } from "vitest";
import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
    it("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    it("should return the number itself for a single number", () => {
        expect(add("1")).toBe(1);
    });

    it("should return the sum of two comma-separated numbers", () => {
        expect(add("1,5")).toBe(6);
    });

    it("should handle any number of comma-separated numbers", () => {
        expect(add("1,2,3,4")).toBe(10);
    });

    it("should handle newlines as delimiters", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    it("should support custom delimiters", () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    it("should throw an exception for negative numbers", () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });

    it("should include all negative numbers in the exception message", () => {
        expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed: -1,-2");
    });
});
