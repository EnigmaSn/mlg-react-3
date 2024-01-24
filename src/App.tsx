import React from "react";
import { store } from "./store";
import MyCalendar from "./components/calendar/calendar";
import { connect } from "react-redux";

import "./index.css";

const App: React.FC = () => {
  console.log("store ", store);
  return <MyCalendar />;
};

const mapStateToProps = (store: object) => {
  const { calendar } = store;
  return store;
};

export default connect(mapStateToProps)(App);
