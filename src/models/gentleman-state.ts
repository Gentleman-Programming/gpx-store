import { checkIfConditionMet } from "../utilities";
import { SourceOfTruth, SourceOfTruthInitiate } from "./source-of-truth";
import { StateObject } from "./state-object";

export class GentlemanState {
  private observerArray: SourceOfTruth = new Map();

  constructor(sourceOfTruthKeys: SourceOfTruthInitiate[]) {
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
  private static checkIfFound(
    gentlemanObject: StateObject | undefined
  ): StateObject {
    const condition = () => {
      return { met: !!gentlemanObject, value: gentlemanObject };
    };
    return checkIfConditionMet(
      () => condition(),
      "Observable item not found ! check if the key is correct and exists"
    );
  }

  /**
   * @desc it creates a new source of truth instead of the object.
   * @param key: string
   * @param state: any
   * @return StateObject
   */
  createNewSourceOfTruth(key: string, state: any): void {
    this.createObservable(key, state);
  }

  /**
   * @desc it creates and observable and adds it to the observable array.
   * @param key - the key to be used to represent the observable item inside the array
   * @param state - the state of the observable, the object that represents what the observable is going to contain
   * @param stateProperties - the properties of the state
   * @return void
   */
  private createObservable(key: string, state: any): void {
    const found = this.observerArray.has(key);
    if (found) {
      console.log(
        `the key : ${key}, already exists as an entity so it will be ignored`
      );
    } else {
      const gentlemanObject = new StateObject(state);
      this.observerArray.set(key, gentlemanObject);
    }
  }

  /**
   * @desc it returns the selected observable using the provided key.
   * @param key - the key to be used to represent the observable item inside the array
   * @return StateObject
   */
  getEntity(key: string): StateObject {
    const observableArrayItem = GentlemanState.checkIfFound(
      this.observerArray.get(key)
    );
    return observableArrayItem;
  }
}
