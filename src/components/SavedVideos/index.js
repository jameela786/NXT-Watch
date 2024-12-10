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
  FailureAPiHeaderNoVideos,
  SavedVideosTestContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderNosavedVideos = isDarkLightMode => (
    <>
      <FailureApiContainer isDarkLightMode={isDarkLightMode}>
        <FailureApiImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <FailureAPiHeaderNoVideos isDarkLightMode={isDarkLightMode}>
          No saved videos found
        </FailureAPiHeaderNoVideos>
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
          const {savedVideosList, isDarkLightMode} = value
          console.log(
            'savedVideosList inside context saved vid-',
            savedVideosList,
          )
          return (
            <SavedVideosTestContainer data-testid="savedVideos">
              <Header />
              <HomeContent>
                <SideNavBar />
                <VideoShowDetailsContent isDarkLightMode={isDarkLightMode}>
                  <UlCOntainer>
                    {console.log(
                      'savedVideosList.length=',
                      savedVideosList.length,
                    )}
                    {savedVideosList && savedVideosList.length > 0 ? (
                      <>
                        <LiContainerHeader>
                          <TrendingHeaderContainer
                            isDarkLightMode={isDarkLightMode}
                          >
                            <TrendIconContainer
                              isDarkLightMode={isDarkLightMode}
                            >
                              <MdPlaylistAdd />
                            </TrendIconContainer>
                            <TrendingHeader isDarkLightMode={isDarkLightMode}>
                              Saved Videos
                            </TrendingHeader>
                          </TrendingHeaderContainer>
                        </LiContainerHeader>
                        {/* { console.log("savedVideosList=",savedVideosList)} */}
                        {savedVideosList.map(video => (
                          <StyledLink to={`/videos/${video.id}`} key={video.id}>
                            <LiContainer>
                              <VideoCardImg
                                src={video.thumbnailUrl}
                                alt="video thumbnail"
                                role="img"
                              />
                              <CardTextContainer>
                                <ProfileTitle isDarkLightMode={isDarkLightMode}>
                                  {video.title}
                                </ProfileTitle>
                                <ProfileType>{video.channel.name}</ProfileType>
                                <ProfileType>
                                  {video.viewCount} views •{' '}
                                  {formatDistanceToNow(
                                    new Date(video.publishedAt),
                                  )}{' '}
                                  ago
                                </ProfileType>
                              </CardTextContainer>
                            </LiContainer>
                          </StyledLink>
                        ))}
                      </>
                    ) : (
                      this.renderNosavedVideos(isDarkLightMode)
                    )}
                  </UlCOntainer>
                </VideoShowDetailsContent>
              </HomeContent>
            </SavedVideosTestContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default SavedVideos
