import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.div`
  max-width: 50px;
  max-height: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

export function Logo(props) {
  return (
    <div>
      <Link href="/" passHref>
        <LogoWrapper>
          <LogoImg>
            <img src="/logo.svg" alt="logo" />
          </LogoImg>
          <LogoText>
            <div
              style={{
                fontWeight: "bold",
                letterSpacing: "1px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Pawesome</span>
              <span>Tales</span>
            </div>
          </LogoText>
        </LogoWrapper>
      </Link>
    </div>
  );
}
