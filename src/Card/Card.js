import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardStyled = styled.div`
  display: inline-flex;
  padding: ${({ flat }) => !flat && '10px'};
  border-radius: ${({ flat }) => !flat && '5px'};
  box-shadow: ${({ theme, elevation }) => theme.shadows[elevation]};
`
const Card = props => {
  return <CardStyled {...props} />
}

Card.defaultProps = {
  flat: false,
  elevation: 1
}

Card.propTypes = {
  flat: PropTypes.bool,
  elevation: PropTypes.number
}

export default Card
