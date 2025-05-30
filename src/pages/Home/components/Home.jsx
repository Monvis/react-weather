import React from 'react'
import { ThisDay } from './ThisDay/ThisDay'
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo'
import { Days } from './Days/Days'
import s from './Home.module.scss'

export const Home = () => {
  return (
    <div className={s.home}>
      <div className="flex-wrapper space-between">
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}
