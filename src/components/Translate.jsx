import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  //   console.log(text);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <br />
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        setSelected={setLanguage}
      />
      <br />
      {/* <hr /> */}
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
}

export default Translate;
