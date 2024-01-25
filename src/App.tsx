import React from "react";
import { RootState } from "./store";
import MyCalendar from "./components/calendar/calendar";
import { connect } from "react-redux";

import "./index.css";

const App: React.FC = (props) => {
  return <MyCalendar />;
};

const mapStateToProps = ({ calendar, reminders }: RootState) => {
  return { calendar, reminders };
};

export default connect(mapStateToProps)(App);
