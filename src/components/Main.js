import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import PostModal from "./PostModal";
import { useState, useEffect } from "react";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";


const Main = (props) => {

    const [showModal, setShowModal] = useState("close");

    useEffect(() => {
        props.getArticles();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return ;
        }
        switch (showModal) {
            case "open":
                setShowModal("close");
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    };

    return (
    <div>
    { props.articles.length === 0 ? (<p>There are no posts.</p>) :
    (<Container>
        <ShareBox>
            <div>
            {props.user && props.user.photoURL ? ( <img src={props.user.photoURL} alt="" /> ) : ( <img src="/images/user.svg" alt="" /> ) }
                <button onClick={handleClick} disabled={props.loading ? true: false} >Start a Post</button>
            </div>
            <div >
                <button>
                    <img src="/images/assetgallery.svg" alt="" />
                    <span>Photo</span>
                </button>
                <button>
                <img src="/images/assetvideo.svg" alt="" />
                    <span>Video</span>
                </button>
                <button>
                    <img src="/images/assetcrypto.svg" alt="" />
                    <span>Crypto</span>
                </button>
                <button>
                    <img src="/images/assetcode.svg" alt="" />
                    <span>Snippets</span>
                </button>
            </div>
        </ShareBox>
        <Content>
        {
            props.loading && <img src="./images/spinloader.svg" />
        }
        {
            props.articles.length > 0 &&
            props.articles.map((article, key) => (
            <Article key={key}>
                <SharedActor>
                    <a>
                        <img src={article.actor.image} />
                        <div>
                            <span>{article.actor.title}</span>
                            <span>{article.actor.description}</span>
                            <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                        </div>
                    </a>
                    <button>
                        <img src="/images/menu.svg" alt="" />
                    </button>
                </SharedActor>
                <Description>{article.description}</Description>
                <SharedImg>
                    <a>
                        {
                            !article.sharedImg && article.video ? (<ReactPlayer width={"100%"} url={article.video} />)
                        :
                            (article.sharedImg && <img src={article.sharedImg} />)
                        }
                    </a>
                </SharedImg>
                <SocialCount>
                    <li>
                        <button>
                            <img src="/images/soc1.svg" alt="" />
                        </button>
                        <button>
                            <img src="/images/soc2.svg" alt="" />
                        </button>
                        <span>75 Reactions</span>
                    </li>
                    <li>
                        <span>
                            <a>
                                {article.comments}
                            </a>
                            <span>
                                Comments
                            </span>
                        </span>
                    </li>
                </SocialCount>
                <SocialActions>
                    <button>
                        <img src="/images/like.svg" alt="" />
                        <span>Like</span>
                    </button>
                    <button>
                        <img src="/images/dislike.svg" alt="" />
                        <span>Dislike</span>
                    </button>
                    <button>
                        <img src="/images/share.svg" alt="" />
                        <span>Share</span>
                    </button>
                </SocialActions>
            </Article>
            ))}
        </Content>
        <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>)
    }
    </div>
    );
}

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
            justify-content: space-between;
            &:hover {
                cursor: text;
            }
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;
            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button {
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: white;
                text-align: left;
            }
        }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                img {
                    margin: 0 4px 0 -2px;
                }
                span {
                    margin-left: 2px;
                    color: #70b5f9;
                }
            }

        }
    }
`;

const Article = styled(CommonCard)`
    padding: 0px;
    margin: 15px 0 15px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0px;
    padding-bottom: 10px;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;
        img {
            width: 48px;
            height: 48px;
            border-radius: 25px;
        }
        &>div {
            display: flex;
            flex-direction: column;
            flex-grow :1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span {
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }
                &:nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }
    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
        img {
            padding-top: 10px;
            width: 25px;
            height: 25px;
        }
    }
`;

const Description = styled.div`
    padding: 0 16px;
    padding-bottom: 5px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SocialCount = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    list-style: none;
    li {
        display: flex;
        margin-right: 5px;
        font-size: 12px;
        button {
            margin-top: 5px;
            margin-left: -5px;
            width: 35px;
            background: transparent;
            display: flex;
            border: none;
        }
        span {
            font-size: 14px;
            padding-left: 6px;
            padding-top: 9px;
            color: #70b5f9;
            cursor: default;
        }
    }
`;

const SocialActions = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    width: 250px;
    @media (max-width: 881px) {
        width: 220px;
    }
    @media (max-width: 831px) {
        width: 210px;
    }
    @media (max-width: 768px) {
        width: 360px;
    }
    button {
        display: inline-flex;
        border: none;
        background-color: #fff;
        align-items: center;
        padding: 8px;
        width: 40px;
        height: 40px;
        color: #0a66c2;
        @media(min-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
    }
`;

const Content = styled.div`
    text-align: center;
    & > img {
        width: 30px;
    }
`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
        loading: state.articleState.loading,
        articles: state.articleState.articles,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticleAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);