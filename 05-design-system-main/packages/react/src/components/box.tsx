import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";


export const Box = styled('div', {

})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
  }
  
  Box.displayName = 'Box'