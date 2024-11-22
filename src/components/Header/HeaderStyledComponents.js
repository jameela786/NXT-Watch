import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  /* border-bottom: 1px solid rgb(243, 243, 243); */
  background-color: ${props => (props.isDarkLightMode ? '#313131' : '#ffffff')};
  position: fixed;
  width: 100%;
  height: 15vh;
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  /* max-width: 1110px; */
  padding-top: 25px;
  padding-bottom: 25px;
`
export const NavbarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* max-width: 1110px; */
`
export const SiteLogoimg = styled.img`
  width: 110px;
`
export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  flex: 1;
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const NavMenuItem = styled.li`
  font-family: 'Roboto';
  margin: 10px;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
`
export const LogoutDesktopButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.isDarkLightMode ? '#ffffff' : '#3b82f6')};
  background: transparent;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: auto;
`
export const LightModeShift = styled.button`
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#313131')};
  font-size: 30px;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: 0px solid;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  width: 25vw;
  background-color: ${props => (props.isDarkLightMode ? '#181818' : '#f9f9f9')};
  //  border:2px solid red;
  border-radius: 10px;
`

export const PopupTextContent = styled.p`
  font-weight: bold;
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#181818')};
`

export const ConfirmLogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 9px 17px;
  color: #ffffff;
  border: 0px solid;
  background: #4f46e5;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`
