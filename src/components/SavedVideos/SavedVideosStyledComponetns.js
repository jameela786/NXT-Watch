import styled from 'styled-components'

export const LiContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px;
  width: 100%;
  height: 40vh;
`
export const VideoCardImg = styled.img`
  width: 30vw;
  height: 80%;
`
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  margin-left: 15px;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`
export const ProfileTitle = styled.p`
  margin-top: 0px;
  color: #313131;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
`
export const ProfileType = styled.p`
  color: #909090;
  font-size: 0.8rem;
`
export const TrendingHeaderContainer = styled.div`
  background-color: ${props => (props.isDarkLightMode ? '#181818' : '#f4f4f4')};
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const TrendingHeader = styled.h1`
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#606060')};
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 10px;
`
export const TrendIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  color: ${props => (props.isDarkLightMode ? '#ff0000' : '#ff0000')};
  background-color: ${props => (props.isDarkLightMode ? '#000000' : '#cccccc')};
`
