import React from 'react'
import { IEposide, IEpisodeProps } from './interface'

function List(props: IEpisodeProps): JSX.Element[] {
  const { episodes, toggleFavAction, favourites } = props
  return episodes.map((episode: IEposide) => {
    return (
      <section key={episode.id} className="episode-item">
        <img src={episode.image.medium} />
        <div>{episode.name}</div>
        <section>
          <div>
            Seasion: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favourites.find((item: IEposide) => item.id === episode.id)
              ? 'UnFav'
              : 'Fav'}
          </button>
        </section>
      </section>
    )
  })
}

export default List
