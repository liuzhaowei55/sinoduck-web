import React from "react";

export default function BaseLayout(props: any) {
  return (
    <div>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
}
