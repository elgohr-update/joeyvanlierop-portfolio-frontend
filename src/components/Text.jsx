import React, { Component } from "react";
import styled from "styled-components";
import { color, space, typography } from "styled-system";

const StyledText = styled.p`
  ${color}
  ${typography}
  ${space}
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

export class Text extends Component {
  render() {
    const { children } = this.props;

    return <StyledText {...this.props}>{children}</StyledText>;
  }
}

Text.defaultProps = {
  fontFamily: "body",
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "text",
};

export default Text;
