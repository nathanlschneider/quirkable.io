import { useEffect, useState } from "react";

const Texter = (props) => {
    const { text } = props;
const textArr = [];
    // const [textArr, setTextArr] = useState([]);
let texts;

    useEffect(()=>{
        [...text].forEach(letter=>texts += letter);
    },[])


  return (
    <div>{texts}</div>
  )
}

export default Texter
