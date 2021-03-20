import { atom, atomFamily, selectorFamily } from "recoil";

type Track = 1 | 2 | 3 | 4 | 5 | 6 | 8;

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
};

type ScoreValueParams = {
  color: string;
  lenght: number;
};

export const singleScoreValue = atomFamily<number, ScoreValueParams>({
  key: "singleScoreValue",
  default: 0,
});

export const totalScoreValue = selectorFamily<number, string>({
  key: "totalScoreValue",
  get: (color) => ({ get }) => {
    const values = get(settings.segments);
    return values.reduce((sum, cur) => {
      return (
        sum + reference[cur] * get(singleScoreValue({ color, lenght: cur }))
      );
    }, 0);
  },
});
