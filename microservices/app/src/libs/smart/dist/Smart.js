"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smart = void 0;
class Smart {
    constructor() {
        this.subscribers = [];
    }
    /**
     * This function should be called only once when the state is created
     * @param config
     */
    setConfig(config) {
        if (!config) {
            config = {};
        }
        this.config = config;
    }
    /**
     * Write code for initialisation like defining your state and others
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * Write code for initialisation like defining your state and others
     */
    destroy() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    static getContext() {
        throw new Error("Please implement the static getContext() method which returns a React context object.");
    }
    /**
     * Overrides the whole state with a new model.
     * @param newStateModel
     */
    setState(newStateModel, options) {
        if (this.isDebug()) {
            console.log(`Previous state`, this.state);
            console.log(`Next state`, newStateModel);
        }
        this.previousState = this.state;
        this.state = newStateModel;
        if (options === null || options === void 0 ? void 0 : options.silent) {
            // When it's silent we don't inform anyone, you have to manually call .inform()
        }
        else {
            this.inform();
        }
    }
    /**
     * Informs all subscribers of a new change.
     */
    inform(previousState) {
        if (this.isDebug()) {
            console.log(`Dispatching state change event`);
        }
        this.subscribers.forEach((subscriber) => {
            subscriber(previousState || this.previousState, this.state);
        });
    }
    /**
     * @param subscriber
     */
    subscribe(subscriber) {
        if (this.subscribers.indexOf(subscriber) === -1) {
            this.subscribers.push(subscriber);
        }
    }
    /**
     * @param subscriber
     */
    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter((s) => s !== subscriber);
    }
    /**
     * Updates the state while preserving the other top-level variables
     * @param updateStateModel
     */
    updateState(updateStateModel, options) {
        this.setState(Object.assign(Object.assign({}, this.state), updateStateModel), options);
    }
    /**
     * If this is true it will log the previous state and next state
     * @returns boolean
     */
    isDebug() {
        return false;
    }
}
exports.Smart = Smart;
//# sourceMappingURL=Smart.js.map