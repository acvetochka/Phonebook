import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getIsRefreshing } from 'redux/auth/auth-selectors';

export const Layout = () => {
  const isRefreshing = useSelector(getIsRefreshing);
  const { isLoading } = useSelector(getContacts);

  return (
    <>
      {isRefreshing && <Loader/>}
      {isLoading && <Loader/>}
      <AppBar />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
