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
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={` ${styles.paddingX} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Buisness />
        <Billing />
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
