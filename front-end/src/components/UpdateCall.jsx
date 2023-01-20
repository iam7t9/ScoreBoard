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
        <div className="">
          <div>
            <label for="arena">Select Arena</label>
                <select name="arena" id="arena">
                    <option value="roborace">RetroFiesta</option>
                    <option value="robopac">RoboPac</option>
                    <option value="ninjaclash">NinjaClash</option>
                </select>
          </div>
            {/* According to the rules add buttons and creat events */}
            <div onClick={Panelty} class="border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Panelty
        </div>
        <div class="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
          Checkpoint 1
        </div>
          <button type="button">Helo 2</button>
          <button type="button">Checkpoint 3</button>
        </div>

        </>
    )
}