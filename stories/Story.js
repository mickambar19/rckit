import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from 'rckit'

export default storyName =>
  storiesOf(storyName, module)
    .addDecorator(storyComponent => (
      <ThemeProvider>{storyComponent()}</ThemeProvider>
    ))
    .addDecorator(withKnobs())
