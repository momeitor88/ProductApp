import { Box, Container} from '@mui/material';
import {  Outlet } from 'react-router-dom';
import { HeaderLayout } from '../Header/HeaderLayout';

export const Root = ({}) => {
  return (
    <>
      <HeaderLayout />
      <Container maxWidth="sm">
        <Box component="main" sx={{ my: 2 }}>
            <Outlet />
        </Box>
      </Container>
    </>
  );
};
