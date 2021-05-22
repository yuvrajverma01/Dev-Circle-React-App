import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";

const Leftside = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                        <a>
                            <Photo>
                            {props.user && props.user.photoURL ? ( <img src={props.user.photoURL} alt="" /> ) : ( <img src="/images/user.svg" alt="" /> ) }
                            </Photo>
                            <Link> Welcome, {props.user ? props.user.displayName : 'There'}! </Link>
                        </a>
                        <a>
                            <AddPhotoText>Add a photo</AddPhotoText>
                        </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow Your Network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <span>
                        CodeChef Rating
                        </span>
                        <span>
                            <img src="/images/soc2.svg" alt="" />
                            <img src="/images/soc2.svg" alt="" />
                            <img src="/images/soc2.svg" alt="" />
                        </span>
                    </span>
                    
                </Item>
            </ArtCard>

            <CommunityCard>
                <a>
                    <span>Hackathons</span>
                </a>
                <a>
                    <span>DevConference
                    <img src="/images/conf.svg" alt="" />
                    </span>
                </a>
                <a>
                    <span>Hashtags</span>
                </a>
                <a>
                    <span>Dev Groups</span>
                </a>
            </CommunityCard>

            <SocialCard>
                <a><span>#CyberSecurity 🔐</span></a>
                <a><span>#MachineLearning 🐱‍💻</span></a>
                <a><span>#WebDevelopment 🐱‍👓</span></a>
                <a><span>#DataScience ⚡</span></a>
                <a><span>#PythonDeveloper 🐍</span></a>
                <a><span>#BitcoinCrypto 👛</span></a>
            </SocialCard>

        </Container>
    );
}

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`;

const CardBackground = styled.div`
    background: url("https://source.unsplash.com/random");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 500px;
    height: 100px;
    margin: -12px -12px -30px;
`;

const Photo = styled.div`
    box-shadow: none;
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
    img {
        width: 68px;
        height: 68px;
        border-radius: 50%;
    }
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;

`;

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

        div {
            display: flex;
            flex-direction: column;
            text-align: left;
            span {
                font-size: 12px;
                line-height: 1.333;
                &:first-child {
                    color: rgba(0, 0, 0, 0.6);
                }
                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1);
                } 
            }
        }
    }

    svg {
        color: rgba(0, 0, 0, 1);
    }

`;

const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 12px;
    padding-left: 4px;
    font-size: 12px;
    display: block;
    span {
        display: flex;
        align-items: center;
        flex-direction: row;
        color: rgba(0, 0, 0, 1);
        span {
            margin-left: 8px;
            img {
                width: 15px;
                height: 15px;
            }
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    a {
        color: black;
        padding: 4px 12px 4px 12px;
        font-size: 12px;
        &:hover {
            color: #0a66c2;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child {
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;
            border-top: 1px solid #d6cec2;
            padding: 12px;
            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
`;

const SocialCard = styled(ArtCard)`
    padding: 10px 0 10px;
    text-align: left;
    display: flex;
    flex-direction: column;
    a {
        color: black;
        padding: 4px 12px 10px 12px;
        font-size: 12px;
        &:hover {
            color: #0a66c2;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Leftside);