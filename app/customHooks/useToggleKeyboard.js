import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

const UseToggleKeyboard = () => {
  const [showKeyboard, setShowKeyboard] = useState({});
  const handleShowKeyboard = () => setShowKeyboard({ display: "none" });
  const handleHideKeyboard = () => setShowKeyboard({});

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleShowKeyboard);
    Keyboard.addListener("keyboardDidHide", handleHideKeyboard);

    // cleanup function
    return () => {
      Keyboard.addListener("keyboardDidShow", handleShowKeyboard);
      Keyboard.addListener("keyboardDidHide", handleHideKeyboard);
    };
  }, []);

  return { showKeyboard, setShowKeyboard };
};

export default UseToggleKeyboard;
