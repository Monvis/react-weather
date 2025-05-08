import React from 'react'
import s from './ThisDayInfo.module.scss'
import { ThisDayItem } from './ThisDayItem'
import cloud from '../../../../assets/images/cloud.png'

export const ThisDayInfo = () => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      title: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      title: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      title: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      title: '3 м/с юго-запад - легкий ветер',
    },
  ]

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>{
        items.map((item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))
      }</div>
      <img src={cloud} alt="облако" />
    </div>
  )
} 