import styled from "styled-components";

const Square = styled.div`
    width: fit-content;
    height: fit-content;
    ${props => props.theme.font.bold_13_15}
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.brand};
    padding: 8px 28px;
    border-radius: 6px;
    text-align: center;
`
export { Square }