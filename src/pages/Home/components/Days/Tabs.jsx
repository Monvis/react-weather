import React from 'react'
import s from './Days.module.scss'

export const Tabs = () => {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На месяц',
    },
    {
      value: 'На 10 дней',
    }
  ]

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map(tab => (
          <div key={tab.value} className={s.tab}>{tab.value}</div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  )
}