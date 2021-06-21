import React from "react";
import Home from "../containers/Home";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Articles from "../containers/Articles";
import Article from "../containers/Article";
import Hola from "../containers/Hola"
export default function App() {
  const initialState = useInitialState();

  return (
    <>
      <AppContext.Provider value={initialState}>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/dragon" component={Hola}/>
              <Route exact path="/articles-details/:id" component={Article} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </Layout>
      </AppContext.Provider>
    </>
  );
}
