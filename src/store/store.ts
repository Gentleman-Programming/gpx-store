import { SourceOfTruthInitiate } from "../models";

export enum SourceOfTruthKeys {
  "USER" = "user",
}

export enum UserStateProperties {
  "NAME" = "name",
  "AGE" = "age",
}

export const UserDefaultState = {
  name: "",
  age: 0,
};

export const SourceOfTruth: SourceOfTruthInitiate[] = [
  {
    key: SourceOfTruthKeys.USER,
    state: UserDefaultState,
  },
];
