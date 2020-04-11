import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import Firstpage from "./components/startup/Firstpage";
import InfoOfIdea from "./components/startup/InfoOfIdea";
import Header from "./components/public/Header";
import Footer from "./components/public/Footer";
import Main from "./components/Main";
import Ideas from "./components/AllIdeas/Ideas";
import Terms from "./components/AllIdeas/Terms";
import CreateStartUp from "./components/startup/CreateStartUp";
import MeService from "../src/services/MeService";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setMe();
  }

  setMe = me => {
    if (me) {
      this.setState({ me: me });
      return;
    }
    let service = new MeService();
    if (service.getToken()) {
      service
        .query()
        .then(res => {
          console.log("checking setme", res);
          if (res.ok) {
            return res.json();
          } else {
            throw Error(res.status);
          }
        })
        .then(result => {
          this.setState({ me: result });
        })
        .catch(e => {
          this.setState({ me: { user_id: -1 } });
          switch (e.message) {
            case "401":
              service.removeToken();
              break;
            default:
              break;
          }
        });
    } else {
      this.setState({ me: { user_id: -1 } });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route
            path="/"
            exact
            render={props => (
              <Main
                {...props}
                me={this.state.me}
                setMe={this.setMe.bind(this)}
              />
            )}
          />
          <Route
            path="/startup/Firstpage"
            exact
            render={props => (
              <Firstpage
                {...props}
                me={this.state.me}
                setMe={this.setMe.bind(this)}
              />
            )}
          />
          <Route
            path="/startup_edit"
            exact
            render={props => (
              <CreateStartUp
                {...props}
                me={this.state.me}
                setMe={this.setMe.bind(this)}
              />
            )}
          />
          <Route
            path="/startup/infoOfidea/:id"
            render={props => (
              <InfoOfIdea
                {...props}
                me={this.state.me}
                setMe={this.setMe.bind(this)}
              />
            )}
          />
          <Route
            path="/ideas"
            render={props => (
              <Ideas
                {...props}
                me={this.state.me}
                setMe={this.setMe.bind(this)}
              />
            )}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}
