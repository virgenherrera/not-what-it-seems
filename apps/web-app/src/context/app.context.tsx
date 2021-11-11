import React from "react";
import {
  ActionClickReducer,
  clickActionInitialState,
  ClickActionStore,
} from "../store/click-option.reducer";

interface AppContext {
  clickAction: ClickActionStore;
}

const appContextDefaultValue = {} as AppContext;
const AppStore = React.createContext(appContextDefaultValue);

export function UseAppContext() {
  return React.useContext(AppStore);
}

export function UseAppProvider({ children }: React.PropsWithChildren<any>) {
  const [state, dispatch] = React.useReducer(
    ActionClickReducer,
    clickActionInitialState
  );
  const value: AppContext = {
    clickAction: { state, dispatch },
  };

  return <AppStore.Provider {...{ value }}>{children}</AppStore.Provider>;
}
