import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
    placeAmount: number;
}

export default function App({placeAmount}: AppProps): JSX.Element {
  return (
    <MainScreen placeAmount={placeAmount}/>
  );
}