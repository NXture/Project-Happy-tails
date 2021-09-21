import React, { useState } from "react";
import styled from "styled-components";
import { Access } from "./access";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  z-index: 4;
  margin: 0;
  padding: 10px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 60%;
  flex-direction: column;
  position: fixed;
  top: 61px;
  right: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function MobileLinks(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <Access />
          <hr />
          <LinkItem>
            <Link href="#">About Us</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">How it Works</Link>
          </LinkItem>
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
