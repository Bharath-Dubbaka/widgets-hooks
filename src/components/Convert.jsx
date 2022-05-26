import axios from "axios";
import React, { useState, useEffect } from "react";

function Convert({ text, language }) {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    // console.log("text has changes");
    const doTranslation = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(res.data.data.translations[0].translatedText);
    };
    doTranslation();
    console.log(translated);
    //   return () => {
    //     second
    //   }
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
}

export default Convert;
