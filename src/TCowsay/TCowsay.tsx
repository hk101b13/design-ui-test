import React from "react";
import "./style.scss";

export interface TCowsayProps {
  content?: string;
}

export function TCowsay(props: TCowsayProps) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <pre style={{ fontFamily: "Arial", height: "100%", width: "100%" }}>
        <div className="MonoFont">{`( ${props.content || "hello"} )`}</div>
        <div className="MonoFont">{"     \\"}</div>
        <div className="MonoFont">{"      ^__^"}</div>
        <div className="MonoFont">{"      (oo)\\________"}</div>
        <div className="MonoFont">{"      (__)\\         )^"}</div>
        <div className="MonoFont">{"          ||------w|"}</div>
        <div className="MonoFont">{"          ||      ||"}</div>
      </pre>
    </div>
  );
}
