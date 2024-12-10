import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  onAddToSavedVideos: () => {},
  onRemoveSavedVideos: () => {},
  isDarkLightMode: false,
  onchangeDarkLightMode: () => {},
  isSavedVideo: () => {}, // New method to check if a video is saved
})

export default SavedVideosContext
