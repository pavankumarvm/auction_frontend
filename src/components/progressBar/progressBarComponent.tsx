import * as React from "react";
import "./progressBarComponent.css";

type ProgressBarProps = {
  bgcolor: string;
  progress: number;
  height: number;
  textdisplay: string;
};

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const Parentdiv = {
    height: props.height,
    width: "100%",
    backgroundColor: "whitesmoke",
  };

  const Childdiv = {
    height: "100%",
    width: `${props.progress}%`,
    backgroundColor: props.bgcolor,
  };

  const progresstext = {
    padding: "10px",
    color: "black",
    fontWeight: "900",
    display: props.textdisplay,
  };

  return (
    <div className="progressBar" style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${props.progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
