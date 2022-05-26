import React, { useState, useEffect, useRef } from "react";

function Dropdown({ options, setSelected, selected, label }) {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    // console.log("clicked");
    document.body.addEventListener(
      "click",
      (e) => {
        if (ref.current.contains(e.target)) {
          return;
        }
        setOpen(false);
      },
      {
        capture: true,
      }
    );
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => setSelected(option)}
      >
        {option.label}
      </div>
    );
  });

  const onDropdownClick = (e) => {
    setOpen(!open);
  };

  //   console.log(open);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          {label}
        </label>
        <div
          onClick={onDropdownClick}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
