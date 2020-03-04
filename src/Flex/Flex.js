import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FlexStyled = styled.div`
  display: ${({ container, inline }) =>
    (container && 'flex') || (inline && 'inline-flex')};
  flex-basis: ${({ theme, col }) => {
    const flexBasis = col
      ? !isNaN(col)
        ? `${(col / theme.flexColumns) * 100}%`
        : col
      : ''
    return flexBasis
  }};
  flex-grow: ${({ grow, col }) => {
    if (grow === undefined) {
      if (!col) return
      else grow = 0
    }
    if (col === 'auto') return 1
    return grow ? 1 : 0
  }};
  flex-shrink: ${({ shrink, col }) => {
    if (shrink === undefined) {
      if (!col) return
      else shrink = 1
    }
    if (col === 'auto') return 0
    return shrink ? 1 : 0
  }};
  flex-wrap: ${({ container, inline }) => (container || inline ? 'wrap' : '')};
  flex-direction: ${({ direction }) => (direction === 'none' ? '' : direction)};
  justify-content: ${({ direction, justify, align, center }) =>
    (center && 'center') || (direction === 'row' ? justify : align)};
  align-items: ${({ direction, align, justify, center }) =>
    (center && 'center') || (direction === 'row' ? align : justify)};
`

const Flex = props => {
  return <FlexStyled {...props} />
}

Flex.defaultProps = {
  direction: 'row'
}

Flex.propTypes = {
  container: PropTypes.bool,
  inline: PropTypes.bool,
  col: PropTypes.number,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  direction: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse'
  ]),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    'space-between',
    'space-around',
    'space-evenly'
  ])
}

export default Flex
