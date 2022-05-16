import React from "react";
import UsersListItem from "./UsersListItem";

const UsersList = ({ userData }) => {
  return (
    <ul class="users-list">
      {userData.map((item) => (
        <UsersListItem item={item} />
      ))}
    </ul>
  );
};

export default UsersList;
