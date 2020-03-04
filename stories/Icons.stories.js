import React from 'react'
import Story from './Story'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  CaretDown,
  PencilUnderline
} from 'rckit/Icons'

Story('Icons').add('ArrowDown', () => <ArrowDown></ArrowDown>)
Story('Icons').add('ArrowUp', () => <ArrowUp></ArrowUp>)
Story('Icons').add('ArrowUpDown', () => <ArrowUpDown></ArrowUpDown>)
Story('Icons').add('CaretDown', () => <CaretDown></CaretDown>)
Story('Icons').add('PencilUnderline', () => <PencilUnderline></PencilUnderline>)
