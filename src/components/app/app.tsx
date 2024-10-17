import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../mock';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favourite-screen/favourite-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PageNotFound from '../../pages/404/404';


type AppProps = {
    placeAmount: number;
}

export default function App({placeAmount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen placeAmount={placeAmount}/>}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route path={AppRoute.Favorites} element={PrivateRoute(AuthStatus.NotAuthenticated, <FavoritesScreen></FavoritesScreen>)}/>
        <Route path={AppRoute.Offer} element={<OfferScreen/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}