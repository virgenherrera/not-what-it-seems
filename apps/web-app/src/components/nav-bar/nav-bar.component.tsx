import React from "react";
import blocks from "../../svg/blocks.svg";
import cart from "../../svg/cart.svg";
import chat from "../../svg/chat.svg";
import graph from "../../svg/graph.svg";
import logo from "../../svg/logo.svg";
import { Avatar } from "../avatar/avatar.component";
import "./nav-bar.scss";

export function NavBar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <object data={logo} type="image/svg+xml">
          Duro
        </object>
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <object data={cart} type="image/svg+xml">
          Cart
        </object>

        <object data={blocks} type="image/svg+xml">
          Blocks
        </object>

        <object data={graph} type="image/svg+xml">
          Graph
        </object>

        <object data={chat} type="image/svg+xml">
          Chat
        </object>

        <Avatar />
      </div>
    </div>
  );
}
