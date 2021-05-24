import styled from "styled-components";
import React from "react";
import ReactPlayer from "react-player";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>#Threads</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#CyberSecurity</span>
              <button>Read Thread</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#SavePalestine</span>
              <button>Read Thread</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          Read All Latest Threads
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>

      </FollowCard>

      <CommunityCard>
          <a>
            <span>Podcast Channels <img src="/images/spotify.svg"/>
            </span>
          </a>
          <a>
            <span>Marques Browniee Channel</span>
			<PodcastCard1>
				<ReactPlayer width={'100%'} height={'100%'} url={`https://www.youtube.com/user/marquesbrownlee`} />
			</PodcastCard1>
          </a>
		  <a>
            <span>Gary VaynerChuck Channel</span>
			<PodcastCard2>
				<ReactPlayer width={'100%'} height={'100%'} url={`https://www.youtube.com/user/GaryVaynerchuk`} />
			</PodcastCard2>
          </a>
		  <a>
            <span>Grant Cardone Channel</span>
			<PodcastCard3>
				<ReactPlayer width={'100%'} height={'100%'} url={`https://www.youtube.com/user/GrantCardone`} />
			</PodcastCard3>
          </a>
		  <a>
            <span>Elliot Choy Channel</span>
			<PodcastCard4>
				<ReactPlayer width={'100%'} height={'100%'} url={`https://www.youtube.com/user/ELLIOTCHOY`} />
			</PodcastCard4>
          </a>
		  <a>
            <span>Unbox Therapy Channel</span>
			<PodcastCard5>
				<ReactPlayer width={'100%'} height={'100%'} url={`https://www.youtube.com/user/unboxtherapy`} />
			</PodcastCard5>
          </a>
		  <a>
            <span>Matt Davella Channel</span>
			<PodcastCard6>
				<ReactPlayer width={'100%'} height={'100%'} url={`https://www.youtube.com/user/blackboxfilmcompany`} />
			</PodcastCard6>
          </a>
      </CommunityCard>

      <BannerCard>
          <Title className="lofi">
              <h2>#LoFi Music</h2>
              <img src="/images/youtube.svg" alt="" />
          </Title>
          <ReactPlayer width={'100%'} height={'100%'} url={`https://www.youtube.com/watch?v=5qap5aO4i9A`} />
      </BannerCard>

    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      margin-top: 5px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
	.lofi {
		padding-bottom: 15px;
	}
`;

const PodcastCard1 = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  margin-top: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 6px;
  display: none;
`;

const PodcastCard2 = styled(PodcastCard1)`

`;

const PodcastCard3 = styled(PodcastCard1)`

`;

const PodcastCard4 = styled(PodcastCard1)`

`;

const PodcastCard5 = styled(PodcastCard1)`

`;

const PodcastCard6 = styled(PodcastCard1)`

`;

const CommunityCard = styled.div`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
      a {
        color: black;
        padding: 4px 12px 10px 12px;
        font-size: 12px;
        transition: transform 300ms;
        cursor: default;
        &:hover {
            color: #0a66c2;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:first-child {
            text-decoration: none;
            border-bottom: 1px solid #d6cec2;
            margin-bottom: 9px;
            margin-top: -9px;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.6);
            font-weight: 600;
            padding: 12px;
            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }
			img {
				height: 20px;
				width: 20px;
			}
        }

		&:nth-child(2) {
            &:hover {
              transform: translateY(2px);
				${PodcastCard1} {
					align-items: center;
					display: flex;
					justify-content: center;
				}
			}
        }

		&:nth-child(3) {
            &:hover {
              transform: translateY(2px);
				${PodcastCard2} {
					align-items: center;
					display: flex;
					justify-content: center;
				}
			}
        }

		&:nth-child(4) {
            &:hover {
              transform: translateY(2px);
				${PodcastCard3} {
					align-items: center;
					display: flex;
					justify-content: center;
				}
			}
        }

		&:nth-child(5) {
            &:hover {
              transform: translateY(2px);
				${PodcastCard4} {
					align-items: center;
					display: flex;
					justify-content: center;
				}
			}
        }

		&:nth-child(6) {
            &:hover {
              transform: translateY(2px);
				${PodcastCard5} {
					align-items: center;
					display: flex;
					justify-content: center;
				}
			}
        }

        &:last-child {
            padding-bottom: 12px;
            &:hover {
              transform: translateY(2px);
              ${PodcastCard6} {
                align-items: center;
                display: flex;
                justify-content: center;
              }
            }
        }
    }
`;

export default Rightside;

