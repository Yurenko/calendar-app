import { Box, List, ListItem, Typography } from '@mui/material'

import { Link, useLocation } from 'react-router-dom'
import { navigationList } from '~/routes/constants/navigationList'
import logo from '~/assets/Logo.svg'
import styles from '~/components/header/Header.module.scss'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <Box className={styles.wrapper}>
      <Box component='img' alt='Logo' src={logo} className={styles.logo} />
      <List className={styles.itemList}>
        {navigationList.map((item) => (
          <ListItem key={item.name} className={styles.item}>
            <Link
              to={item.link}
              className={
                pathname === item.link
                  ? styles.currentPathName
                  : styles.pathName
              }
            >
              <Typography variant='h3'>{item.name}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Header
