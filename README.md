# gpx-store

## Description

Hi everyone ! this is a super easy and comfortable way of using reactive programming to manage the state of your application, totally agnostic of your Javascript framework/library. That means you can use it with Angular, React, NextJs, Svelte, etc.

This library is based on Rxjs Behaviour Subject observables to manage the different states of your application using the concept of a single source of truth.

First...Let's learn some things !

Reactive programming is the concept of developing code where different entities are watching trough an information channel for data to pass, and when it does,
each entity will "react" to that situation doing their business logic.

Imagine an empty tube with 3 holes in it, at each hole we have a person looking trough it and waiting for a little ball to pass. Because each person is different,
they will see different aspects of the ball. For example, one can see that the ball is red, another that the ball is bouncing a little when it's passing trough
...or even that maybe it's not a ball at all !.

That's exactly what reactive programming is ! we have an information channel (observables) containing the data that is passing trough it,
and on the other hand we have entities (the angular components for example) that will be subscribed and waiting for that information to pass ...and when it does,
they will react to it doing what ever business logic we coded for them.

Redux, Ngrx/store, etc. are libraries that provide tools to manage the state of the application using the concept of "A Single Source Of Truth", these means that
the whole information of the app will be contained inside a "store", a place where you can access useful and up to date information. Each time a change happens  
inside your application, information wise, the store will be updated with the latest changes. So you don't need to call the back end again for an update if not needed and also all entities that are watching the store's states will be automatically alerted of the change.

Rxjs is a library containing a lot of amazing tools to manage these information channels, these provide the ability to combine and modify observables with the inclusion of new kinds of observables to use, each one with their own functionalities.

We are going to use Behaviour Subjects a lot in this case, it's an observable that will always contain the last data that passed trough it....which is amazing for what we want to do !
When ever we send information trough the Behaviour Subject, even if an entity subscribes AFTER the information has been sent, it will receive the latest data ! so we don't loose anything.

The main concept of Gentleman State Manager, is providing an useful way to manage the state of your application, using understandable and cristal clear tools like Rxjs to do so.
In short, we create an array of observables identified by their key to manage the information that passes trough the different entities of your Javascript application.

## How to use

1- Create a "store" folder containing a store.ts (or js, you can use it without Typescript) defining the different entities you want to share across your application :

```
store.ts:

import { EmptyUserState } from './states';

export enum SourceOfTruthKeys {
  'USER' = 'user',
}
export const SourceOfTruth = [
  {
    key: SourceOfTruthKeys.USER,
    state: EmptyUserState,
  },
];
```

- key: represents the key to access the proper observable that we want to use.
- state: the empty state of the object that will pass trough the observable.

2- Create a state for each of your entities, I recommend using a "states" folder with each of your entitites and create the properties and empty state objects:

```
user.state.ts:

export const EmptyUserState = {
  name: '',
  age: 0,
};

export enum UserStateProperties {
  'NAME' = 'name',
  'AGE' = 'age',
}
```

3- at the root of your app create an instance and export it, use the SourceOfTruth object we created at step 1

```
main.ts (for example): 

...
export const GentlemanStateManager = createStore(SourceOfTruth);
...
```

4- use our apis to access the information or send something new !

Example:

```
GentlemanStateManager.getEntity(SourceOfTruthKeys.USER).setObservableValues(
  20,
  UserStateProperties.AGE
);

GentlemanStateManager.getEntity(SourceOfTruthKeys.USER)
  .getPropertyFromObservable(UserStateProperties.AGE)
  .subscribe((age) => {
  console.log(age);
});

Remember to unsubscribe from the observable when the component is destroyed! 

GentlemanStateManager.getEntity(SourceOfTruthKeys.USER).unsubscribe();
```

## Api

### Array Of Observables Management :

createNewSourceOfTruth

```
/**
   * @desc it creates a new source of truth instead of the object.
   * @param key: string
   * @param state: any
   * @return void
   */
  createNewSourceOfTruth(key: string, state: any): void
```

createObservable

```
/**
   * @desc it creates and observable and adds it to the observable array.
   * @param key - the key to be used to represent the observable item inside the array
   * @param state - the state of the observable, the object that represents what the observable is going to contain
   * @return void
   */
  createObservable(key: string, state: any): void
```

getEntity

```
/**
   * @desc it returns the selected observable using the provided key.
   * @param key - the key to be used to represent the observable item inside the array
   * @return StateObject
   */
  getEntity(key: string): StateObject
```

### StateObject :

getObservable

```
/**
   * @desc returns the observable that contains the state for async operations - it listens for changes
   * @return Observable<State>
   */
  getObservable(): Observable<State>
```

unsubscribe

```
 /**
   * @desc unsubscribes from the observable
   * @return void
   */
   unsubscribe(): void
```

getStateSnapshot

```
  /**
   * @desc returns the value of the state at the time of the call
   * @return State
   */
   getStateSnapshot(): State
```

getPropertyFromState

```
  /**
   * @desc returns the value of a property of the state at the time of the call
   * @param property - the name of the requested property
   * @return any
   */
   getPropertyFromState(property: string): any
```

getPropertyFromObservable

```
  /**
   * @desc returns the value of a property of the state for async operations - it listens for changes
   * @param property - the name of the requested property
   * @return Observable<any>
   */
   getPropertyFromObservable(property: string): Observable<any> 
```

setObservableValues

```
  /**
   * @desc sets the value for a certain property inside the state, triggers an async event if requested
   * @param value - the value for the requested property
   * @param property - the name of the requested property
   * @param emit - if true it will trigger an async event
   * @return void
   */
   setObservableValues(value: any,property: string | null = null, emit = true): void 
```

resetState

```
  /**
   * @desc resets the state
   * @return void
   */
   resetState(): void
```
