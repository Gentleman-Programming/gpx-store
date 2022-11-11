"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GentlemanState = void 0;
const utilities_1 = require("../utilities");
const state_object_1 = require("./state-object");
class GentlemanState {
    constructor(sourceOfTruthKeys) {
        this.observerArray = new Map();
        sourceOfTruthKeys.forEach((k) => {
            const { state } = k;
            this.createObservable(k.key, state);
        });
    }
    /**
     * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
     * @param gentlemanObject - StateObject | undefined
     * @return StateObject
     */
    static checkIfFound(gentlemanObject) {
        const condition = () => {
            return { met: !!gentlemanObject, value: gentlemanObject };
        };
        return (0, utilities_1.checkIfConditionMet)(() => condition(), "Observable item not found ! check if the key is correct and exists");
    }
    /**
     * @desc it creates a new source of truth instead of the object.
     * @param key: string
     * @param state: any
     * @return StateObject
     */
    createNewSourceOfTruth(key, state) {
        this.createObservable(key, state);
    }
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    createObservable(key, state) {
        const found = this.observerArray.has(key);
        if (found) {
            console.log(`the key : ${key}, already exists as an entity so it will be ignored`);
        }
        else {
            const gentlemanObject = new state_object_1.StateObject(state);
            this.observerArray.set(key, gentlemanObject);
        }
    }
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return StateObject
     */
    getEntity(key) {
        const observableArrayItem = GentlemanState.checkIfFound(this.observerArray.get(key));
        return observableArrayItem;
    }
}
exports.GentlemanState = GentlemanState;
