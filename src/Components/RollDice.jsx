// import React from 'react'
import { useState } from "react"
import styled from "styled-components"

const RollDice = ({ rollDice, currentDice }) => {


    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>

            <p>Click on the Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:48px;

.dice{
    cursor:pointer;
}

p{
    font-size:24px;

}
`
