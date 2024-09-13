/* eslint-disable react/no-unescaped-entities */
//import { NavLink } from "react-router-dom";
import k1 from './k1.jpg'
import k2 from './k2.jpg'
import k3 from './k3.jpg'
import b1 from './bottom1.jpeg'
import b2 from './bottom2.jpeg'
import b3 from './bottom3.jpeg'
import b4 from './bottom4.jpeg'

export const About = () => {
  return (
    <>
      <main className="about-us"> {/* Added a new class for About Us section */}
        <section className="section-hero">
          <div className="container grid">
          <div className="hero-images">
              <img src={k1} alt="Image 1" width="33%" height={"350px"} />
              <img src={k2} alt="Image 2" width="33%" height={"350px"}/>
              <img src={k3} alt="Image 3" width="33%" height={"350px"}/>
            </div>
            <div className="hero-content">
              <h2>About Us</h2>

              <p>
                Urseash your design vision with limitless possibilities! Explore
                our curated collection of premium tiles, where you can create
                unique designs using our Al-powered design tool. Shop
                unbeatable prices and get expert guidance, at In one place.
                Let's craft a space you love, together.
              </p>

              <div className="why-choose-us"> {/* Added a new section */}
                <h3>Why Choose Us</h3> {/* Added h3 for Why Choose Us */}
                <ul>
                  <li>
                    Expertise: Our team consists of experienced IT
                    professionals who are passionate about staying up-to-date
                    with the latest industry trends.
                  </li>
                  <li>
                    Customization: Offers high flexibility to tailor the look
                    and feel of your product listings and branding.
                  </li>
                  <li>
                    Customer-Centric Approach: Enables easy navigation and
                    product discovery through an intuitive tile interface.
                  </li>
                  <li>
                    Affordability: Can be cost-effective, especially for
                    smaller businesses, with various pricing models available.
                  </li>
                  <li>
                    Reliability: Should provide a stable platform to ensure
                    smooth operation and minimize downtime for your online
                    store.
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero-images">
              <img src={b1} alt="Image 1" width={"22%"} height={"100px"} />
              <img src={b2} alt="Image 2" width="22%" height={"100px"}/>
              <img src={b3} alt="Image 3" width="22%" height={"100px"}/>
              <img src={b4} alt="Image 3" width="22%" height={"100px"}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
