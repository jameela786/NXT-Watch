import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {MdClose, MdOutlineSearch} from 'react-icons/md'

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
} from './HomeStyledComponents'

class Home extends Component {
  state = {
    isLoading: true,
    apiFailed: false,
    watchList: [],
    showAdd: true,
    searchText: '',
    searchedText: '',
  }

  componentDidMount() {
    this.getAllDetailsApi()
  }

  getAllDetailsApi = async () => {
    const {searchedText} = this.state
    console.log('searched text=', searchedText)
    const url = `https://apis.ccbp.in/videos/all?search=${searchedText}`
    // const url = `https://apis.earch=${searchedText}`
    const JwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)
      console.log('respnse====', response)
      if (response.ok) {
        const data = await response.json()
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
        console.log('UpdatedData:', UpdatedData)

        this.setState({
          watchList: UpdatedData,
          isLoading: false,
          apiFailed: false,
        })
      } else {
        this.setState({isLoading: false, apiFailed: true})
      }
    } catch (error) {
      // Catch and handle network or other unexpected errors
      console.error('Network or unexpected error:', error)
      this.setState({isLoading: false, apiFailed: true})
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
      <NoResultsSubhead>
        Try different keywords or remove search filters
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
    const {watchList, apiFailed} = this.state
    // const {isDarkLightMode} = this.context
    console.log('APi failed:', apiFailed, isDarkLightMode)
    if (apiFailed) {
      return this.renderApiFailed(isDarkLightMode)
    }
    return (
      <HomeContentContainer>
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
    this.setState({showAdd: false})
  }

  onChangeInputSearch = event => {
    this.setState({searchText: event.target.value})
  }

  onClickSearch = () => {
    const {searchText} = this.state
    this.setState({searchedText: searchText}, this.getAllDetailsApi)
  }

  OnRetrySearch = () => {
    console.log('on rety search')
    this.getAllDetailsApi()
  }

  render() {
    const {apiFailed, isLoading, showAdd, searchText} = this.state
    console.log('apiFailed', apiFailed)
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkLightMode} = value
          return (
            <div data-testid="home">
              <Header />
              <HomeContent>
                <SideNavBar />

                <HomeContainerAll isDarkLightMode={isDarkLightMode}>
                  {showAdd && (
                    <PremiumAddContainer data-testid="banner">
                      <AddTextContainer>
                        <SiteLogoimg
                          className="website-logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                        <GetPremiumButton>Get It Now</GetPremiumButton>
                      </AddTextContainer>
                      <CloseButton
                        onClick={this.onCloseButton}
                        data-testid="close"
                      >
                        <MdClose />
                      </CloseButton>
                    </PremiumAddContainer>
                  )}
                  <SearchContainer>
                    <InputSearchContainer
                      isDarkLightMode={isDarkLightMode}
                      type="search"
                      placeholder="Search"
                      value={searchText}
                      onChange={this.onChangeInputSearch}
                    />
                    <SearchButton
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                      isDarkLightMode={isDarkLightMode}
                    >
                      <MdOutlineSearch />
                    </SearchButton>
                  </SearchContainer>
                  {isLoading
                    ? this.renderLoader(isDarkLightMode)
                    : this.getHomeContentDetails(isDarkLightMode)}
                </HomeContainerAll>
              </HomeContent>
            </div>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default Home
