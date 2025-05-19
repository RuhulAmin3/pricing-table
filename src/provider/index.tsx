// external imports
import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

// internal imports
import { store } from "../store";

type Props = {
  children: ReactNode;
};
const Provider = ({ children }: Props) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
