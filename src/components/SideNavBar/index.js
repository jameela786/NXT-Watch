import {withRouter} from 'react-router-dom'

import {MdHome, MdPlaylistAdd} from 'react-icons/md'

import {BsFire} from 'react-icons/bs'

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
} from './SideNavBarStyledComponents'

const SideNavBar = props => {
  const {location} = props
  console.log('location', location)
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkLightMode} = value

        console.log('navbar 313131', isDarkLightMode)
        return (
          <SidebarLeft isDarkLightMode={isDarkLightMode}>
            <AllSideTopContainer>
              <StyledLink
                to="/"
                data-testid="banner"
                isactive={location.pathname === '/'}
              >
                <SideItemContainer>
                  <SideIcon
                    isactive={location.pathname === '/'}
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
                isactive={location.pathname === '/trending'}
                data-testid="banner"
              >
                <SideItemContainer isDarkLightMode={isDarkLightMode}>
                  <SideIcon
                    isactive={location.pathname === '/trending'}
                    isDarkLightMode={isDarkLightMode}
                  >
                    <BsFire />
                  </SideIcon>
                  <SideIconText isDarkLightMode={isDarkLightMode}>
                    Trending
                  </SideIconText>
                </SideItemContainer>
              </StyledLink>
              <StyledLink
                to="/gaming"
                isactive={location.pathname === '/gaming'}
                data-testid="banner"
              >
                <SideItemContainer>
                  <SideIcon
                    isactive={location.pathname === '/gaming'}
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
                isactive={location.pathname === '/saved-videos'}
                data-testid="banner"
              >
                <SideItemContainer>
                  <SideIcon
                    isDarkLightMode={isDarkLightMode}
                    isactive={location.pathname === '/saved-videos'}
                  >
                    <MdPlaylistAdd />
                  </SideIcon>
                  <SideIconText isDarkLightMode={isDarkLightMode}>
                    Saved
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
