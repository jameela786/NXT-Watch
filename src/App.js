import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
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

  componentDidMount() {
    // Retrieve saved videos from localStorage
    const savedVideos = localStorage.getItem('savedVideosList')
    if (savedVideos) {
      this.setState({savedVideosList: JSON.parse(savedVideos)})
    }
  }

  onchangeDarkLightMode = () => {
    this.setState(prevState => ({isDarkLightMode: !prevState.isDarkLightMode}))
  }

  onRemoveSavedVideos = video => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(
        savedVideo => savedVideo.id !== video.id,
      ),
    }))
  }

  onAddToSavedVideos = video => {
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedVideosList.some(
        savedVideo => savedVideo.id === video.id, // Check if video already exists
      )

      if (isAlreadySaved) {
        console.log('Video already saved:........', video)
        return null // Do not update state if video is already saved
      }

      const updatedList = [...prevState.savedVideosList, video]
      localStorage.setItem('savedVideosList', JSON.stringify(updatedList)) // Save to localStorage
      return {savedVideosList: updatedList}
    })
  }

  render() {
    const {savedVideosList, isDarkLightMode} = this.state
    console.log('Home Component = ', Home)
    return (
      <SavedVideosContext.Provider
        value={{
          savedVideosList,
          onAddToSavedVideos: this.onAddToSavedVideos,
          onRemoveSavedVideos: this.onRemoveSavedVideos,
          isDarkLightMode,
          onchangeDarkLightMode: this.onchangeDarkLightMode,
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
