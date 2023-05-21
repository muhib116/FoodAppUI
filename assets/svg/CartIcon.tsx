/*eslint-disable*/

import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const CartIcon = (props) => (
  <Svg
    fill="#000000"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 20 20"
    enableBackground="new 0 0 20 20"
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M17,14H4c-0.6,0-1-0.4-1-1V2H0V0h4c0.6,0,1,0.4,1,1v11h11.2l1.5-6H7V4h12c0.6,0,1.1,0.6,1,1.2l-2,8C17.9,13.7,17.5,14,17,14 z" />
    <Circle cx={5} cy={18} r={2} />
    <Circle cx={16} cy={18} r={2} />
  </Svg>
);
export default CartIcon;
