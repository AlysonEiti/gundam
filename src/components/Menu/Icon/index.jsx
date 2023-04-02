import React from 'react'

export default function Icon({icon, styles}) {
  return (
    <li className={styles.menu__item}>
        <img src={icon.path} alt={icon.alt} />
        <a href="/">{icon.link}</a>
    </li>
  )
}
