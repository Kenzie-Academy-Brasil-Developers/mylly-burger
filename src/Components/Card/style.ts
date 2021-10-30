import styled from "styled-components"

export const BoxCard = styled.div`
    width: 300px;
    height: 366px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 15px auto;
    border: 2px solid rgba(224, 224, 224, 1);
    box-shadow: 2px 3px 3px  rgba(0,0,0,0.05);
    button {
        margin-left: -3px;
        margin-top: 5px;
    }
    :hover{
        transition: 0.3s;
        border: 2px solid rgba(39, 174, 96, 1);
        button{
            background: rgba(39, 174, 96, 1);
           
        }
    }
    div{
        align-self: flex-start;
        line-height:33px;
        width: 95%;
        margin-top: 2px;
        margin: 5px;
        span {
            font-size: 12px;
            color: var(--gray-300);
        }
        h3 {
            color: #333333
        }
        p{
            font-weight: 600;
            font-size: 14px;
            color: rgba(39, 174, 96, 1);
        }
    }
    img{ 
        width: 100%;
        max-width: 177px;
        height: 177px;
        align-self: center;
}
`;
export const Content = styled.div`
    display: flex;
    max-width: 1300px;
    margin: 150px auto;
    flex-wrap: wrap;
`

