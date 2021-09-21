import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { NavLinks } from "./Links";
import { Access } from "./access";
import { useMediaQuery } from "react-responsive";
import DeviceSize from "@components/responsive";
import { MobileLinks } from "./MobileLinks";

const NavBarContainer = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0%;
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Header(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Access />}
        {isMobile && <MobileLinks />}
      </RightSection>
    </NavBarContainer>
  );
}
