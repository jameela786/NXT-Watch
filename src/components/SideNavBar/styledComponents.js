import styled from 'styled-components'

import {Link} from 'react-router-dom'

// Create a styled component for Link
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #475569;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${props => (props.isactive ? '#cccccc' : null)};
  color: ${props => (props.isactive ? '#ff0000' : '#d7dfe9')};
`

export const SidebarLeft = styled.div`
  margin-top: 15vh;
  width: 20vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  //  border:2px solid red;
  background-color: ${props => (props.isDarkLightMode ? '#313131' : '#ffffff')};
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
  position: fixed;
`
export const SideItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // border:2px solid skyblue;
  width: 100%;
  cursor: pointer;
  outline: none;
  list-style-type: none;
`
export const SideIcon = styled.div`
  margin-left: 15px;
  font-size: 25px;
  color: ${props => {
    // props.isactive ? '#ff0000' : props.isDarkLightMode ? '#cccccc' : '#313131'};
    if (props.isactive) return '#ff0000'
    if (props.isDarkLightMode) return '#cccccc'
    return '#313131'
  }};
`
export const SideIconText = styled.p`
  font-size: 1rem;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
  font-weight: bold;
  margin-left: 10px;
`
export const AllSideTopContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  flex-grow: 1; /* Pushes Contact Us container to the bottom */
`
export const AllSideBottomContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  margin-top: auto; /* Pushes the container to the bottom */
`
export const ContactUsHeading = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  margin-left: 10px;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SocialLogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
`
export const ContactUsSubText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
  text-align: center;
  margin-left: 10px;
`
