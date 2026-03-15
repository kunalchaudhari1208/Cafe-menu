import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Section from "../components/MenuSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingCall from "../components/FloatingCall";

import beverages from "../assets/beverages.jpg";
import snacks from "../assets/snacks.jpg";
import italian from "../assets/italian.jpg";
import maincourse from "../assets/maincourse.jpg";
import southindian from "../assets/southindian.jpg";
import { motion } from "framer-motion";




const beveragesItems = [
  { name: "Cold Coffee", price: 80 },
  { name: "Cappuccino", price: 90 },
  { name: "Hot Chocolate", price: 70 },
];

const snacksItems = [
  { name: "Veg Sandwich", price: 110 },
  { name: "Grill Sandwich", price: 120 },
  { name: "Cheese Burger", price: 140 },
];

const italianItems = [
  { name: "Red Sauce Pasta", price: 180 },
  { name: "White Sauce Pasta", price: 190 },
];

const maincourseItems = [
  { name: "Pav Bhaji", price: 130 },
  { name: "Butter Pav Bhaji", price: 150 },
];

const southindianItems = [
  { name: "Masala Dosa", price: 120 },
  { name: "Idli Sambhar", price: 90 },
];

const MenuPage = () => {
  return (
    
    <>
    <motion.div
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.6 }}
></motion.div>
      <Header />

      <CategoryNav />

      <Section
  id="Beverages"
  title="Beverages"
  image={beverages}
  items={beveragesItems}
  index={0}
/>

<Section
  id="Snacks"
  title="Snacks"
  image={snacks}
  items={snacksItems}
  index={1}
/>

<Section
  id="Italian"
  title="Italian"
  image={italian}
  items={italianItems}
  index={2}
/>

<Section
  id="SouthIndian"
  title="South Indian"
  image={southindian}
  items={southindianItems}
  index={3}
/>

<Section
  id="MainCourse"
  title="Main Course"
  image={maincourse}
  items={maincourseItems}
  index={4}
/>
      <Contact />

      <Footer />

      <FloatingCall />
    </>
  );
};

export default MenuPage;