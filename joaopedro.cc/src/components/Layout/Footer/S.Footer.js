import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const Footer = styled.footer`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints.sm} {
    display: block;

    & span {
      text-align: center;
      display: block;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: inherit;
  margin-right: 12px;
  margin-bottom: 05px;
`;
