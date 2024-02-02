import * as React from 'react'
import { IKoopaProps } from './types'
import { FC } from 'react'
import { HighScore } from './Highscore/Highscore'
require('./Koopa.css')

export const Koopa: FC<IKoopaProps> = (props) => {
  return (
    <div className='koopa'>
      <div className='header'>
        <h1>{props.name}</h1>
      </div>
      <div className='courseGame' id='courseGame'>
        <div className='scoreComponent'>
          <HighScore />
        </div>
      </div>
    </div>
  )
}
