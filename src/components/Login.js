import '../App.css';
import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Redirect } from 'react-router';

const Login = (props) => {
    return (
        <Container>
            {props.user && <Redirect to="/home" />}
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join onClick={() => props.signIn()}>Join Now</Join>
                    <SignIn onClick={() => props.signIn()}>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to the Professional DEV Circle! 🚀</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </Hero>
                <Form>
                    <Google onClick={() => props.signIn()}>
                        <img src="/images/google.svg" alt="" />
                        Sign In With Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
};

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 20px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    a > img {
        height: 60px;
        width: 60px;
    }

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
        border-radius: 4px;
        cursor: grab;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    border-radius: 15px;
    font-size: 16px;
    transition-duration: 167ms;
    font-weight: 700;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0);
    color: #0a66c2;
    margin-right: 12px;

    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
        cursor: grab;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1 {
        padding-bottom: 0px;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 40px;
            width: 100%;
            line-height: 1.3;
        }
    }
    img {
        width: 500px;
        height: 500px;
        position: absolute;
        bottom: 200px;
        right: 30px;
        @media (max-width: 920px) {
            top: 230px;
            width: 500px;
            height: 500px;
            position: initial;
        }
    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px) {
        margin-top: 20px;
        display: flex;
        align-items: center;
        margin-left: 40px;
        }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0/ 60%), inset 0 0 0 2px rgb(0 0 0/ 0%),inset 0 0 0 1px rgb(0 0 0/ 0%);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0. 0.6);
    img {
        margin-right: 10px;
    }
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
        
    }
    @media (max-width: 768px) {
        vertical-align: middle;
    }

`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,

    };
}

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
