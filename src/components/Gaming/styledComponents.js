import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ULContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`
export const LiContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 10px;
  width: 14vw;
  height: 50vh;
`
export const VideoCardImg = styled.img`
  width: 100%;
  height: 80%;
`
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ProfileTitle = styled.p`
  font-weight: bold;
  color: #313131;
  font-size: 1rem;
  margin-top: 2px;
  margin-bottom: 0px;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
`
export const ProfileSubTitle = styled.p`
  color: #909090;
  font-size: 1rem;
  margin-top: 1.5px;
  font-weight: 400;
  margin-bottom: 0px;
`

export const GamingHeaderContainer = styled.div`
  background-color: ${props => (props.isDarkLightMode ? '#181818' : '#f4f4f4')};
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const GamingHeader = styled.h1`
  color: #606060;
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 10px;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#606060')};
`
export const GameIconContainer = styled.div`
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
