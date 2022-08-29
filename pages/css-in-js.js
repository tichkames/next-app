import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({theme}) => theme.colors.primary}
`

const CSSInJS = () => {
  return (
    <div>
      <Title>
        Styled Component
      </Title>
    </div>
  )
}

export default CSSInJS