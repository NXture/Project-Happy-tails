import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "@lib/context";
import { auth } from "@lib/firebase";

const AccessContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 50%;
    max-width: 50px;
    max-height: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: auto;

  div {
    pointer-events: auto;
    cursor: pointer;
    background: #e7e7e7;
    border: none;
    padding: 1rem;
    margin: 0;
    position: relative;
    display: inline-block;
  }

  div::before,
  div::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  div {
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 12px;
    border-radius: 0.5rem;
    overflow: hidden;
    color: #fff;
    background: #e7e7e7;
  }

  div span {
    position: relative;
    mix-blend-mode: difference;
  }

  div::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  div:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  @media (max-width: 768px) {
    height: 80px;
    justify-content: center;
    align-self: center;
  }
`;

export function Access(props) {
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.reload();
  };

  return (
    <AccessContainer>
      {/* user is signed-in and has username */}
      {username && (
        <>
          <button onClick={signOut}>Sign Out</button>

          <Link href="/admin" passHref>
            <button className="btn-blue">Write Posts</button>
          </Link>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href={`/${username}`} passHref>
              <img src={user?.photoURL || "/hacker.png"} alt="User Image" />
            </Link>
          </div>
        </>
      )}

      {/* user is not signed OR has not created username */}
      {!username && (
        <Link href="/enter" passHref>
          <LoginButton>
            <div>
              <span>Login / Sign Up</span>
            </div>
          </LoginButton>
        </Link>
      )}
    </AccessContainer>
  );
}
