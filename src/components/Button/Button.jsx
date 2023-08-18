import React from 'react'

import styles from './Button.module.css';

const Button = ({text, icon, outline, type, ...rest}) => {
  return (
    <button className={outline? styles.outline_btn : styles.primary_btn} type={type}
      {...rest}
    >
      {icon} {text}
    </button>
  )
}

export default Button
