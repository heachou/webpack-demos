export interface IState {
  episodes: IEposide[]
  favourites: IEposide[]
}

export interface IAction {
  type: string
  payload: IEposide[] | any
}

export interface IEposide {
  id: number
  name: string
  season: string
  number: number
  image: {
    medium: string
  }
}

export interface IEpisodeProps extends IState {
  toggleFavAction: (episode: IEposide) => IAction
}
