import NavItem from '../NavItem'
import classNames from 'classnames'
import { cities } from '@/config/cities'

// types
import type { HTMLAttributes } from 'react'

// styles
import styles from './Nav.module.scss'

type NavProps = HTMLAttributes<HTMLDivElement>

const Nav = ({ className, ...props }: NavProps) => {
  return (
    <nav className={classNames(styles.nav, className)} {...props}>
      {Object.keys(cities).map((city) => (
        <NavItem key={city} city={city} />
      ))}
    </nav>
  )
}

export default Nav
