import * as React from "react";
import { Smart } from "./Smart";
export declare function setDefaults(defaults: INewSmartOptions): void;
declare type Constructor<T> = {
    new (...args: any[]): T;
};
declare type SmartConstructor<S, U> = {
    new (...args: any[]): Smart<S, U>;
};
export interface INewSmartOptions {
    factory?<S, U>(targetType: SmartConstructor<S, U>, config: U): Smart<S, U>;
    /**
     * Isolated means that it will not react to state changes.
     */
    isolated?: boolean;
}
export declare const newSmart: <S, U, T extends Smart<S, U>>(targetType: Constructor<T & Smart<S, U>>, config?: U, options?: INewSmartOptions) => [T, React.ComponentType<any>];
declare type Returnable<T> = (...args: any[]) => T;
/**
 * Smart creates a wrapper function which accepts a Component as argument
 * @param targetType
 * @param config
 * @param options
 */
export declare function smart<T extends Smart<S, U>, S, U>(targetType: new () => T, config?: U, options?: INewSmartOptions): Returnable<React.ComponentType<any>>;
export declare type UseSmartOptions = {
    /**
     * This option is used when you only want to use the api and not react on state changes.
     */
    isolated?: boolean;
};
export declare const useSmart: <T extends Smart<any, any>>(modelClass: new (...args: any[]) => T, options?: UseSmartOptions) => T;
export {};
