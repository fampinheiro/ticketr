import * as z from "zod";

export const Color = z.enum(["black", "blue", "green", "red", "yellow"]);
export const Segment = z.enum(["1", "2", "3", "4", "5", "6", "8"]);

export const score: Record<z.infer<typeof Segment>, number> = {
  "1": 1,
  "2": 2,
  "3": 4,
  "4": 7,
  "5": 10,
  "6": 15,
  "8": 21,
};
