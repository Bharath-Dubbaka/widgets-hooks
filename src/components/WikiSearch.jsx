// import { useState } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function WikiSearch() {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  //   console.log(term);
  //   console.log(results);
  //   const [debouncedTerm, setDebouncedTerm] = useState(term);

  //   useEffect(() => {
  //     const timerId = setTimeout(() => {
  //       setDebouncedTerm(term);
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timerId);
  //     };
  //   }, [term]);

  useEffect(() => {
    // console.log("changed");
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      // using for delay in request
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((eachResult) => {
    return (
      <div key={eachResult.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${eachResult.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{eachResult.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: eachResult.snippet }}></span>
        {/* {eachResult.snippet} */}
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search term</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default WikiSearch;
