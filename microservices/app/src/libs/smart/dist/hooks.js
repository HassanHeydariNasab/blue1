"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSmart = exports.smart = exports.newSmart = exports.setDefaults = void 0;
const React = require("react");
const react_1 = require("react");
const SmartOptionsDefaults = {
    isolated: false,
};
function setDefaults(defaults) {
    Object.assign(SmartOptionsDefaults, defaults);
}
exports.setDefaults = setDefaults;
const newSmart = (targetType, config, options) => {
    options = Object.assign({}, options, SmartOptionsDefaults);
    // We are using memo values here to avoid redoing this on every rerender
    const model = react_1.useMemo(() => {
        return createSmartModel(options, targetType, config);
    }, []);
    const Provider = react_1.useMemo(() => {
        return ({ children }) => {
            return React.createElement(targetType.getContext().Provider, {
                value: model,
                children,
            });
        };
    }, []);
    // Ensure we are looking at the propper states.
    if (options.isolated) {
        // Don't react to state changes
    }
    else {
        reactToSmartStateChange(model);
    }
    react_1.useEffect(() => {
        model.init();
        return function cleanup() {
            model.destroy();
        };
    }, []);
    return [model, Provider];
};
exports.newSmart = newSmart;
function createSmartModel(options, targetType, config) {
    let model;
    if (options === null || options === void 0 ? void 0 : options.factory) {
        model = options.factory(targetType, config);
    }
    else {
        model = new targetType();
    }
    model.setConfig(config);
    return model;
}
/**
 * Smart creates a wrapper function which accepts a Component as argument
 * @param targetType
 * @param config
 * @param options
 */
function smart(targetType, config, options) {
    return function (Component) {
        const Container = function (props) {
            const [api, Provider] = exports.newSmart(targetType, config, options);
            return React.createElement(Provider, {
                children: React.createElement(Component, props),
            });
        };
        Container.displayName = `SmartComponent(${getDisplayName(Component)})`;
        return Container;
    };
}
exports.smart = smart;
const useSmart = (modelClass, options) => {
    const model = react_1.useContext(modelClass.getContext());
    if (options === null || options === void 0 ? void 0 : options.isolated) {
        // If it's isolated it will not react (re-render) when the state changes.
    }
    else {
        reactToSmartStateChange(model);
    }
    return model;
};
exports.useSmart = useSmart;
function reactToSmartStateChange(model) {
    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);
    react_1.useMemo(() => {
        // If we put this in useEffect it won't work initially as useEffect can be run async later
        model.subscribe(forceUpdate);
        return null;
    }, []);
    react_1.useEffect(() => {
        return () => {
            model.unsubscribe(forceUpdate);
        };
    }, []);
}
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
//# sourceMappingURL=hooks.js.map