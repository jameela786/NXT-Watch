import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

import SavedVideosContext from '../../context/SavedVideosContext'

import {
  HomeContent,
  LoaderContainer,
  VideoShowDetailsContent,
  FailureApiRetryButton,
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
  GamingHeaderContainer,
  GamingHeader,
  GameIconContainer,
  ULContainer,
  ProfileSubTitle,
  StyledLink,
} from './GamingStyledComponents'

class Gaming extends Component {
  state = {watchgamingList: [], isLoading: true, apiFailed: false}

  componentDidMount() {
    this.getgamingDetailsApi()
  }

  renderLoader = isDarkLightMode => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkLightMode ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  OnRetryApi = () => {
    console.log('on retry Gaming api')
    this.getgamingDetailsApi()
  }

  renderApiFailed = isDarkLightMode => (
    <>
      <FailureApiContainer>
        <FailureApiImg
          src={
            isDarkLightMode
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          }
        />
        <FailureAPiHeader isDarkLightMode={isDarkLightMode}>
          Oops! Something Went Wrong
        </FailureAPiHeader>
        <FailureApiSUbHeader isDarkLightMode={isDarkLightMode}>
          We are having some trouble to complete your request. Please try again.
        </FailureApiSUbHeader>
        <FailureApiRetryButton onClick={this.OnRetryApi}>
          Retry
        </FailureApiRetryButton>
      </FailureApiContainer>
    </>
  )

  getGamingContentDetails = isDarkLightMode => {
    const {watchgamingList, apiFailed} = this.state
    if (apiFailed) {
      return this.renderApiFailed(isDarkLightMode)
    }
    return (
      <>
        {' '}
        <GamingHeaderContainer isDarkLightMode={isDarkLightMode}>
          <GameIconContainer isDarkLightMode={isDarkLightMode}>
            <SiYoutubegaming />
          </GameIconContainer>

          <GamingHeader isDarkLightMode={isDarkLightMode}>Gaming</GamingHeader>
        </GamingHeaderContainer>
        <ULContainer>
          {watchgamingList.map(each => (
            <StyledLink to={`/videos/${each.id}`} key={each.id}>
              <LiContainer>
                <VideoCardImg src={each.thumbnailUrl} alt="VideoCardImg" />
                <CardTextContainer>
                  <ProfileTitle isDarkLightMode={isDarkLightMode}>
                    {each.title}
                  </ProfileTitle>
                  <ProfileSubTitle>
                    {each.viewCount} Watching Worldwide
                  </ProfileSubTitle>
                </CardTextContainer>
              </LiContainer>
            </StyledLink>
          ))}
        </ULContainer>
      </>
    )
  }

  getgamingDetailsApi = async () => {
    const url = `https://apis.ccbp.in/videos/gaming`
    // const url = `https://apis.deos/gaming`
    const JwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        console.log('gaming data = ', data)
        const UpdatedData = data.videos.map(each => ({
          id: each.id,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }))
        this.setState({
          watchgamingList: UpdatedData,
          isLoading: false,
          apiFailed: false,
        })
      } else {
        this.setState({isLoading: false, apiFailed: true})
      }
    } catch (error) {
      console.error('Network or unexpected error:', error)
      this.setState({isLoading: false, apiFailed: true})
    }
  }

  render() {
    const {watchgamingList, isLoading} = this.state
    console.log('gaming published date', watchgamingList)
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkLightMode} = value
          return (
            <div data-testid="gaming">
              <Header />
              <HomeContent>
                <SideNavBar />
                <VideoShowDetailsContent isDarkLightMode={isDarkLightMode}>
                  {isLoading
                    ? this.renderLoader(isDarkLightMode)
                    : this.getGamingContentDetails(isDarkLightMode)}
                </VideoShowDetailsContent>
              </HomeContent>
            </div>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default Gaming
