// Write your JS code here
import Header from '../Header'

import SavedVideosContext from '../../context/SavedVideosContext'

import SideNavBar from '../SideNavBar'

import {
  HomeContent,
  VideoShowDetailsContent,
  FailureApiImg,
  FailureAPiHeader,
  FailureApiSUbHeader,
  FailureApiContainer,
} from '../Home/HomeStyledComponents'

const NotFound = () => (
  <>
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkLightMode} = value
        return (
          <div data-testid="not-found">
            <Header />
            <HomeContent>
              <SideNavBar />
              <VideoShowDetailsContent isDarkLightMode={isDarkLightMode}>
                <FailureApiContainer>
                  <FailureApiImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                    alt="not found"
                  />
                  <FailureAPiHeader isDarkLightMode={isDarkLightMode}>
                    Page Not Found
                  </FailureAPiHeader>
                  <FailureApiSUbHeader isDarkLightMode={isDarkLightMode}>
                    We are sorry, the page you request could not be found.
                  </FailureApiSUbHeader>
                </FailureApiContainer>
              </VideoShowDetailsContent>
            </HomeContent>
          </div>
        )
      }}
    </SavedVideosContext.Consumer>
  </>
)
export default NotFound
