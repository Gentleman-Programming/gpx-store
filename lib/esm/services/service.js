"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
const models_1 = require("../models");
const createStore = (SourceOfTruth) => {
    return new models_1.GentlemanState(SourceOfTruth);
};
exports.createStore = createStore;
