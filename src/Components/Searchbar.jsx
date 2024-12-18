import React from "react";

function Searchbar(props) {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 py-4 px-4 sm:px-8">
      <input
        className="p-2 border-2 border-white bg-transparent text-white sm:text-start text-center rounded placeholder-white sm:placeholder:text-start placeholder:text-center w-full sm:w-auto"
        type="text"
        name={props.name}
        placeholder="Enter the place"
        onChange={props.onChange}
        value={props.value}
      />
      <button
        className="p-2 border-2 border-white text-white rounded w-full sm:w-auto"
        onClick={props.onClick}
      >
        {props.submit}
      </button>
    </div>
  );
}

export default Searchbar;
