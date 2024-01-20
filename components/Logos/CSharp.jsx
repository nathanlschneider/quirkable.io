import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const CSharp = (props) => {
  const { variants, className, delay } = props;
  const [zindex, setZindex] = useState(0);

  const doLoop = () => {
    setInterval(() => {
      setZindex(prevZindex => (prevZindex === 0 ? 100 : 0));
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
      fill="#7F3A86"
      d="M23.695 21c.188-.338.305-.72.305-1.061V8.06c0-.342-.117-.723-.305-1.06L12 14l11.695 7Z"
    />
    <path
      fill="#662579"
      d="m13.039 27.743 9.922-5.938c.286-.171.545-.467.734-.805L12 14 .305 21c.189.338.449.634.734.805l9.922 5.938c.571.343 1.507.343 2.078 0Z"
    />
    <path
      fill="#9A5196"
      d="M23.695 7c-.189-.338-.448-.634-.734-.805L13.039.257c-.571-.343-1.507-.343-2.078 0L1.039 6.195C.468 6.537 0 7.377 0 8.061V19.94c0 .342.117.723.305 1.061L12 14l11.695-7Z"
    />
    <path
      fill="#fff"
      d="M12.039 22C7.606 22 4 18.411 4 14s3.606-8 8.039-8a8.076 8.076 0 0 1 6.88 3.862l-3.442 2.065A4.042 4.042 0 0 0 12.039 10c-2.217 0-4.02 1.794-4.02 4s1.803 4 4.02 4a4.042 4.042 0 0 0 3.432-1.917l3.45 2.053A8.077 8.077 0 0 1 12.039 22Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M21 11v.997h-2V11h-1v.997h-1V13h1v1.995h-1V16h1v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1.003h-1V11h-1Zm0 4v-2h-2v1.995L21 15Z"
      clipRule="evenodd"
    />
  </svg>
    </motion.article>
  );
};
export default CSharp;
