import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("192.168.137.1:5001")
export default function UpdateCall(){
    const [scores, setScores] = useState({});
    const Panelty = () => {
        setScores({"panelty": 1})
        socket.emit("data", scores)
    }    

    return(
        <>
          <div>
            <label for="arena">Select Arena</label>
                <select name="arena" id="arena">
                    <option value="roborace">RetroFiesta</option>
                    <option value="robopac">RoboPac</option>
                    <option value="ninjaclash">NinjaClash</option>
                </select>
          </div>
            {/* According to the rules add buttons and creat events */}
          <button type="button" onClick={Panelty}>Panelty</button>
          <button type="button" onClick={Panelty}>Checkpoint 1</button>
          <button type="button">Checkpoint 2</button>
          <button type="button">Checkpoint 3</button>


        </>
    )
}