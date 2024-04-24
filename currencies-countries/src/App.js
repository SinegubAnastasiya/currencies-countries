import style from './style.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [curr, setCurr] = useState([])
  const [activeCurr, setActiveCurr] = useState('Select Occupation')
  const [flag, setFlag] = useState(true)

  const getCurr = async () => {
    const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies')

    setCurr(response.data)
  }

  const getActiveCurr = (e) => {
    setActiveCurr(e.target.textContent)
    setFlag(!flag)
  }

  const getList = () => {
    setFlag(!flag)
  }
  
  useEffect(() => {
    getCurr()
  }, [])

  const result = curr.map(el => <p onClick={getActiveCurr}>{el.Cur_Name}</p>)

  return (
    <div className={style.wrapper}>
      <p>{activeCurr}</p>
      <div onClick={getList} className={style.img}>{!flag ? <div className={style.list}>{result}</div> : null}</div>
    </div>
  );
}

export default App;
