import React from 'react'
import TrackList from '../TrackList/TrackList'
import './SearchResults.css'

const SearchResults = ({searchResults, onAdd}) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList isRemoval={false} onAdd={onAdd} tracks={searchResults} />
    </div>
  )
}
export default SearchResults
