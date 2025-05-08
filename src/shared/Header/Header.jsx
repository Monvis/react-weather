import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/globalSvgSelector'
import Select from 'react-select'
import s from './Header.module.scss'

export const Header = () => {
  const options = [
      { value: 'city-1', label: 'Москва' },
      { value: 'city-2', label: 'Санкт-Петербург' },
      { value: 'city-3', label: 'Тула' }
  ]

  const colourStyles = {
    control: styles => ({
      ...styles,
      width: '194px',
      height: '37px',
      color: '#FFF',
      backgroundColor: '#4F4F4F',
      border: 'none',
      borderRadius: '10px',

    })
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className={s.title}>
          <h1>React weather</h1>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id='change-theme' />
        </div>
        <Select className={s.select} options={options} defaultValue={options[0]} styles={colourStyles} />
      </div>
    </header>
  )
}