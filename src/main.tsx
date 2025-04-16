import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { getListTotal } from "./store/wishListSlice.ts";
import { store } from "./store/store.ts";

export type RootState = ReturnType<typeof store.getState>;

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
