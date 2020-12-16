import React from "react";

export default function MemberForm(props) {
  const { values, update, submit } = props;

  return (
    <form className="form container" onSubmit={submit}>
      <div className="form inputs">
        <label>
          Username
          <input
            name="username"
            type="text"
            placeholder="type a username..."
            maxLength="30"
            value={values.username}
            onChange={update}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="type an email..."
            maxLength="30"
            value={values.email}
            onChange={update}
          />
        </label>
        <label>
          Role
          <select name="role" value={values.role} onChange={update}>
            <option value="">------select role------</option>
            <option value="backend engineer">backend engineer</option>
            <option value="frontend engineer">frontend engineer</option>
            <option value="designer">designer</option>
          </select>
        </label>
        <div className="edit">
          <button>Edit</button>
        </div>
      </div>
    </form>
  );
}
