import './Home.css';
import kitchen from './kitchen.jpeg'
import livingroom from './livingroom.jpeg'
import bathroom from './bathroom.jpeg'
import bedroom from './bedroom.jpeg'

export const Home = () => {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-images">
              <img src={kitchen} alt="Kitchen" />
              <img src={bathroom} alt="Bathroom" />
              <img src={livingroom} alt="Living Room" />
            </div>
          </div>
        </section>

        <section className="create-environment-section">
          <h1>CREATE YOUR OWN ENVIRONMENT</h1>
          <div className="environment-icons">
            <div className="icon">
              <img src={livingroom} alt="Drawing Room" />
              <p>Drawing Room</p>
            </div>
            <div className="icon">
              <img src={bathroom} alt="Bathroom" />
              <p>Bathroom</p>
            </div>
            <div className="icon">
              <img src={bedroom} alt="Bedroom" />
              <p>Bedroom</p>
            </div>
            <div className="icon">
              <img src={kitchen} alt="Kitchen" />
              <p>Kitchen</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
