import { atom, atomFamily, selector, selectorFamily } from "recoil";

export type Track = 1 | 2 | 3 | 4 | 5 | 6 | 8;
export type Color = "black" | "blue" | "green" | "red" | "yellow";
const reference: Record<Track, number> = {
  1: 1,
  2: 2,
  3: 4,
  4: 7,
  5: 10,
  6: 15,
  8: 21,
};

export const settings = {
  segments: atom<Track[]>({
    key: "settings.segments",
    default: [1, 2, 3, 4, 6, 8],
  }),
  colors: atom<Color[]>({
    key: "settings.colors",
    default: ["black", "blue", "green", "red", "yellow"],
  }),
};

type ScoreValueParams = {
  color: string;
  lenght: number;
};

export const singleScoreValue = atomFamily<number, ScoreValueParams>({
  key: "singleScoreValue",
  default: 0,
});

export const totalSingleScoreValue = selectorFamily<number, string>({
  key: "totalSingleScoreValue",
  get: (color) => ({ get }) => {
    const values = get(settings.segments);
    return values.reduce((sum, cur) => {
      return (
        sum + reference[cur] * get(singleScoreValue({ color, lenght: cur }))
      );
    }, 0);
  },
});

export const totalScoreValue = selector<Record<Color, number>>({
  key: "totalScoreValue",
  get: ({ get }) => {
    const values = get(settings.colors);
    return values.reduce((res, cur) => {
      return {
        ...res,
        [cur]: get(totalSingleScoreValue(cur)),
      };
    }, {} as Record<Color, number>);
  },
});
