import { GentlemanState, SourceOfTruthInitiate } from "../models";

export const createStore = (SourceOfTruth: SourceOfTruthInitiate[]) => {
  return new GentlemanState(SourceOfTruth);
};
