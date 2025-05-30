import React from 'react'
import s from './Days.module.scss'
import { GlobalSvgSelector } from '../../../../assets/icons/global/globalSvgSelector'

export const Card = ({day}) => {

  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day_info}>{day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.icon_id}/>
      </div>
      <div className={s.temp_day}>{day.temp_day}</div>
      <div className={s.temp_night}>{day.temp_night}</div>
      <div className={s.info}>{day.info}</div>
    </div>
  )
}