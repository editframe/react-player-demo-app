import "./App.css";
import { Player } from "@editframe/react";
import { useState } from "react";

function App() {
  const [playerState, setPlayerState] =  useState<"stopped" | "playing" | "paused">("playing"); // you can use this to control the player
  const [seek, setSeek] = useState(0); // you can use this to seek the player
  const config = {
    backgroundColor: "#000000FF",
    dimensions: {
      height: 1080,
      width: 1920,
    },
    duration: 10,
    metadata: {},
    layers: [],
  }; // this is the config for the player to render the video 
  return (
    <div className="App">
      <div style={{ height: "100vh", width: "100vw" }}>
        <Player
          config={config}
          style={{
            height: "100%",
            width: "100%",
          }}
          applicationId="demo"
          loop={false}
          playerState={playerState}
          seek={seek}
        />
      </div>
    </div>
  );
}
export default App;
