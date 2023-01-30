import React, { useState, useRef } from 'react';
import { Burger, Menu } from '../components';
import Theme from "../theme";
import { useOnClickOutside } from '../hooks';


export default function UsersList() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Theme>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
    </Theme>
  )
}