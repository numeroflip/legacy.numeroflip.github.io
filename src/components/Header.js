import React from 'react'
import styled from 'styled-components'

const HeaderSty = styled.header`
    color: black;
`

export default function Header() {

    return (
        <HeaderSty>
            <h1>I am Áron</h1>
            <p>I like to write JavaScript</p>
        </HeaderSty>
    )
}