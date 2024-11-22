import styled from 'styled-components'

import ReactPlayer from 'react-player'

export const VideoIdContentContainer = styled.div`
  // background-color:#cccccc;
  background-color: ${props => (props.isDarkLightMode ? '#000000' : '#f9f9f9')};
  padding: 15px;
  // height:100vh;
`
export const VideoIdTitle = styled.p`
  font-size: 1rem;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#181818')};
`
export const ProfileType = styled.p`
  color: #909090;
  font-size: 0.8rem;
`

export const VideoIdLikeDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const LikeDisLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LikeBtnContainer = styled.button`
  border: 0px solid;
  background: transparent;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  color: ${props => (!props.isLiked ? '#64748b' : '#2563eb')};
`

export const DisLikeBtnContainer = styled.button`
  border: 0px solid;
  background: transparent;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  color: ${props => (!props.isDisLiked ? '#64748b' : '#2563eb')};
`

export const SaveBtnContainer = styled.button`
  border: 0px solid;
  background: transparent;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  color: ${props => (!props.isSaved ? '#64748b' : '#2563eb')};
`
export const HorizontalLineBreak = styled.hr`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #ffffff;
`
export const VideoPlayerIdContainer = styled(ReactPlayer)`
  width: 100% !important;
  height: 500px !important;
`
export const ProfileTextContainer = styled.div`
  margin-left: 15px;
`
export const ProfileTitle = styled.p`
  margin-top: 0px;
  color: #313131;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
`
