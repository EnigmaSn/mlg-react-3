import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  calendar: {
    date: {},
    selectedDay: {},
  },
  reminders: [],
};

const reducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case "EVENT_ADDED":
      return {
        calendar: {
          date: new Date(),
          selectedDay: new Date(),
        },
        reminders: [],
      };

    default:
      return state;
  }
};

export default reducer;
