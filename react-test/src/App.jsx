import './App.css';
import { useState, useEffect } from 'react';

import { Profils } from './profils';
import Form from './components/form';
import SubscribeForm from './components/subscribe-form';

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
      };

      const newIntervalId = setInterval(() => {
        setTimerTime(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    };

    function timerReset() {
        clearInterval(intervalId);
        setIntervalId(0);
        setTimerTime(0);
    };

    function addCount() {
        setCount(count + 1)
    };

    function minusCount() {
        setCount( count - 1)
    };

    function removeProfil(id) {
      setTestData(data => {
        const index = data.findIndex(elem => elem.id === id);

        const before = data.slice(0, index);
        const after = data.slice(index + 1);

        const newData = [...before, ...after];

        return newData
      });
    };

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

        <Form />
        <SubscribeForm />

        <Profils profils={testData} removeProfil={removeProfil}/>
    </div>
  );
};

export default App;
