import styled from 'styled-components'

export const SidebarLeft = styled.div`
  width: 30%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid red;
`
export const SideItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid skyblue;
  width: 100%;
  cursor: pointer;
  outline: none;
  list-style-type: none;
`
export const SideIcon = styled.div`
  font-size: 25px;
`
export const SideIconText = styled.p`
  font-size: 1rem;
  color: #475569;
  font-weight: bold;
  margin-left: 10px;
`
export const AllSideTopContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  margin: 0px;
`

export const ContactUsHeading = styled.h1`
font-weight:bold;
font-size:1.3rem;
color:#212121;
text-align-center;
margin-left:10px;
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
font-weight:bold;
font-size:1rem;
color:#212121;
text-align-center;
margin-left:10px;
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`
export const VideoShowDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  // border:2px solid green;
  width: 80vw;
  margin-top: 15vh;
  margin-left: 20vw;

  background-color: ${props => (props.isDarkLightMode ? '#0f0f0f' : '#f9f9f9')};
`
export const HomeContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  // border:2px solid green;
  width: 80vw;
  margin-top: 15vh;
  margin-left: 20vw;
  background-color: ${props => (props.isDarkLightMode ? '#181818' : '#f9f9f9')};
`

export const PremiumAddContainer = styled.div`
  height: 35vh;
  width: 100%;
  padding: 10px;
  background-image: url(https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png);
  background-size: cover;
  background-position: right;
  display: ${props => props.display};
  justify-content: space-between;
  align-items: flex-start;
`
export const SiteLogoimg = styled.img`
  width: 110px;
`
export const AddTextContainer = styled.div`
  width: 30vw;
`
export const GetPremiumButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 16px;
  color: #383838;
  border: 2px solid #383838;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
export const CloseButton = styled.button`
  border: 0px solid;
  background: transparent;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
  font-weight: 500;
  font-size: 1.2rem;
`
export const HomeContentContainer = styled.div`
  background-color: ${props => (props.isDarkLightMode ? '#000000' : '#ebebeb')};
  padding: 10px;
`
export const SearchButton = styled.button`
  cursor: pointer;
  outline: none;
  // background:tranparent;
  background-color: ${props => (props.isDarkLightMode ? '#313131' : '#ffffff')};
  border: 1px solid #909090;
  color: ${props => (props.isDarkLightMode ? '#cbd5e1' : '#909090')};
  font-weight: bold;
  width: 60px;
  height: 28px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputSearchContainer = styled.input`
  background-color: ${props => (props.isDarkLightMode ? '#313131' : '#ffffff')};
  width: 350px;
  padding: 5px;
  border: 1px solid #909090;
  outline: none;
  color: ${props => (props.isDarkLightMode ? '#cbd5e1' : '#000000')};
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
`
export const ULContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`
export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const NoresultsImg = styled.img`
  width: 250px;
  height: 250px;
`
export const NoResultsHeading = styled.h1`
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#231f20')};
  font-size: 1.2rem;
  font-weight: 500;
`
export const NoResultsSubhead = styled.p`
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#909090')};
  font-weight: bold;
  font-size: 1rem;
`
export const RetryButton = styled.button`
  width: 110px;
  height: 30px;
  border: 0px solid;
  background-color: #00306e;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
`
export const FailureApiRetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  border: 0px solid;
  width: 110px;
  height: 30px;
  cursor: pointer;
  outline: none;
`
export const FailureAPiHeader = styled.h1`
  color: ${props => (props.isDarkLightMode ? '#ffffff' : '#231f20')};
  fonst-size: 1.1rem;
  font-weight: 500;
`

export const FailureApiSUbHeader = styled.p`
  color: ${props => (props.isDarkLightMode ? '#64748b' : '#383838')};
  fonst-size: 1rem;
  font-weight: 400;
`
export const FailureApiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FailureApiImg = styled.img`
  width: 500px;
  ehgith: auto;
`
export const BannerTitle = styled.p`
  font-size: 1.3rem;
`
