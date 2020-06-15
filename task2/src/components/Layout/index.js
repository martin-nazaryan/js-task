import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import SignUp from "../screens/SignUp";
import Profile from "../screens/Profile";

import './styles.scss';

const {Header, Content} = Layout;

const AppLayout = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          My React Task
        </div>
      </Header>
      <Content className="content">
        <Router>
          <Switch>
            <Route exact path="/" component={SignUp}/>
            <Route path="/profile" component={Profile}/>
            <Redirect to="/"/>
          </Switch>
        </Router>
      </Content>
    </Layout>
  )
}

export default AppLayout;
