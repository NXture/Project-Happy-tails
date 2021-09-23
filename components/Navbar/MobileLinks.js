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
  flex-direction: column;
  position: fixed;
  width: 60%;
  top: 61px;
  right: 0;

  @media (min-width: 450px) and (max-width: 768px) {
    width: 40%;
  }
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  letter-spacing: 2px;
  margin-bottom: 10px;
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
        <LinksWrapper onClick={() => setOpen(!isOpen)}
        >
          <Access />
          <hr style={{ width: "100%" }} />
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <LinkItem>
              <Link href="/about">About Us</Link>
            </LinkItem>
            <LinkItem>
              <Link href="/instruction">Instruction</Link>
            </LinkItem>
          </div>
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
