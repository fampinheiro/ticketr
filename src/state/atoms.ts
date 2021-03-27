import * as z from "zod";
import { Color, Segment, score } from "../constants";
import { atomFamily, selector, selectorFamily } from "recoil";

type ScoreValueParams = {
  color: string;
  lenght: string;
};

const colors = atomFamily<boolean, z.infer<typeof Color>>({
  key: "settings.color",
  default: true,
});

const segments = atomFamily<boolean, z.infer<typeof Segment>>({
  key: "settings.segments",
  default: true,
});

export const settings = {
  colors,
  segments,
  activeColors: selector({
    key: "settings.activeColors",
    get: ({ get }) => Color.options.filter((c) => get(colors(c))),
  }),
  activeSegments: selector({
    key: "settings.activeSegments",
    get: ({ get }) => Segment.options.filter((c) => get(segments(c))),
  }),
};

export const singleScoreValue = atomFamily<number, ScoreValueParams>({
  key: "singleScoreValue",
  default: 0,
});

export const totalSingleScoreValue = selectorFamily<number, string>({
  key: "totalSingleScoreValue",
  get: (color) => ({ get }) => {
    return get(settings.activeSegments).reduce((sum, cur) => {
      const value = score[cur];
      if (!get(settings.segments(cur))) {
        return sum;
      }
      return sum + value * get(singleScoreValue({ color, lenght: cur }));
    }, 0);
  },
});

export const totalScoreValue = selector({
  key: "totalScoreValue",
  get: ({ get }) => {
    return get(settings.activeColors).reduce((res, color) => {
      if (!get(settings.colors(color))) {
        return res;
      }

      const value = get(totalSingleScoreValue(color));

      return {
        ...res,
        [color]: value,
      };
    }, {} as Record<z.infer<typeof Color>, number>);
  },
});
