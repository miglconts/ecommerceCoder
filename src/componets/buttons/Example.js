import React from "react";

export default function Example({ color }) {
  return (
    <button className={`text-${color}-800`}>
      {props.children || props.text}
    </button>
  );
}
