import { AppBar, Link, Toolbar } from '@mui/material'

export const HeaderLayout = () => {
  return (
    <AppBar position="static">
    <Toolbar>
        <Link href="/home" color="inherit" sx={{ mx: 2 }}>
          Home
        </Link>
      </Toolbar>
    </AppBar>
  )
}
