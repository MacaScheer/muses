import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SiteHeader from "./site_header/site_header_container";
import LoginFormContainer from "./session_form/login_form_container";
import FeedContainer from "./feed/feed_container";
import QuestionContainer from "./question/question_container";
const App = () => (
  <div>
    <header>
      <SiteHeader />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/" component={FeedContainer} />
      <ProtectedRoute
        path="/questions/:question_id"
        component={QuestionContainer}
      />
    </Switch>
  </div>
);

export default App;
