import React, { useContext, useEffect, lazy, Suspense } from 'react'
import { Store } from './Store'
import { IAction, IEposide } from './interface'

const EpisodeList = lazy<any>(() => import('./list'))

export default function Morty(): JSX.Element {
  const { state, dispatch } = useContext(Store)
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  }, [])

  const fetchDataAction = async () => {
    const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&morty&embed=episodes`
    const data = await fetch(URL)
    const dataJson = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJson._embedded.episodes,
    })
  }
  const toggleFavAction = (episode: IEposide): IAction => {
    const isFavourite = state.favourites.includes(episode)
    if (isFavourite) {
      return dispatch({
        type: 'REMOVE_FAV',
        payload: state.favourites.filter(
          (item: IEposide) => item.id !== episode.id
        ),
      })
    }
    return dispatch({
      type: 'ADD_FAV',
      payload: episode,
    })
  }
  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favourites: state.favourites,
  }
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!!</p>
      <section className="episode-box">
        <Suspense fallback={<div>loading...</div>}>
          <EpisodeList {...props} />
        </Suspense>
      </section>
    </>
  )
}
