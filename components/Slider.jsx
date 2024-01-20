import { motion, Reorder } from "framer-motion";
import styles from "@styles/tech.module.scss";
import { useState } from "react";

const Slider = ({ children }) => {
  const [items, setItems] = useState([1,2,3,4,5]);

  return (
    <div className>
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default Slider;
