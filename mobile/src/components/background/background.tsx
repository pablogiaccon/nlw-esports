import { ReactNode } from "react";

import backgroundImage from "../../assets/background-galaxy.png";

import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

export function Background({ children }: Props) {
  return (
    <Container source={backgroundImage} defaultSource={backgroundImage}>
      {children}
    </Container>
  );
}
