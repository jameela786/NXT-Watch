import {Link, withRouter} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import SavedVideosContext from '../../context/SavedVideosContext'

import {
  NavHeader,
  NavContent,
  NavbarLargeContainer,
  SiteLogoimg,
  NavMenu,
  NavMenuItem,
  LogoutDesktopButton,
  ProfileImg,
  LightModeShift,
  PopupContainer,
  ConfirmLogoutButton,
  PopupTextContent,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkLightMode, onchangeDarkLightMode} = value
        const onModeChange = () => {
          onchangeDarkLightMode()
        }
        return (
          <>
            <NavHeader isDarkLightMode={isDarkLightMode}>
              <NavContent>
                <NavbarLargeContainer>
                  <Link to="/">
                    <SiteLogoimg
                      className="website-logo"
                      src={
                        isDarkLightMode
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      }
                      alt="website logo"
                    />
                  </Link>
                  <div>
                    <NavMenu>
                      <NavMenuItem onClick={() => onModeChange()}>
                        <LightModeShift
                          data-testid="theme"
                          isDarkLightMode={isDarkLightMode}
                        >
                          {isDarkLightMode ? <BsBrightnessHigh /> : <BsMoon />}
                        </LightModeShift>
                      </NavMenuItem>

                      <NavMenuItem>
                        <Link to="/profile">
                          <ProfileImg
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                            alt="profile"
                          />
                        </Link>
                      </NavMenuItem>
                      <NavMenuItem>
                        <Popup
                          modal
                          trigger={
                            <LogoutDesktopButton
                              type="button"
                              className="trigger-button"
                              isDarkLightMode={isDarkLightMode}
                            >
                              Logout
                            </LogoutDesktopButton>
                          }
                        >
                          {close => (
                            <PopupContainer isDarkLightMode={isDarkLightMode}>
                              <PopupTextContent
                                isDarkLightMode={isDarkLightMode}
                              >
                                Are You sure, you want to logout?
                              </PopupTextContent>
                              <div>
                                <LogoutDesktopButton
                                  type="button"
                                  className="trigger-button"
                                  onClick={() => close()}
                                  isDarkLightMode={isDarkLightMode}
                                >
                                  Cancel
                                </LogoutDesktopButton>
                                <ConfirmLogoutButton
                                  type="button"
                                  className="trigger-button"
                                  onClick={() => onClickLogout()}
                                >
                                  Confirm
                                </ConfirmLogoutButton>
                              </div>
                            </PopupContainer>
                          )}
                        </Popup>
                      </NavMenuItem>
                    </NavMenu>
                  </div>
                </NavbarLargeContainer>
              </NavContent>
            </NavHeader>
          </>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default withRouter(Header)
