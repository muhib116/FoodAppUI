/*eslint-disable*/

import * as React from "react";
import Svg, { Path, Circle, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const UserIcon = (props) => (
  <Svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z"
      className="clr-i-solid clr-i-solid-path-1"
    />
    <Circle cx={18} cy={10} r={7} className="clr-i-solid clr-i-solid-path-2" />
    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </Svg>
);
export default UserIcon;
