import React from 'react'

export default function Cards({itens, styles}) {
  return (
    <ul className={styles.gallery__cards}> 
      {
        itens.map((item) => {
          return ( 
            <li key={item.id} className={styles.gallery__card}>
              <img 
                  className={styles.gallery__image} 
                  src={item.image} 
                  alt={item.title} 
              />
              <p className={styles.gallery__description}>{item.title}</p>
              <div>
                  <p>{item.tag}</p>
                  <span>
                      <img src="/assets/image/icons/favorite.png" alt="Favorite icon" />
                      <img src="/assets/image/icons/open.png" alt="Open modal icon" />
                  </span>
              </div>
            </li>
          )
        })
      }      
    </ul>
  )
}
