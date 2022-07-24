import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Header } from "components/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
