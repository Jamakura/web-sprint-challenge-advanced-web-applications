import React, { useState, useEffect } from "react";
import { FetchColors } from "./utils/FetchColors";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    FetchColors(setColorList);
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={FetchColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
