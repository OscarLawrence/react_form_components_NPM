import * as React from "react";
import styled from "styled-components";

import { FontFamilyProperty, FontWeightProperty, ColorProperty } from "csstype";

// custom
import { Fonts } from "../../styles";

export interface LabelProps {
  for: string;
  label: string;
  className: string;
  required: boolean;
  fontWeight: FontWeightProperty | undefined;
  fontFamily: FontFamilyProperty | undefined;
  asteriskColor: ColorProperty | undefined;
}

const Label: React.SFC<LabelProps> = props => {
  const Asterisk = styled.div`
    color: ${props.asteriskColor || "black"};
    transform: translateX(0.2em);
  `;
  return (
    <label htmlFor={props.for} className={props.className}>
      {props.label}
      {props.required && <Asterisk>*</Asterisk>}
    </label>
  );
};

const StyledLabel = styled(Label)`
  display: flex;
  font-weight: ${props => props.fontWeight || "400"};
  font-family: ${props => props.fontFamily || Fonts.standard};
`;

export default StyledLabel;
