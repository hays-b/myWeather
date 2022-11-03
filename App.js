import React from "react";

import AppContextProvider from './src/components/context/AppContext';
import { Main } from "./src/components";

export default function App() {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}
