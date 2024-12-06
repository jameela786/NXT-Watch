import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  onAddToSavedVideos: () => {},
  onRemoveSavedVideos: () => {},
  isDarkLightMode: false,
  onchangeDarkLightMode: () => {},
})

export default SavedVideosContext
