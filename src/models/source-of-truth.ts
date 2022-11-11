import { StateObject } from "./state-object";

export type SourceOfTruth = Map<string, StateObject>;

export interface SourceOfTruthInitiate {
  key: string;
  state: any;
}
