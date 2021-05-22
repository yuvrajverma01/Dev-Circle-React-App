import styled from 'styled-components';
import React from 'react'
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
    return (
        <Container>
            {!props.user && <Redirect to="/" />}
            <Section>
                <h5><a>Hacking Alone? - </a></h5>
                <p>
                    Why not interact with talented hackers to learn more about the dev world!
                </p>
            </Section>
            <Layout>
                <Leftside />
                <Main />
                <Rightside />
            </Layout>
        </Container>
    );

};

const Container = styled.div`
    padding-top: 62px;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1514px) {
        max-width: 80%;
    }
    @media (max-width: 1018px) {
        max-width: 90%;
    }
`;

const Section = styled.section`
    min-height: 50px;
    padding: 25px 0 25px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5 {
        color: #0a66c2;
        font-weight: 14px;
        a {
            color: #0a66c2;
            text-decoration-color: #0a66c2;
            font-weight: 700;
        }
    }
    p {
        font-size: 16px;
        color: #434649;
        font-weight: 700;
        padding-left: 10px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-rows: auto; */
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
        margin: 25px 0;
    }

`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};


export default connect(mapStateToProps)(Home);
