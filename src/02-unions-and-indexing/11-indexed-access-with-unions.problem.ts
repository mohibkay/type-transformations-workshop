import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramMode = Omit<typeof programModeEnumMap, "GROUP" | "ANNOUNCEMENT">;
export type IndividualProgram =  ProgramMode[keyof ProgramMode];

// Another way to do this is to use Exclude
type ProgramMode2 = Exclude<typeof programModeEnumMap[keyof typeof programModeEnumMap], "group" | "announcement">;

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
