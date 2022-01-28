import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import Header from "./Header";
import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = (props) => {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
          <Head>
            <title>Ashmira Botanica | Luxury Wax Skincare</title>
            <link rel="icon" href="/ashmira-botanica-favicon.png" sizes="32x32" />
            <link rel="icon" href="/ashmira-botanica-favicon.png" sizes="192x192" />
            <link rel="apple-touch-icon" href="/ashmira-botanica-favicon.png" />
            <meta name="msapplication-TileImage" content="/ashmira-botanica-favicon.png" />
          </Head>
          <Header />
          {props.children}
          <Footer />
      </ApolloProvider>
    </AppProvider>
  );
};

export default Layout;
