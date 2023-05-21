/*eslint-disable*/

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MenuIcon = (props) => (
  <Svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
  >
    <Path
      d="M3 12h18M9 18h12M3 6h12"
      style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default MenuIcon;
