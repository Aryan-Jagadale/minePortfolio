import React, { useContext } from "react";
import { Plus } from "react-feather";
import { MenuContext } from "../Menu/MenuManager";
import cn from "classnames";

import "./styles.scss";

export default function ContactButton() {
  const { setOpen, open } = useContext(MenuContext);

  return (
    <button
      className={cn("contact-button", { open })}
      onClick={() => setOpen(!open)}
    >
      <span>Contact me</span> <Plus />
    </button>
  );
}