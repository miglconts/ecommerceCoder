import React from "react";

export default function Example(props) {
  return (
    <button className={` text-${props.color}-800`}>
      {props.children || props.text}
    </button>
  );
}
