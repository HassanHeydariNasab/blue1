export declare type SmartSubscriber = (oldState: any, newState: any) => void | Promise<void>;
export declare type SetStateOptions = {
    /**
     * You run this when you want to perform multiple operations without dispatching changes yet. You have to manually call .inform() when ready
     */
    silent?: boolean;
};
export declare abstract class Smart<StateModel = any, Config = any> {
    state: StateModel;
    config: Config;
    subscribers: SmartSubscriber[];
    protected previousState?: StateModel;
    /**
     * This function should be called only once when the state is created
     * @param config
     */
    setConfig(config?: Config): void;
    /**
     * Write code for initialisation like defining your state and others
     */
    init(): Promise<void>;
    /**
     * Write code for initialisation like defining your state and others
     */
    destroy(): Promise<void>;
    static getContext(): void;
    /**
     * Overrides the whole state with a new model.
     * @param newStateModel
     */
    setState(newStateModel: StateModel, options?: SetStateOptions): void;
    /**
     * Informs all subscribers of a new change.
     */
    inform(previousState?: StateModel): void;
    /**
     * @param subscriber
     */
    protected subscribe(subscriber: SmartSubscriber): void;
    /**
     * @param subscriber
     */
    protected unsubscribe(subscriber: SmartSubscriber): void;
    /**
     * Updates the state while preserving the other top-level variables
     * @param updateStateModel
     */
    updateState(updateStateModel: Partial<StateModel>, options?: SetStateOptions): void;
    /**
     * If this is true it will log the previous state and next state
     * @returns boolean
     */
    isDebug(): boolean;
}
