import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'

import { useAppDispatch, useAppSelector } from '~/hooks/use-redux'
import Loader from '~/components/loader/Loader'
import { setLoading } from '~/redux/app/appSlice'
import { selectAppSlice } from '~/redux/app/appSelectors'
import MainLoader from '~/components/loader/MainLoader'

import styles from '~/containers/layout/app-main/AppMain.module.css'

const AppMain = () => {
  const loader = useAppSelector(selectAppSlice)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 500)
  }, [])

  if (loader.loading) {
    return <MainLoader />
  }

  return (
    <Box className={styles.root}>
      <Suspense fallback={<Loader size={70} />}>
        <Outlet />
      </Suspense>
    </Box>
  )
}

export default AppMain
