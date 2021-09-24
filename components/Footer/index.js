import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 5em;
  width: 100%;
  background-color: #5c5cff;

  div {
    padding: 0% 10%;
  }

  h2 {
    color: white;
    margin-top: 0%;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-bottom: 0%;
  }
  p {
    bottom: 0;
    margin-top: 0%;
    margin-bottom: 0%;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <h2>Pawesome Tales </h2>
        <p>Designed with ❤ | powered by NextJS and Vecel</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
