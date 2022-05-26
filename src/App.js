// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import WikiSearch from "./components/WikiSearch";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "One Lorem",
    content:
      "OneLorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis excepturi alias debitis, similique magnam quae necessitatibus enim hic doloremque nemo repellendus voluptates doloribus dignissimos sapiente, facere odit a temporibus?",
  },
  {
    title: "Two Lorem",
    content:
      "TwoLorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis excepturi alias debitis, similique magnam quae necessitatibus enim hic doloremque nemo repellendus voluptates doloribus dignissimos sapiente, facere odit a temporibus?",
  },
  {
    title: "Three Lorem",
    content:
      "ThreeLorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis excepturi alias debitis, similique magnam quae necessitatibus enim hic doloremque nemo repellendus voluptates doloribus dignissimos sapiente, facere odit a temporibus?",
  },
];

const options = [
  { label: "Color Red", value: "red" },
  { label: "Color Green", value: "green" },
  { label: "Color Blue", value: "blue" },
];

function App() {
  // const { items, setItems } = useState(itemsData);
  const [selected, setSelected] = useState(options[0]);
  // console.log("object", options[0]);
  return (
    <div className="App">
      {/* <Accordion items={items} /> */}
      {/* <WikiSearch/> */}
      {/* <Dropdown
      label='Select a Color'
        selected={selected}
        setSelected={setSelected}
        options={options}
      /> */}
      <Translate />
    </div>
  );
}

export default App;
