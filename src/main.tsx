import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { getTotals } from "./store/cartSlice.ts";
import { getListTotal } from "./store/wishListSlice.ts";
import { store } from "./store/store.ts";

export type RootState = ReturnType<typeof store.getState>;
store.dispatch(getTotals());
store.dispatch(getListTotal());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
