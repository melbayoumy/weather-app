import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

// styles
import styles from './NavItem.module.scss'

type NavItemProps = {
  city: string
}

const NavItem = ({ city }: NavItemProps) => {
  return (
    <NavLink
      key={city}
      className={({ isActive }) =>
        classNames(styles.link, {
          [styles.active]: isActive,
        })
      }
      to={`/${city}`}>
      {city}
    </NavLink>
  )
}

export default NavItem
export type { NavItemProps }
