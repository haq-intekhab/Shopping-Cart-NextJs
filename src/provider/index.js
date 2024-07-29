"use client";

import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/header";

export default function ReduxProvider({ children, getSession }) {

  return (
    <Provider store={store}>
      {getSession?.user ? (
        <Header getSession={getSession}></Header>
      ) : (
        ""
      )}
      {children}
    </Provider>
  );
}
