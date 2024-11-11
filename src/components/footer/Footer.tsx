import { Link } from 'react-router-dom'
import { Box, List, ListItem, Typography } from '@mui/material'

import { navigationList } from '~/routes/constants/navigationList'
import styles from '~/components/footer/Footer.module.scss'
import logo from '~/assets/Logo.svg'
import palette from '~/styles/app-theme/app.palette'

const Footer = () => {
  return (
    <Box className={styles.wrapper}>
      <Box component='img' alt='Logo' src={logo} className={styles.logo} />
      <List className={styles.itemList}>
        {navigationList.map((item) => (
          <ListItem key={item.name} className={styles.item}>
            <Link to={item.link}>
              <Typography variant='body1'>{item.name}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Typography variant='caption' color={palette.basic.grey}>
        © 2022 All rights reserved
      </Typography>
    </Box>
  )
}

export default Footer
