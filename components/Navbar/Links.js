import React from "react";
import styled from "styled-components";
import Link from "next/link";

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

const Container = styled.div`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 17px;

  :hover {
    text-decoration: underline;
  }
`;

export function NavLinks() {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Container>
            <Link href="/about" passHref>
              <span>About Us</span>
            </Link>
          </Container>
        </LinkItem>
        <LinkItem>
          <Container>
            <Link href="/instruction" passHref>
              <span>Instruction</span>
            </Link>
          </Container>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
