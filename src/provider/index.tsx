// external imports
import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

// internal imports
import { store } from "../store";

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;