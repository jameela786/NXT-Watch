import {Component} from 'react'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'

import {BiLike, BiDislike} from 'react-icons/bi'

import {MdPlaylistAdd} from 'react-icons/md'

import SavedVideosContext from '../../context/SavedVideosContext'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

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
  CardTextContainer,
  ProfileImg,
  ProfileTitle,
} from '../DisplyAllVideos/styledComponents'

import {
  VideoIdContentContainer,
  VideoIdTitle,
  ProfileType,
  VideoIdLikeDetailsContainer,
  LikeDisLikeContainer,
  LikeBtnContainer,
  DisLikeBtnContainer,
  SaveBtnContainer,
  HorizontalLineBreak,
  VideoPlayerIdContainer,
  ProfileTextContainer,
  IconBtnContainer,
  IconContainerBTN,
  DivVideoItemCOntainer,
  IconContainerBTNDisLike,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    VideoItemObject: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemApi()
    const {match} = this.props // Destructure here
    const {id} = match.params // Extract id directly
    const {savedVideosList} = this.context

    // Check if the video is already in the saved list
    const isSaved = savedVideosList.some(video => video.id === id)
    this.setState({isSaved})
  }

  getVideoItemApi = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    // const url = `https://apis.eos/${id}`
    const JwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)
      // const savedVideos = localStorage.getItem('savedVideosList')

      // if (savedVideos && savedVideos.includes(id)) {
      //   this.setState({isSaved: true})
      // }

      if (response.ok) {
        const data = await response.json()
        // console.log('videoItem data = ', data)
        const UpdatedData = {
          id: data.video_details.id,
          thumbnailUrl: data.video_details.thumbnail_url,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          publishedAt: data.video_details.published_at,
          viewCount: data.video_details.view_count,
          description: data.video_details.description,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
        }
        this.setState({
          VideoItemObject: UpdatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      // console.error('Network or unexpected error:', error)
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickDisLikeBtn = () => {
    // const {isLiked} = this.state
    // if (isLiked) {
    //   this.setState(prevState => ({isLiked: !prevState.isLiked}))
    // }
    // this.setState(prevState => ({isDisLiked: !prevState.isDisLiked}))
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
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
    // console.log('on retry VideoItem Details api')
    this.getVideoItemApi()
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

  renderDetailsShow = (
    isDarkLightMode,
    onAddToSavedVideos,
    onRemoveSavedVideos,
  ) => {
    const {VideoItemObject, isLiked, isDisLiked, isSaved} = this.state
    const {
      title,
      viewCount,
      publishedAt,
      videoUrl,
      description,
    } = VideoItemObject

    const subscriberCount = VideoItemObject.channel?.subscriberCount || '0'
    const nameProfile = VideoItemObject.channel?.name || ''
    const profileImgData = VideoItemObject.channel?.profileImageUrl || ''
    // const likeIconColor = isLiked ? "#2563eb" : "#64748b"
    // const dislikeIconColor = isDisLiked ? "#2563eb" : "#64748b"
    let yearsAgo

    if (publishedAt) {
      ;[, yearsAgo] = formatDistanceToNow(new Date(publishedAt)).split(' ')
    }
    console.log('isSaved in side videotiem details =', isSaved)

    return (
      <>
        <VideoIdContentContainer isDarkLightMode={isDarkLightMode}>
          <VideoPlayerIdContainer url={videoUrl} controls />

          <VideoIdTitle isDarkLightMode={isDarkLightMode}>{title}</VideoIdTitle>
          <VideoIdLikeDetailsContainer>
            <ProfileType>
              {viewCount} views . {yearsAgo} years ago
            </ProfileType>

            <LikeDisLikeContainer>
              <IconContainerBTN isLiked={isLiked}>
                <BiLike />
                <LikeBtnContainer
                  type="button"
                  onClick={this.onClickLikeBtn}
                  isLiked={isLiked}
                >
                  Like
                </LikeBtnContainer>
              </IconContainerBTN>
              <IconContainerBTNDisLike isDisLiked={isDisLiked}>
                <BiDislike />
                <DisLikeBtnContainer
                  type="button"
                  onClick={this.onClickDisLikeBtn}
                  isDisLiked={isDisLiked}
                >
                  Dislike
                </DisLikeBtnContainer>
              </IconContainerBTNDisLike>
              <IconBtnContainer isSaved={isSaved}>
                <MdPlaylistAdd />
                <SaveBtnContainer
                  onClick={() =>
                    this.onClickSaveBtn(onAddToSavedVideos, onRemoveSavedVideos)
                  }
                  isSaved={isSaved}
                  type="button"
                >
                  {isSaved ? 'Saved' : 'Save'}
                </SaveBtnContainer>
              </IconBtnContainer>
            </LikeDisLikeContainer>
          </VideoIdLikeDetailsContainer>
          <HorizontalLineBreak />
          <CardTextContainer>
            <ProfileImg src={profileImgData} alt="channel logo" />
            <ProfileTextContainer>
              <ProfileTitle isDarkLightMode={isDarkLightMode}>
                {nameProfile}
              </ProfileTitle>
              <ProfileType>{subscriberCount} Subscribers</ProfileType>
              <VideoIdTitle isDarkLightMode={isDarkLightMode}>
                {description}
              </VideoIdTitle>
            </ProfileTextContainer>
          </CardTextContainer>
        </VideoIdContentContainer>
      </>
    )
  }

  onClickLikeBtn = () => {
    // const {isDisLiked} = this.state
    // if (isDisLiked) {
    //   this.setState(prevState => ({isDisLiked: !prevState.isDisLiked}))
    // }
    // this.setState(prevState => ({isLiked: !prevState.isLiked}))

    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  // Define onClickSaveBtn method here
  onClickSaveBtn = (onAddToSavedVideos, onRemoveSavedVideos) => {
    const {isSaved, VideoItemObject} = this.state

    if (isSaved) {
      this.setState({isSaved: false}, () => {
        onRemoveSavedVideos(VideoItemObject)
      })
    } else {
      this.setState({isSaved: true}, () => {
        onAddToSavedVideos(VideoItemObject) // Add to context
      })
    }

    // if (isSaved) {
    //   this.setState({isSaved: false}, () => {
    //     onRemoveSavedVideos(VideoItemObject)
    //     const savedVideos =
    //       JSON.parse(localStorage.getItem('savedVideosList')) || []
    //     const updatedVideos = savedVideos.filter(
    //       video => video.id !== VideoItemObject.id,
    //     )
    //     localStorage.setItem('savedVideosList', JSON.stringify(updatedVideos))
    //   })
    // } else {
    //   this.setState({isSaved: true}, () => {
    //     onAddToSavedVideos(VideoItemObject)
    //     const savedVideos =
    //       JSON.parse(localStorage.getItem('savedVideosList')) || []
    //     savedVideos.push(VideoItemObject)
    //     localStorage.setItem('savedVideosList', JSON.stringify(savedVideos))
    //   })
    // }
  }

  renderVideoItemDetails(
    isDarkLightMode,
    onAddToSavedVideos,
    onRemoveSavedVideos,
  ) {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderDetailsShow(
          isDarkLightMode,
          onAddToSavedVideos,
          onRemoveSavedVideos,
        )
      case apiStatusConstants.failure:
        return this.renderApiFailed(isDarkLightMode)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isDarkLightMode)
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <SavedVideosContext.Consumer>
          {value => {
            const {
              onAddToSavedVideos,
              onRemoveSavedVideos,
              isDarkLightMode,
            } = value

            return (
              <DivVideoItemCOntainer data-testid="videoItemDetails">
                <Header />
                <HomeContent>
                  <SideNavBar />
                  <VideoShowDetailsContent isDarkLightMode={isDarkLightMode}>
                    {this.renderVideoItemDetails(
                      isDarkLightMode,
                      onAddToSavedVideos,
                      onRemoveSavedVideos,
                    )}
                  </VideoShowDetailsContent>
                </HomeContent>
              </DivVideoItemCOntainer>
            )
          }}
        </SavedVideosContext.Consumer>
      </>
    )
  }
}

VideoItemDetails.contextType = SavedVideosContext
export default VideoItemDetails
