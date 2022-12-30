import HttpCall from "./components/HttpCall";
import WebSocketCall from "./components/WebSocketCall";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  useEffect(() => {
    if (buttonStatus === true) {
      const socket = io("192.168.137.1:5001/", {
        transports: ["websocket"],
        cors: {
          origin: "http://192.168.137.1:3000/",
        },
      });

      setSocketInstance(socket);

      socket.on("connect", (data) => {
        console.log(data);
      });

      setLoading(false);

      socket.on("disconnect", (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [buttonStatus]);

  return (
    <div className="App">
      <h1>Score Board</h1>
      <div className="line">
        <HttpCall />
      </div>
      {!buttonStatus ? (
        <button onClick={handleClick}>turn on</button>
      ) : (
        <>
          <button onClick={handleClick}>turn off</button>
          <div className="line">
            {!loading && <WebSocketCall socket={socketInstance} />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
