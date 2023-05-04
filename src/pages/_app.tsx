import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "@app/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastContainer rtl={false} pauseOnFocusLoss />
      <Component {...pageProps} />
    </Provider>
  );
}
