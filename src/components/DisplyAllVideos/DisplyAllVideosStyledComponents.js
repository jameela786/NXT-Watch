import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const LiContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  width: 18vw;
  height: 50vh;
  // border:2px solid yellow;
`
export const VideoCardImg = styled.img`
  width: 100%;
  height: 200px;
`
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 5px;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`
export const ProfileTitle = styled.p`
  margin-top: 0px;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
  font-size: 1rem;
`
export const ProfileType = styled.p`
  color: #909090;
  font-size: 0.8rem;
`
