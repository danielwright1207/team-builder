import React from "react";

export default function teamForm(props) {
  const { details } = props;
  return (
    <form>
      <label>
        <div>
          <h2>{details.username}</h2>
          <p>{details.fname}</p>
          <p>{details.lname}</p>
          <p>{details.role}</p>
        </div>
      </label>
    </form>
  );
}
