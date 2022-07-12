import OnVideoContent from '../components/home/OnVideoContent';
import TopVideo from '../components/home/TopVideo';

function Home() {
 


  return (
    <>
      <TopVideo type="video/mp4" src="/assets/test-video.mp4" />
      <OnVideoContent  />
    </>
  );
};

export default Home;