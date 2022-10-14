import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MlBotao } from './../src/components/MlBotao/index';

export default {
    title: 'Componentes/MlBotao',
    component: MlBotao
} as ComponentMeta<typeof MlBotao>

const Template: ComponentStory<typeof MlBotao> = () => <MlBotao />

export const Primario = Template.bind({});