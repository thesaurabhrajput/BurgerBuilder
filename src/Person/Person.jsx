import React from "react";
const person = (props) => {
  return (
    <div className="Saurabh">
      <p>
        im a {props.name} and im {props.age} old {props.children}{" "}
      </p>
    </div>
  );
};
export default person;
