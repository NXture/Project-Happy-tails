import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "@lib/context";
import { auth } from "@lib/firebase";

const AccessContainer = styled.div`
  display: flex;
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #00c9ff;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
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

          <Link href="/admin">
            <button className="btn-blue">Write Posts</button>
          </Link>

          <Link href={`/${username}`}>
            <img
              style={{ maxWidth: 50, maxHeight: 50 }}
              src={user?.photoURL || "/hacker.png"}
            />
          </Link>
        </>
      )}

      {/* user is not signed OR has not created username */}
      {!username && (
        <Link href="/enter">
          <LoginButton className="btn-blue">Login</LoginButton>
        </Link>
      )}
    </AccessContainer>
  );
}
