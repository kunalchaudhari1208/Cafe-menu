import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryNav from "./components/CategoryNav";
import Section from "./components/MenuSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCall from "./components/FloatingCall";

import beveragesImg from "./assets/beverages.jpg";
import snacksImg from "./assets/snacks.jpg";
import italianImg from "./assets/italian.jpg";
import southIndianImg from "./assets/southindian.jpg";
import mainCourseImg from "./assets/maincourse.jpg";

const beverages = [
  { name: "Cold Coffee", price: 80 },
  { name: "Hot Chocolate", price: 70 },
  { name: "Oreo Shake", price: 100 }
];

const snacks = [
  { name: "Veg Sandwich", price: 110 },
  { name: "Cheese Burger", price: 140 },
  { name: "Peri Peri Fries", price: 120 }
];

const italian = [
  { name: "White Sauce Pasta", price: 160 },
  { name: "Red Sauce Pasta", price: 150 },
  { name: "Cheese Pizza", price: 180 }
];

const southIndian = [
  { name: "Masala Dosa", price: 90 },
  { name: "Idli Sambar", price: 70 },
  { name: "Uttapam", price: 85 }
];

const mainCourse = [
  { name: "Pav Bhaji", price: 120 },
  { name: "Veg Pulav", price: 140 },
  { name: "Dal Khichdi", price: 110 }
];

function App() {
  return (
    <div className="font-sans text-primary">

      <Header />
      <Hero />
      <CategoryNav />

      <Section
        id="Beverages"
        title="Beverages"
        image={beveragesImg}
        items={beverages}
        index={0}
      />

      <Section
        id="Snacks"
        title="Snacks"
        image={snacksImg}
        items={snacks}
        index={1}
      />

      <Section
        id="Italian"
        title="Italian"
        image={italianImg}
        items={italian}
        index={2}
      />

      <Section
        id="South Indian"
        title="South Indian"
        image={southIndianImg}
        items={southIndian}
        index={3}
      />

      <Section
        id="Main Course"
        title="Main Course"
        image={mainCourseImg}
        items={mainCourse}
        index={4}
      />

      <Contact />
      <Footer />
      <FloatingCall />

    </div>
  );
}

export default App;