import * as z from "zod";
import { Resetter, useResetRecoilState } from "recoil";
import { singleScoreValue } from "../../state/atoms";
import { Button } from "../../components";
import * as constants from "../../constants";

type ColorType = z.infer<typeof constants.Color>;
type SegmentType = z.infer<typeof constants.Segment>;

const Reset = () => {
  const state: Record<`${ColorType}-${SegmentType}`, Resetter> = {
    "black-1": useResetRecoilState(
      singleScoreValue({ color: "black", lenght: "1" })
    ),
    "black-2": useResetRecoilState(
      singleScoreValue({ color: "black", lenght: "2" })
    ),
    "black-3": useResetRecoilState(
      singleScoreValue({ color: "black", lenght: "3" })
    ),
    "black-4": useResetRecoilState(
      singleScoreValue({ color: "black", lenght: "4" })
    ),
    "black-5": useResetRecoilState(
      singleScoreValue({ color: "black", lenght: "5" })
    ),
    "black-6": useResetRecoilState(
      singleScoreValue({ color: "black", lenght: "6" })
    ),
    "black-8": useResetRecoilState(
      singleScoreValue({ color: "black", lenght: "8" })
    ),
    "blue-1": useResetRecoilState(
      singleScoreValue({ color: "blue", lenght: "1" })
    ),
    "blue-2": useResetRecoilState(
      singleScoreValue({ color: "blue", lenght: "2" })
    ),
    "blue-3": useResetRecoilState(
      singleScoreValue({ color: "blue", lenght: "3" })
    ),
    "blue-4": useResetRecoilState(
      singleScoreValue({ color: "blue", lenght: "4" })
    ),
    "blue-5": useResetRecoilState(
      singleScoreValue({ color: "blue", lenght: "5" })
    ),
    "blue-6": useResetRecoilState(
      singleScoreValue({ color: "blue", lenght: "6" })
    ),
    "blue-8": useResetRecoilState(
      singleScoreValue({ color: "blue", lenght: "8" })
    ),
    "green-1": useResetRecoilState(
      singleScoreValue({ color: "green", lenght: "1" })
    ),
    "green-2": useResetRecoilState(
      singleScoreValue({ color: "green", lenght: "2" })
    ),
    "green-3": useResetRecoilState(
      singleScoreValue({ color: "green", lenght: "3" })
    ),
    "green-4": useResetRecoilState(
      singleScoreValue({ color: "green", lenght: "4" })
    ),
    "green-5": useResetRecoilState(
      singleScoreValue({ color: "green", lenght: "5" })
    ),
    "green-6": useResetRecoilState(
      singleScoreValue({ color: "green", lenght: "6" })
    ),
    "green-8": useResetRecoilState(
      singleScoreValue({ color: "green", lenght: "8" })
    ),
    "red-1": useResetRecoilState(
      singleScoreValue({ color: "red", lenght: "1" })
    ),
    "red-2": useResetRecoilState(
      singleScoreValue({ color: "red", lenght: "2" })
    ),
    "red-3": useResetRecoilState(
      singleScoreValue({ color: "red", lenght: "3" })
    ),
    "red-4": useResetRecoilState(
      singleScoreValue({ color: "red", lenght: "4" })
    ),
    "red-5": useResetRecoilState(
      singleScoreValue({ color: "red", lenght: "5" })
    ),
    "red-6": useResetRecoilState(
      singleScoreValue({ color: "red", lenght: "6" })
    ),
    "red-8": useResetRecoilState(
      singleScoreValue({ color: "red", lenght: "8" })
    ),
    "yellow-1": useResetRecoilState(
      singleScoreValue({ color: "yellow", lenght: "1" })
    ),
    "yellow-2": useResetRecoilState(
      singleScoreValue({ color: "yellow", lenght: "2" })
    ),
    "yellow-3": useResetRecoilState(
      singleScoreValue({ color: "yellow", lenght: "3" })
    ),
    "yellow-4": useResetRecoilState(
      singleScoreValue({ color: "yellow", lenght: "4" })
    ),
    "yellow-5": useResetRecoilState(
      singleScoreValue({ color: "yellow", lenght: "5" })
    ),
    "yellow-6": useResetRecoilState(
      singleScoreValue({ color: "yellow", lenght: "6" })
    ),
    "yellow-8": useResetRecoilState(
      singleScoreValue({ color: "yellow", lenght: "8" })
    ),
  };

  const handleClick = () => {
    Object.values(state).forEach((resetState) => {
      return resetState();
    });
  };

  return (
    <button
      className="flex flex-row justify-center w-full"
      onClick={handleClick}
    >
      <Button>Reset</Button>
    </button>
  );
};

export default Reset;
