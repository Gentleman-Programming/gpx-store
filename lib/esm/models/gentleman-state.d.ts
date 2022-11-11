import { SourceOfTruthInitiate } from "./source-of-truth";
import { StateObject } from "./state-object";
export declare class GentlemanState {
    private observerArray;
    constructor(sourceOfTruthKeys: SourceOfTruthInitiate[]);
    /**
     * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
     * @param gentlemanObject - StateObject | undefined
     * @return StateObject
     */
    private static checkIfFound;
    /**
     * @desc it creates a new source of truth instead of the object.
     * @param key: string
     * @param state: any
     * @return StateObject
     */
    createNewSourceOfTruth(key: string, state: any): void;
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    private createObservable;
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return StateObject
     */
    getEntity(key: string): StateObject;
}
