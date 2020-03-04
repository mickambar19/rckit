import React from 'react'
// import PropTypes from 'prop-types'

const Example = props => {
  return (
    <div
      css={`
        width: 50px;
        border: 1px solid gray;
        background: red;
        border-radius: 5px;
      `}
    >
      hola
    </div>
  )
}

Example.propTypes = {}

export default Example
