import React from "react";
var defaultValue:any;
const StyleContext = React.createContext(defaultValue);

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
