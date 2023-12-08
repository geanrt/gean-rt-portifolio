import {useEffect} from "react";
import {useState} from "react";
import {useSelector} from "react-redux";

const Shortly = () => {
  const lang = useSelector((state) => state.lang.selected);
  const content = useSelector((state) => state.content.shortly);

  const [text, setText] = useState({});

  useEffect(() => {
    setText(content[lang || "br"]);
  }, [lang]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      {text?.title}
      <button
        onMouseUp={() => window.history.back()}
        style={{
          border: "none",
          color: "#000",
          backgroundColor: "#00ff95",
          borderRadius: "5px",
          cursor: "pointer",
          width: "140px",
          height: "50px",
        }}
      >
        {text?.button}
      </button>
    </div>
  );
};
export default Shortly;
