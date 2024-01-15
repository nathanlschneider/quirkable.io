import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Python = (props) => {
  const { variants, className,delay } = props;
  const [zindex, setZindex] = useState(0);

  const doLoop = () => {
    setInterval(() => {
      setZindex(prevZindex => (prevZindex === 0 ? 1 : 0));
    }, 4000);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      doLoop();
    }, delay);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Ensure the useEffect runs only once after the initial render

  return (
    <motion.article variants={variants} className={className} style={{ zIndex: zindex }}>
      <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} fill="none" viewBox={"0 0 32 32"} {...props}>
        <path
          fill="url(#a)"
          fillRule="evenodd"
          d="M11.016 0C8.819 0 7.038 1.725 7.038 3.852v2.667h6.885v.74H3.978C1.781 7.26 0 8.984 0 11.111v5.778c0 2.127 1.781 3.852 3.978 3.852h2.295v-3.26c0-2.127 1.781-3.851 3.978-3.851h7.345c1.859 0 3.366-1.46 3.366-3.26V3.852C20.962 1.725 19.181 0 16.984 0h-5.968Zm-.918 4.74c.761 0 1.377-.596 1.377-1.333 0-.736-.616-1.333-1.377-1.333-.76 0-1.377.597-1.377 1.333 0 .737.617 1.334 1.377 1.334Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#b)"
          fillRule="evenodd"
          d="M16.984 28c2.197 0 3.978-1.724 3.978-3.852v-2.666h-6.885v-.741h9.945c2.197 0 3.978-1.725 3.978-3.852V11.11c0-2.127-1.781-3.852-3.978-3.852h-2.295v3.26c0 2.127-1.781 3.851-3.978 3.851h-7.345c-1.859 0-3.366 1.46-3.366 3.26v6.518c0 2.128 1.781 3.852 3.978 3.852h5.968Zm.918-4.74c-.761 0-1.377.596-1.377 1.333 0 .736.616 1.333 1.377 1.333.76 0 1.377-.597 1.377-1.333 0-.737-.617-1.334-1.377-1.334Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient id="a" x1={10.481} x2={10.481} y1={0} y2={20.741} gradientUnits="userSpaceOnUse">
            <stop stopColor="#327EBD" />
            <stop offset={1} stopColor="#1565A7" />
          </linearGradient>
          <linearGradient id="b" x1={17.519} x2={17.519} y1={7.259} y2={28} gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDA4B" />
            <stop offset={1} stopColor="#F9C600" />
          </linearGradient>
        </defs>
      </svg>
    </motion.article>
  );
};
export default Python;
