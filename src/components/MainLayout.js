import styled from 'styled-components'

const MainLayout = styled.div`
    display: grid;
    grid-template-areas: "header main" "footer main";
    grid-template-rows: 1fr auto;
    grid-template-columns: minmax(200px, 400px) minmax(500px, 1100px) 1fr;
    min-height 100vh;

    > * {
        border: 1px solid black;
    }

    main, header, footer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    main {
        grid-area: main;
    }

    footer {
        grid-area: footer;
    }

    header {
        grid-area: header;
    }

    @media(max-width: 700px) {
        grid-template-areas: "header" "main" "footer";
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
    }
`

export default MainLayout