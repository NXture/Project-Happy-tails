import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  list-style: none;
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 17px;

  :hover {
    text-decoration: underline;
  }
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/about">
            <span>About Us</span>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/instruction">
            <span>Instruction</span>
          </Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
