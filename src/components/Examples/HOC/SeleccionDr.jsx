import React from "react";

const SeleccionDr = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="1">Doctor Anderson</option>
      <option value="2">Doctor Brown</option>
      <option value="3">Doctor Clark</option>
      <option value="4">Doctor Davis</option>
      <option value="5">Doctor Evans</option>
      <option value="6">Doctor Garcia</option>
      <option value="7">Doctor Hernandez</option>
      <option value="8">Doctor Johnson</option>
      <option value="9">Doctor Martinez</option>
      <option value="10">Doctor Wilson</option>
    </select>
  );
};

export default SeleccionDr;
