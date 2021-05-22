import { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { postArticleAPI } from "../actions";
import firebase from "firebase";

const PostModal = (props) => {

    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === '' || image === undefined) {
            alert(`Not a valid image file. The file type ${typeof image} is not supported.`);
            return;
        }

        setShareImage(image);
    };

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);

    };

    const postArticle = (e) => {
        e.preventDefault();
        if(e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        }

        props.postArticle(payload);
        reset(e);
    };

    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    };

    return (
        <div>
        { props.showModal === "open" && (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button onClick={(event) => reset(event)}>
                        <img src="/images/close-icon.svg" alt="" />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        {props.user && props.user.photoURL ?
                        ( <img src={props.user.photoURL} alt="" /> ) :
                        ( <img src="/images/user.svg" alt="" /> )}
                        <span>{props.user ? props.user.displayName : 'Your Name'}</span>
                    </UserInfo>
                <Editor>
                    <textarea placeholder="Share your vibes with other devs..." value={editorText} onChange={(e) => setEditorText(e.target.value)} autoFocus={true}></textarea>
                    { assetArea === "image" ? (
                    <UploadImage>
                        <input type="file" accept='image/gif, image/jpeg, image/png' name="image" id="file" 
                        style={{display: "none"}}
                        onChange={handleChange}
                        />
                        <p>
                            <label htmlFor="file">
                                Click Here to select an image.
                            </label>
                        </p>
                        {shareImage && <img src={URL.createObjectURL(shareImage)} /> }
                    </UploadImage>
                    ) :
                    ( assetArea === "media" && (
                    <div>
                        <input type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange = {(e) => setVideoLink(e.target.value)}
                        />
                        {videoLink && (<ReactPlayer width={'100%'} url={videoLink} />)}
                    </div>
                    )
                    )}
                </Editor>
                </SharedContent>
                <SharedCreation>
                    <AttachAsset>
                        <AssetButton onClick={() => switchAssetArea("image")} >
                            <img src="/images/actionsplus.svg" alt="" />
                        </AssetButton>
                        <AssetButton onClick={() => switchAssetArea("media")} >
                            <img src="/images/actionsvideo.svg" alt="" />
                        </AssetButton>
                        <AssetButton>
                            <img src="/images/actionsnotes.svg" alt="" />
                        </AssetButton>
                    </AttachAsset>
                    <SharedComment>
                        <AssetButton>
                            <img src="/images/comments.svg" alt="" />
                            Anyone
                        </AssetButton>
                    </SharedComment>
                    <PostButton disabled={!editorText ? true : false} onClick={(event) => postArticle(event)} >
                        Post
                    </PostButton>
                </SharedCreation>
            </Content>
        </Container>
        )
        }
        </div>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    padding-top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    color: black;
    background-color: rgba(0, 0, 0, 0.7);
    animation: fadeIn 0.3ms;
`;

const Content = styled.div`
    width: 100%;
    max-width: 542px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`;

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        width: 25px;
        height: 25px;
        min-width: auto;
        border: none;
        background-color: white;
        &:hover {
                cursor: pointer;
        }
        img {
            pointer-events: none;
        }

    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: auto;
    padding: 8px 12px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
        padding-left: 10px;
    }

`;

const SharedCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.5);
    border: none;
    margin-right: 10px;
`;

const AttachAsset = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${AssetButton} {
        width: 40px;

    }
`;

const SharedComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton} {
        img {
            margin-right: 5px;
        }
    }
`;

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 28px;
    padding-left: 16px;
    padding-right: 16px;
    background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.8)" : "#0a66c2")};
    color: ${(props) => (props.disabled ? "grey" : "white")};
    border: none;
    &:hover {
        background-color: ${(props) => (props.disabled ? "lightgrey" : "#004182")};
    }
`;

const Editor = styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
        overflow-y: hidden;
        padding: 6px;
        input {
            width: 100%;
            height: 35px;
            font-size: 16px;
            margin-bottom: 20px;
        }
    }
`;

const UploadImage = styled.div`
    text-align: center;
    padding-top: 10px;
    p > label {
        cursor: pointer;
    }
    img {
        padding-top: 10px;
        width: 100%;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
