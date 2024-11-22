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
} from '../Home/HomeStyledComponents'

import {
  LiContainer,
  VideoCardImg,
  CardTextContainer,
  ProfileTitle,
  ProfileType,
  TrendingHeaderContainer,
  TrendingHeader,
  TrendIconContainer,
} from './SavedVideosStyledComponetns'

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
          const {savedVideosList, isDarkLightMode} = value // Extract savedVideosList from context

          return (
            <div data-testid="savedVideos">
              <Header />
              <HomeContent>
                <SideNavBar />
                <VideoShowDetailsContent isDarkLightMode={isDarkLightMode}>
                  <TrendingHeaderContainer isDarkLightMode={isDarkLightMode}>
                    <TrendIconContainer isDarkLightMode={isDarkLightMode}>
                      <MdPlaylistAdd />
                    </TrendIconContainer>
                    <TrendingHeader isDarkLightMode={isDarkLightMode}>
                      Saved Videos
                    </TrendingHeader>
                  </TrendingHeaderContainer>

                  {/* Check if savedVideosList exists and has items */}
                  {savedVideosList && savedVideosList.length > 0
                    ? savedVideosList.map(video => {
                        const {
                          id,
                          thumbnailUrl,
                          viewCount,
                          title,
                          publishedAt,
                          channel,
                        } = video

                        return (
                          <LiContainer key={id}>
                            <VideoCardImg
                              src={thumbnailUrl}
                              alt="video thumbnail"
                            />
                            <CardTextContainer>
                              <ProfileTitle isDarkLightMode={isDarkLightMode}>
                                {title}
                              </ProfileTitle>
                              <ProfileType>{channel.name}</ProfileType>
                              <ProfileType>
                                {viewCount} views •{' '}
                                {formatDistanceToNow(new Date(publishedAt))} ago
                              </ProfileType>
                            </CardTextContainer>
                          </LiContainer>
                        )
                      })
                    : this.renderNosavedVideos(isDarkLightMode)}
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
