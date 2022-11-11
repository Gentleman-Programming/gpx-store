import { GentlemanState } from "../models";
export const createStore = (SourceOfTruth) => {
    return new GentlemanState(SourceOfTruth);
};
