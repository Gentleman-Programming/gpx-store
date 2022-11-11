import { StateObject } from "./state-object";
export declare type SourceOfTruth = Map<string, StateObject>;
export interface SourceOfTruthInitiate {
    key: string;
    state: any;
}
