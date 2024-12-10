import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideosContext from './context/SavedVideosContext'
import './App.css'
// Replace your code here
class App extends Component {
  state = {savedVideosList: [], isDarkLightMode: false}

  // componentDidMount() {
  //   const savedVideos = (localStorage.getItem('savedVideosList'))
  //   if (savedVideos) {
  //     this.setState({savedVideosList: JSON.parse(savedVideos)})
  //   } else {
  //     this.setState({savedVideosList: []})
  //   }

  // }

  onchangeDarkLightMode = () => {
    this.setState(prevState => ({isDarkLightMode: !prevState.isDarkLightMode}))
  }

  onRemoveSavedVideos = video => {
    this.setState(prevState => {
      const updatedList = prevState.savedVideosList.filter(
        savedVideo => savedVideo.id !== video.id,
      )

      // localStorage.setItem('savedVideosList', JSON.stringify(updatedList))

      return {savedVideosList: updatedList}
    })
  }

  isSavedVideo = videoId => {
    const {savedVideosList} = this.state
    return savedVideosList.some(video => video.id === videoId)
  }

  onAddToSavedVideos = video => {
    console.log('saving the video', video)
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedVideosList.some(
        savedVideo => savedVideo.id === video.id,
      )
      if (isAlreadySaved) {
        return null
      }
      const updatedList = [...prevState.savedVideosList, video]
      // localStorage.setItem('savedVideosList', JSON.stringify(updatedList))
      return {savedVideosList: updatedList}
    })

    // this.setState(prevState => {
    //   const updatedList = prevState.savedVideosList.some(savedVideo => savedVideo.id === video.id)
    //     ? prevState.savedVideosList
    //     : [...prevState.savedVideosList, video]
    //   return {savedVideosList: updatedList}
    // })
  }

  render() {
    const {savedVideosList, isDarkLightMode} = this.state
    // console.log('Home Component = ', Home)
    console.log('savedVideosList in render method==', savedVideosList)
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList: savedVideosList || [],
          onAddToSavedVideos: this.onAddToSavedVideos,
          onRemoveSavedVideos: this.onRemoveSavedVideos,
          isDarkLightMode,
          onchangeDarkLightMode: this.onchangeDarkLightMode,
          isSavedVideo: this.isSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SavedVideosContext.Provider>
    )
  }
}
export default App
