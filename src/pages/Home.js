import ConnectionsList from '../components/ConnList/ConnectionsList';
import MyGroups from '../components/MyGroups/MyGroups';
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner';

const Home = () => {
  return (
    <>
        <WelcomeBanner />
        <div className='mt-4'>
            <ConnectionsList />
        </div>
        <div className='mt-4'>
            <MyGroups />
        </div>
    </>
  );
}

export default Home;