import React from "react";

const SubjectList = ({ item }) => {
  const capitalized = item.charAt(0).toUpperCase() + item.slice(1);
  return <li>{capitalized}</li>;
};

export default SubjectList;
