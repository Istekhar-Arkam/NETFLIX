import React from "react";
import {logout} from "../firebase"
const Dropdown = () => {
  return (
    <div className="absolute right-0 z-0 w-40 p-3 underline rounded cursor-pointer bg-zinc-900 top-10">
      <p onClick={() => {logout();
            }}>Sign Out</p>
    </div>
  );
};

export default Dropdown;
