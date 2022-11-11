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
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    createObservable(key: string, state: any): void;
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return StateObject
     */
    getEntity(key: string): StateObject;
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @param data - the data to be emitted inside the selected observable
     * @return void
     */
    emitValue(key: string, data: any): void;
    /**
     * @desc it destroys an object from the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @return void
     */
    destroyObservable(key: string): void;
}
