import React from 'react'
import Story from './Story'
import { boolean, number, text } from '@storybook/addon-knobs'
import { Card, Flex } from 'rckit'

Story('Card').add('Sample', () => (
  <Flex
    css={`
      padding: 20px;
    `}
  >
    <Card flat={boolean('flat', false)} elevation={number('elevation', 1)}>
      {text('children', 'Contenido de la tarjeta')}
    </Card>
  </Flex>
))
