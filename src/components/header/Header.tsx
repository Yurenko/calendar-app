import { Box, List, ListItem, Typography } from '@mui/material'

import styles from '~/components/header/Header.module.css'
import logo from '~/assets/Logo.svg'

const itemList = [
  { name: 'Main', link: '' },
  { name: 'Events', link: '' },
  { name: 'Calendar', link: '' },
  { name: 'FAQ', link: '' }
]

const Header = () => {
  return (
    <Box className={styles.wrapper}>
      <Box component='img' alt='Logo' src={logo} className={styles.logo} />
      <List className={styles.itemList}>
        {itemList.map((item) => (
          <ListItem key={item.name} className={styles.item}>
            <Typography variant='h3'>{item.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Header
