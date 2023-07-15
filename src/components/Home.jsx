import styled from "styled-components";
import ImgSilder from "./ImgSilder";
import Viewers from "./Viewers";
import Categories from "./Categories";

function Home() {
    return (
        <Container>
            <ImgSilder />
            <Viewers />
            <Categories type="recommend" />
            <Categories type="new" />
            <Categories type="original" />
            <Categories type="trending" />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &:after {
    background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}`
export default Home; 