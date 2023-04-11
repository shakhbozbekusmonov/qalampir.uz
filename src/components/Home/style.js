import styled, { css } from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

// const Button = styled.button`
//    ${(props) =>
//         (props.primary &&
//             css`
//     background-color: #337ab7;
//     border-color: #2e6da4;
//     color: #fff;
//     `) ||
//         `
//         background-color: #fff;
//         border: 1px solid #ccc;
//         color: #333;`}
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 6px 12px;
//     text-align: center;
//     vertical-align: middle;
//     white-space: nowrap;
//     transition: all 0.2s ease-in-out;
//     &:hover {
//         background-color: #e6e6e6;
//         border-color: #adadad;
//         color: #333;
//     }
// `;

// const Button = styled.button`
//     background-color: ${(props) => (props.primary ? "#337ab7" : "#fff")};
//     border: 1px solid #ccc;
//     border-color: ${(props) => (props.primary ? "#2e6da4" : "#ccc")};
//     color: ${(props) => (props.primary ? "#fff" : "#333")};
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 6px 12px;
//     text-align: center;
//     vertical-align: middle;
//     white-space: nowrap;
//     transition: all 0.2s ease-in-out;
//     &:hover {
//         background-color: #e6e6e6;
//         border-color: #adadad;
//         color: #333;
//     }
// `;

// const Button = styled.button`
//     background-color: #fff;
//     border: 1px solid #ccc;
//     color: #333;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 6px 12px;
//     text-align: center;
//     vertical-align: middle;
//     white-space: nowrap;
//     transition: all 0.2s ease-in-out;
//     &:hover {
//         background-color: #e6e6e6;
//         border-color: #adadad;
//         color: #333;
//     }
//     ${(props) =>
//         props.primary &&
//         `
//         background-color: #337ab7;
//         border-color: #2e6da4;
//         color: #fff;
//     `}
// `;

const Button = styled.button`
    background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${(props) => props.sz || "14px"};
    font-weight: 400;
    line-height: 1.5;
    padding: 6px 12px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #e6e6e6;
        border-color: #adadad;
        color: #333;
    }
    cursor: pointer;
`;

const PrimaryButton = styled(Button)`
    background-color: #337ad7;
    border-color: #2e6da4;
    color: #fff;
`;

const Input = styled.input`
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    color: #555;
    display: block;
    font-size: 14px;
    height: 34px;
    line-height: 1.42857;
    padding: 6px 12px;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    width: 100%;
    &:focus {
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(102, 175, 233, 0.6);
    }
`;

export { Container, Row, Button, PrimaryButton, Input };
