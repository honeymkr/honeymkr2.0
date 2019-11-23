import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 615 615"
      >
        <defs>
          <style>
            {`.cls-1{stroke:#fff;stroke-miterlimit:10;stroke-width:4px;}`}
            {`.cls-2{fill:#f2f2f2;}`}
          </style>
        </defs>
        <title>vision-octo-bw</title>
        <g id="octo-drop">
          <polygon
            class="cls-1"
            points="450.68 546.99 185.11 547 52.32 317.01 185.09 87.01 450.67 87 583.47 316.99 450.68 546.99"
          />
          <path
            class="cls-2"
            d="M318.87,154c-61.78,91.83-64.25,97.12-77,115-24.86,35-68,112.88-6.57,174.31s136.77,33.83,162.92,3.83c28.13-32.27,60-82.76-2.16-176.17C331.37,173.6,325.2,164.31,318.87,154Z"
          />
        </g>
      </svg>
    );
  }
}
