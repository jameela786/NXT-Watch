import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import {formatDistanceToNow} from 'date-fns'

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
  StyledLink,
} from './styledComponents'

class Trending extends Component {
  state = {watchTrendingList: [], isLoading: true, apiFailed: false}

  componentDidMount() {
    this.getTrendingDetailsApi()
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
    console.log('on retry trending api')
    this.getTrendingDetailsApi()
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

  getTrendingContentDetails = isDarkLightMode => {
    const {watchTrendingList, apiFailed} = this.state
    const {id} = watchTrendingList
    console.log('trending id ----------', id, watchTrendingList)
    if (apiFailed) {
      return this.renderApiFailed(isDarkLightMode)
    }
    return (
      <>
        <TrendingHeaderContainer isDarkLightMode={isDarkLightMode}>
          <TrendIconContainer isDarkLightMode={isDarkLightMode}>
            <HiFire />
          </TrendIconContainer>

          <TrendingHeader isDarkLightMode={isDarkLightMode}>
            Trending
          </TrendingHeader>
        </TrendingHeaderContainer>

        {watchTrendingList.map(each => (
          <StyledLink to={`/videos/${each.id}`} key={each.id}>
            <LiContainer>
              <VideoCardImg src={each.thumbnailUrl} alt="video thumbnail" />
              <CardTextContainer>
                <div>
                  <ProfileTitle isDarkLightMode={isDarkLightMode}>
                    {each.title}
                  </ProfileTitle>{' '}
                  <ProfileType>{each.channel.name}</ProfileType>
                  <ProfileType>
                    {each.viewCount} views .{' '}
                    {
                      formatDistanceToNow(new Date(each.publishedAt)).split(
                        ' ',
                      )[1]
                    }{' '}
                    years ago
                  </ProfileType>
                </div>
              </CardTextContainer>
            </LiContainer>
          </StyledLink>
        ))}
      </>
    )
  }

  getTrendingDetailsApi = async () => {
    const url = `https://apis.ccbp.in/videos/trending`
    // const url = `https:/os/trending`
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
        console.log('trending data = ', data)
        const UpdatedData = data.videos.map(each => ({
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
        }))
        this.setState({
          watchTrendingList: UpdatedData,
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
    const {watchTrendingList, isLoading} = this.state
    console.log('trending published date', watchTrendingList, isLoading)
    // const yearsAgo = formatDistanceToNow(new Date(publishedAt)).split(' ')
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkLightMode} = value
          return (
            <div data-testid="trending">
              <Header />
              <HomeContent>
                <SideNavBar />
                <VideoShowDetailsContent isDarkLightMode={isDarkLightMode}>
                  {isLoading
                    ? this.renderLoader(isDarkLightMode)
                    : this.getTrendingContentDetails(isDarkLightMode)}
                </VideoShowDetailsContent>
              </HomeContent>
            </div>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default Trending
