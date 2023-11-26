import React, { Fragment } from "react";
import './Counter.css'

const Counter = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
            <div className="clock flex justify-center items-center bg-slate-500 h-[100px] w-[400px] text-white shadow-sm rounded-md border">
                <section className="col-auto justify-center items-center p-4">
                    <p className="text-xl">{timerDays}</p>
                    <small className="">Days</small>
                    
                </section>
                <span>:</span>
                <section className="col-auto justify-center items-center p-4">
                    <p className="text-xl">{timerHours}</p>
                    <small>Hours</small>
                </section>
                <span>:</span>
                <section className="col-auto justify-center items-center p-4">
                    <p className="text-xl">{timerMinutes}</p>
                    <small>Minutes</small>
                </section>
                <span>:</span>
                <section className="col-auto justify-center items-center p-4">
                    <p className="text-xl">{timerSeconds}</p>
                    <small>Seconds</small>
                </section>
                
            </div>
        </section>
      </section>
    </Fragment>
  );
};

Counter.defaultProps={
    timerDays:10,
    timerHours:10,
    timerMinutes:10,
    timerSeconds:10
}

export default Counter;
