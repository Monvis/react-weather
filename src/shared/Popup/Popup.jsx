import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/globalSvgSelector'
import Select from 'react-select'
import s from './Popup.module.scss'
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import { ThisDay } from '../../pages/Home/components/ThisDay/ThisDay'

export const Popup = () => {
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
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.ThisDay}>
          <div className={s.top__block}>
            <div className={s.top__block_wrapper}>
              <div className={s.this__temp}>
                <p>20°</p>
              </div>
              <div className={s.this__day_day}>
                <p>Сегодня</p>
              </div>
            </div>
            <div className={s.this__day_icon}>
              <GlobalSvgSelector id='sun'></GlobalSvgSelector>
            </div>
          </div>
          <div className={s.bottom__block}>
            <div className={s.bottom__block_wrapper}>
              <div className={s.this__time}>
                <p>Время: 21:54</p>
              </div>
              <div className={s.this__city}>
                <p>Город: Москва</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.this__day_info_items}>{
          items.map((item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))
        }</div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  )
}