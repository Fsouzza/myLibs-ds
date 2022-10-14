import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  background: #EB9B00;
  border: 2px solid #EB9B00;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  padding: 16px 32px;
  &:hover {
    background: #B87900;
    border: 2px solid #B87900;
  }
`

export const MlBotao = () => {
  return(
    <BotaoEstilizado>
      Clique aqui!
    </BotaoEstilizado>
  )
}