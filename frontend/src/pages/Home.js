import OnVideoContent from '../components/home/OnVideoContent';
import TopVideo from '../components/home/TopVideo';

function Home() {
 


  return (
    <>
      <TopVideo type="video/mp4" src="/assets/test-video.mp4" />
      <OnVideoContent imgSrc="https://picsum.photos/200/300" title="احمد شیطان صفت"  />
    </>
  );
};

export default Home;