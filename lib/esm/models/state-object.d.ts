import { BehaviorSubject, Observable } from "rxjs";
import { TypeWithKey } from "./type-with-key";
declare type State = TypeWithKey<any>;
export declare class StateObject {
    private state;
    readonly observableSubject: BehaviorSubject<State>;
    constructor(state: State);
    /**
     * @desc returns the observable that contains the state for async operations - it listens for changes
     * @return Observable
     */
    getObservable(): Observable<State>;
    /**
     * @desc unsubscribes from the observable
     * @return void
     */
    unsubscribe(): void;
    /**
     * @desc returns the value of the state at the time of the call
     * @return T
     */
    getStateSnapshot(): State;
    /**
     * @desc returns the value of a property of the state at the time of the call
     * @param property - the name of the requested property
     * @return any
     */
    getPropertyFromState(property: string): any;
    /**
     * @desc returns the value of a property of the state for async operations - it listens for changes
     * @param property - the name of the requested property
     * @return Observable
     */
    getPropertyFromObservable(property: string): Observable<any>;
    /**
     * @desc sets the value for a certain property inside the state, triggers an async event
     * @param value - the value for the requested property
     * @param property - the name of the requested property
     * @param emit - if true it will trigger an async event
     * @return void
     */
    setObservableValues(value: any, property?: string | null, emit?: boolean): void;
    /**
     * @desc sets the value for a certain property inside the state, doesn't triggers an async event
     * @param value - the value for the requested property
     * @param property - the name of the requested property, if no property it will try to patch the values into the state
     * @return void
     */
    private setStateValues;
    /**
     * @desc resets the state
     * @return void
     */
    resetState(): void;
    /**
     * @desc checks if the selected property exists inside the state
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param property - the selected property
     * @return any
     */
    private checkIfPropertyExists;
}
export {};
