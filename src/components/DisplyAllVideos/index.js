import {formatDistanceToNow} from 'date-fns'

import SavedVideosContext from '../../context/SavedVideosContext'

import {
  LiContainer,
  VideoCardImg,
  CardTextContainer,
  ProfileImg,
  ProfileTitle,
  ProfileType,
  StyledLink,
} from './styledComponents'

const DisplyAllVideos = props => {
  const {VideosDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
    id,
  } = VideosDetails
  const yearsAgo = formatDistanceToNow(new Date(publishedAt)).split(' ')
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkLightMode} = value
        return (
          <StyledLink to={`/videos/${id}`}>
            <LiContainer>
              <VideoCardImg src={thumbnailUrl} alt="video thumbnail" />
              <CardTextContainer>
                <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
                <div>
                  <ProfileTitle isDarkLightMode={isDarkLightMode}>
                    {title}
                  </ProfileTitle>{' '}
                  <ProfileType>{channel.name}</ProfileType>
                  <ProfileType>
                    {viewCount} views . {yearsAgo[1]} years ago
                  </ProfileType>
                </div>
              </CardTextContainer>
            </LiContainer>
          </StyledLink>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default DisplyAllVideos
