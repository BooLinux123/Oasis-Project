import { useState } from "react";
import Paragraph from "../components/Paragraph"

export function Counter(){
    const [counter,setUpdater] = useState<number>(0);
    return (
        <div>
            <Paragraph count={counter}/>
            <button
            onClick = { () =>
                setUpdater(counter + 1)
            }
            >Click to increment the counter!</button>
            <button
            onClick = { () =>
                setUpdater(counter - 1)
            }
            >Click to increment the counter!</button>
        </div>
    );
}

export default Counter