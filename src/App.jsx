import styles from "./styles";
import {
  Navbar,
  Hero,
  Stats,
  Testimonial,
  Footer,
  Button,
  CardDeal,
  CTA,
  Clients,
  Billing,
  Buisness,
} from "./components/index";
const App = () => (
  <div className="overflow-hidden w-full bg-primary ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart}  bg-primary`}>
      <div className={`${styles.boxWidth} mt-14`}>
        <Hero />
      </div>
    </div>

    <div
      className={` ${styles.flexStart} xl:px-0 sm:px-16 px-6  bg-primary relative`}
    >
      <div className={`${styles.boxWidth} `}>
        <Stats />
        <Buisness />
        <Billing />
        <div className=" flex z-0 ">
          <div className=" w-[1000px] absolute h-[1000px] blue__gradinet rounded-full  left-[90%]    xs:bottom-20   bottom-80   blue__gradient"></div>
        </div>
        <CardDeal />
        <Testimonial />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
