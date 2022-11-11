"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateObject = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const utilities_1 = require("../utilities");
class StateObject {
    constructor(state) {
        this.state = state;
        this.observableSubject = new rxjs_1.BehaviorSubject(state);
    }
    /**
     * @desc returns the observable that contains the state for async operations - it listens for changes
     * @return Observable
     */
    getObservable() {
        return this.observableSubject.asObservable();
    }
    /**
     * @desc unsubscribes from the observable
     * @return void
     */
    unsubscribe() {
        this.observableSubject.unsubscribe();
    }
    /**
     * @desc returns the value of the state at the time of the call
     * @return T
     */
    getStateSnapshot() {
        return Object.assign({}, this.state);
    }
    /**
     * @desc returns the value of a property of the state at the time of the call
     * @param property - the name of the requested property
     * @return any
     */
    getPropertyFromState(property) {
        return this.state[property];
    }
    /**
     * @desc returns the value of a property of the state for async operations - it listens for changes
     * @param property - the name of the requested property
     * @return Observable
     */
    getPropertyFromObservable(property) {
        return this.getObservable().pipe((0, operators_1.map)((s) => this.checkIfPropertyExists(s, property)));
    }
    /**
     * @desc sets the value for a certain property inside the state, triggers an async event
     * @param value - the value for the requested property
     * @param property - the name of the requested property
     * @param emit - if true it will trigger an async event
     * @return void
     */
    setObservableValues(value, property = null, emit = true) {
        this.setStateValues(value, property);
        if (emit) {
            this.observableSubject.next(this.state);
        }
    }
    /**
     * @desc sets the value for a certain property inside the state, doesn't triggers an async event
     * @param value - the value for the requested property
     * @param property - the name of the requested property, if no property it will try to patch the values into the state
     * @return void
     */
    setStateValues(value, property) {
        if (property &&
            this.checkIfPropertyExists(this.state, property) !== undefined) {
            this.state[property] = value;
        }
        else {
            this.state = Object.assign(Object.assign({}, this.state), value);
        }
    }
    /**
     * @desc resets the state
     * @return void
     */
    resetState() {
        this.state = {};
    }
    /**
     * @desc checks if the selected property exists inside the state
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param property - the selected property
     * @return any
     */
    checkIfPropertyExists(state, property) {
        const condition = () => {
            return { met: state.hasOwnProperty(property), value: state[property] };
        };
        return (0, utilities_1.checkIfConditionMet)(() => condition(), "Selected property not found ! check if the key is correct and exists");
    }
}
exports.StateObject = StateObject;
