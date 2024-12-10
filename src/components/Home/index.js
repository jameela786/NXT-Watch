import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import DisplyAllVideos from '../DisplyAllVideos'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

import SavedVideosContext from '../../context/SavedVideosContext'

import {
  HomeContent,
  LoaderContainer,
  PremiumAddContainer,
  SiteLogoimg,
  AddTextContainer,
  GetPremiumButton,
  CloseButton,
  HomeContentContainer,
  SearchButton,
  InputSearchContainer,
  SearchContainer,
  ULContainer,
  NoResultsContainer,
  NoresultsImg,
  NoResultsHeading,
  NoResultsSubhead,
  RetryButton,
  FailureApiRetryButton,
  FailureApiImg,
  FailureAPiHeader,
  FailureApiSUbHeader,
  FailureApiContainer,
  HomeContainerAll,
  BannerTitle,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    watchList: [],
    searchText: '',
    apiStatus: apiStatusConstants.initial,
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.homeVideosApiUrl()
  }

  homeVideosApiUrl = async () => {
    const {searchText} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    // console.log('searched text=', searchText)

    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
    // const url = `https://apis.earch=${searchText}`

    const JwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    // console.log('respnse====', response)
    if (response.ok) {
      const data = await response.json()
      const UpdatedData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        videoUrl: each.video_url,
        title: each.title,
        viewCount: each.view_count,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
          subscriberCount: each.channel.subscriber_count,
        },
      }))
      // console.log('UpdatedData:', UpdatedData)

      this.setState({
        watchList: UpdatedData,

        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderHomeVideos = isDarkLightMode => {
    const {apiStatus} = this.state
    // console.log('api status = ', apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.getHomeContentDetails(isDarkLightMode)
      case apiStatusConstants.failure:
        return this.renderApiFailed(isDarkLightMode)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isDarkLightMode)
      default:
        return null
    }
  }

  getNotFoundPage = isDarkLightMode => (
    <NoResultsContainer>
      <NoresultsImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultsHeading isDarkLightMode={isDarkLightMode}>
        No Search results found
      </NoResultsHeading>
      <NoResultsSubhead isDarkLightMode={isDarkLightMode}>
        Try different key words or remove search filter
      </NoResultsSubhead>
      <RetryButton onClick={this.OnRetrySearch}>Retry</RetryButton>
    </NoResultsContainer>
  )

  renderApiFailed = isDarkLightMode => (
    <>
      <FailureApiContainer>
        <FailureApiImg
          src={
            isDarkLightMode
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          }
          alt="failure view"
        />
        <FailureAPiHeader isDarkLightMode={isDarkLightMode}>
          Oops! Something Went Wrong
        </FailureAPiHeader>
        <FailureApiSUbHeader isDarkLightMode={isDarkLightMode}>
          We are having some trouble to complete your request. Please try again.
        </FailureApiSUbHeader>
        <FailureApiRetryButton onClick={this.OnRetrySearch}>
          Retry
        </FailureApiRetryButton>
      </FailureApiContainer>
    </>
  )

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

  getHomeContentDetails = isDarkLightMode => {
    const {watchList} = this.state
    // const {isDarkLightMode} = this.context
    // console.log(
    //   'isDarkLightMode inside home contendet details:',
    //   isDarkLightMode,
    // )

    return (
      <HomeContentContainer isDarkLightMode={isDarkLightMode}>
        {watchList.length > 0 ? (
          <ULContainer>
            {watchList.map(eachItem => (
              <DisplyAllVideos VideosDetails={eachItem} key={eachItem.id} />
            ))}
          </ULContainer>
        ) : (
          this.getNotFoundPage(isDarkLightMode)
        )}
      </HomeContentContainer>
    )
  }

  onCloseButton = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeInputSearch = event => {
    this.setState({searchText: event.target.value})
  }

  onClickSearch = () => {
    this.homeVideosApiUrl()
  }

  OnRetrySearch = () => {
    this.setState({searchText: ''}, this.homeVideosApiUrl)
  }

  render() {
    const {searchText, bannerDisplay} = this.state

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkLightMode} = value

          return (
            <>
              <Header />
              <HomeContent>
                <SideNavBar />
                <HomeContainerAll
                  isDarkLightMode={isDarkLightMode}
                  data-testid="home"
                >
                  {bannerDisplay === 'flex' && (
                    <PremiumAddContainer data-testid="banner">
                      <AddTextContainer>
                        <SiteLogoimg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerTitle>
                          Buy Nxt Watch Premium prepaid plans with <br /> UPI
                        </BannerTitle>
                        <GetPremiumButton>GET IT NOW</GetPremiumButton>
                      </AddTextContainer>
                      <CloseButton
                        onClick={this.onCloseButton}
                        data-testid="close"
                      >
                        <AiOutlineClose />
                      </CloseButton>
                    </PremiumAddContainer>
                  )}

                  <SearchContainer>
                    <InputSearchContainer
                      isDarkLightMode={isDarkLightMode}
                      type="search"
                      name="search"
                      placeholder="Search"
                      value={searchText}
                      onChange={this.onChangeInputSearch}
                    />
                    <SearchButton
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                      isDarkLightMode={isDarkLightMode}
                      type="button"
                    >
                      <AiOutlineSearch size={20} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderHomeVideos(isDarkLightMode)}
                </HomeContainerAll>
              </HomeContent>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default Home
