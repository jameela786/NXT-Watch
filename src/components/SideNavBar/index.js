import {withRouter} from 'react-router-dom'

import {MdHome, MdPlaylistAdd} from 'react-icons/md'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import SavedVideosContext from '../../context/SavedVideosContext'

import {
  SidebarLeft,
  SideIcon,
  SideItemContainer,
  SideIconText,
  AllSideTopContainer,
  ContactUsHeading,
  SocialMediaContainer,
  SocialLogoImg,
  ContactUsSubText,
  StyledLink,
  AllSideBottomContainer,
} from './styledComponents'

const SideNavBar = props => {
  const {location} = props
  let [isActiveHome, isActiveTrending, isActiveGaming, isActiveSavedVideos] = [
    false,
    false,
    false,
    false,
  ]
  if (location.pathname === '/') {
    isActiveHome = true
  } else if (location.pathname === '/trending') {
    isActiveTrending = true
  } else if (location.pathname === '/gaming') {
    isActiveGaming = true
  } else if (location.pathname === '/saved-videos') {
    isActiveSavedVideos = true
  }
  console.log('location', location, isActiveGaming, isActiveHome)
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkLightMode} = value

        console.log('navbar 313131', isDarkLightMode)
        return (
          <SidebarLeft isDarkLightMode={isDarkLightMode}>
            <AllSideTopContainer>
              <StyledLink to="/" isactive={isActiveHome ? 'true' : undefined}>
                <SideItemContainer>
                  <SideIcon
                    isactive={isActiveHome}
                    isDarkLightMode={isDarkLightMode}
                  >
                    <MdHome />
                  </SideIcon>
                  <SideIconText isDarkLightMode={isDarkLightMode}>
                    Home
                  </SideIconText>
                </SideItemContainer>
              </StyledLink>
              <StyledLink
                to="/trending"
                isactive={isActiveTrending ? 'true' : undefined}
              >
                <SideItemContainer isDarkLightMode={isDarkLightMode}>
                  <SideIcon
                    isactive={isActiveTrending}
                    isDarkLightMode={isDarkLightMode}
                  >
                    <HiFire />
                  </SideIcon>
                  <SideIconText isDarkLightMode={isDarkLightMode}>
                    Trending
                  </SideIconText>
                </SideItemContainer>
              </StyledLink>
              <StyledLink
                to="/gaming"
                isactive={isActiveGaming ? 'true' : undefined}
              >
                <SideItemContainer>
                  <SideIcon
                    isactive={isActiveGaming}
                    isDarkLightMode={isDarkLightMode}
                  >
                    <SiYoutubegaming />
                  </SideIcon>
                  <SideIconText isDarkLightMode={isDarkLightMode}>
                    Gaming
                  </SideIconText>
                </SideItemContainer>
              </StyledLink>
              <StyledLink
                to="/saved-videos"
                isactive={isActiveSavedVideos ? 'true' : undefined}
              >
                <SideItemContainer>
                  <SideIcon
                    isDarkLightMode={isDarkLightMode}
                    isactive={isActiveSavedVideos}
                  >
                    <MdPlaylistAdd />
                  </SideIcon>
                  <SideIconText isDarkLightMode={isDarkLightMode}>
                    Saved videos
                  </SideIconText>
                </SideItemContainer>
              </StyledLink>
            </AllSideTopContainer>
            <AllSideBottomContainer>
              <ContactUsHeading isDarkLightMode={isDarkLightMode}>
                Contact Us
              </ContactUsHeading>
              <SocialMediaContainer>
                <SocialLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaContainer>
              <ContactUsSubText isDarkLightMode={isDarkLightMode}>
                Enjoy! Now to see your channels and recommendations!
              </ContactUsSubText>
            </AllSideBottomContainer>
          </SidebarLeft>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default withRouter(SideNavBar)
