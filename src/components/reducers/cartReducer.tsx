import React from "react";

function cartReducer(state: any, action: { type: any }) {
  switch (action.type) {
    case "increment_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default cartReducer;
