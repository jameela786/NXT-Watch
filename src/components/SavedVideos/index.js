import {Component} from 'react'

import {MdPlaylistAdd} from 'react-icons/md'

import {formatDistanceToNow} from 'date-fns'

import SavedVideosContext from '../../context/SavedVideosContext'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

import {
  HomeContent,
  VideoShowDetailsContent,
  FailureApiImg,
  FailureAPiHeader,
  FailureApiSUbHeader,
  FailureApiContainer,
} from '../Home/styledComponents'

import {
  LiContainer,
  VideoCardImg,
  CardTextContainer,
  ProfileTitle,
  ProfileType,
  TrendingHeaderContainer,
  TrendingHeader,
  TrendIconContainer,
  UlCOntainer,
  LiContainerHeader,
  StyledLink,
} from './styledComponents'

class SavedVideos extends Component {
  renderNosavedVideos = isDarkLightMode => (
    <>
      <FailureApiContainer isDarkLightMode={isDarkLightMode}>
        <FailureApiImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <FailureAPiHeader isDarkLightMode={isDarkLightMode}>
          No Saved Videos Found
        </FailureAPiHeader>
        <FailureApiSUbHeader isDarkLightMode={isDarkLightMode}>
          You can save your videos while watching them.
        </FailureApiSUbHeader>
      </FailureApiContainer>
    </>
  )

  render() {
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideosList, isDarkLightMode} = value // Get saved videos and mode from context

          return (
            <div data-testid="savedVideos">
              <Header />
              <HomeContent>
                <SideNavBar />
                <VideoShowDetailsContent isDarkLightMode={isDarkLightMode}>
                  <UlCOntainer>
                    <LiContainerHeader>
                      <TrendingHeaderContainer
                        isDarkLightMode={isDarkLightMode}
                      >
                        <TrendIconContainer isDarkLightMode={isDarkLightMode}>
                          <MdPlaylistAdd />
                        </TrendIconContainer>
                        <TrendingHeader isDarkLightMode={isDarkLightMode}>
                          Saved Videos
                        </TrendingHeader>
                      </TrendingHeaderContainer>
                    </LiContainerHeader>
                    {/* Render No Saved Videos message if empty */}
                    {!savedVideosList || savedVideosList.length === 0
                      ? this.renderNosavedVideos(isDarkLightMode)
                      : savedVideosList.map(video => (
                          <StyledLink to={`/videos/${video.id}`} key={video.id}>
                            <LiContainer>
                              <VideoCardImg
                                src={video.thumbnailUrl}
                                alt="video thumbnail" // alt text for image
                              />
                              <CardTextContainer>
                                <ProfileTitle isDarkLightMode={isDarkLightMode}>
                                  {video.title} {/* Render video title here */}
                                </ProfileTitle>
                                <ProfileType>{video.channel.name}</ProfileType>
                                <ProfileType>
                                  {video.viewCount} views •{' '}
                                  {formatDistanceToNow(
                                    new Date(video.publishedAt),
                                  )}{' '}
                                  ago{' '}
                                  {/* Render view count and published time */}
                                </ProfileType>
                              </CardTextContainer>
                            </LiContainer>
                          </StyledLink>
                        ))}
                  </UlCOntainer>
                </VideoShowDetailsContent>
              </HomeContent>
            </div>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default SavedVideos
