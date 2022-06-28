import './App.css';
import { useState, useEffect } from 'react';

function App() {

    const testPropsData = [
        {id: 101, name: 'Anton'},
        {id: 102, name: 'Viyaleta'},
        {id: 103, name: 'Maksym'},
    ];

    const [testData, setTestData] = useState(testPropsData);

    const [count, setCount] = useState(1);

    const [timerTime, setTimerTime] = useState(() => +localStorage.getItem('timer'));
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        localStorage.setItem('timer', timerTime);
    }, [timerTime]);

    const handleClick = () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        return;
      }
  
      const newIntervalId = setInterval(() => {
        setTimerTime(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    };

    function timerReset() {
        clearInterval(intervalId);
        setIntervalId(0);
        setTimerTime(0);
    }

    function addCount() {
        setCount(count + 1)
    }

    function minusCount() {
        setCount( count - 1)
    }

  return (
    <div className="app">

        <div className='counter'>
            <button className='button neumorphic neumorphic-button'
                onClick={addCount}
            >
                +1</button>
            <button className='button neumorphic neumorphic-button'
            onClick={minusCount}
            >
                -1</button>
            <span className='counter'>{count}</span>
        </div>

        <div className='timer'>
            <h2 className='timer__title'>TIMER</h2>
            <time className='timer__time'>{timerTime}</time>
            <button className='button neumorphic neumorphic-button'
            onClick={handleClick}
            > {intervalId ? 'STOP' : 'START'}</button>

            <button className='button neumorphic neumorphic-button'
            onClick={timerReset}
            >reset</button>
        </div>

        <ul className='test-data'>
            {testData.map(item => (
                <li className='test-data__item' key={item.id}>
                    <h2 className='test-data__name'>{item.name}</h2>
                </li>
            ))}


        </ul>

    </div>
  );
}

export default App;
