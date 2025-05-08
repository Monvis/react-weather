import React from 'react'
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from '../../../../assets/icons/global/globalSvgSelector'

export const ThisDay = () => {
  return (
    <div className={s.this__day}>
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
  )
}
