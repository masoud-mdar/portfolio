import React from "react"
import {useState} from "react"
import {FaArrowCircleUp} from "react-icons/fa"
import styled from "styled-components"

const ScrollButton = () => {

    const Button = styled.div`
    position: fixed;
    width: 100%;
    left: 50%;
    bottom: 40px;
    height: 50px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: lightblue;
    `

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop

        if (scrolled > 500) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    window.addEventListener("scroll", toggleVisible)

    return (
        <Button>
            <FaArrowCircleUp onClick={scrollToTop}
            style={{display: visible ? "inline" : "none"}}
            />
        </Button>
    )
}

export default ScrollButton