import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";


function Feedback() {

    const [count, setCount] = useState(0);

    const Like = () => {
        setCount((prevValue) => {
            return prevValue + 1;
        });
    }

        const Dislike = () => {
            setCount((prevValue) => {
                return prevValue - 1;
            });
        }

        const Reset  = () => {
            setCount(0);
        }   


  return (
    
    <div className="feedback_wrapper">
        <p className="count">{count}</p>
        <div className="button_control">
            <Button name="Like" onClick={Like} />
        </div>

        <div className="button_control">
            <Button name="Dislike" onClick={Dislike} />
        </div>

        <div className="button_control">
            <Button name="Reset Results" onClick={Reset } />
        </div>
    </div>
  );
}

export default Feedback;