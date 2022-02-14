import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  buttonPress: {
    height: 85,
    width: 85,
    backgroundColor: "#5e94ff",
    margin: 5,
    borderRadius: 10,
  },
  buttonPressSymbol: {
    height: 85,
    width: 85,
    backgroundColor: "#0055ff",
    margin: 5,
    borderRadius: 10,
  },
  buttonConatiner: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextL: {
    color: "#FFF",
    textAlign: "center",
    lineHeight: 85,
    fontSize: 40,
    fontWeight: "bold",
  },
  screenInput: {
    height: 200,
    width: "95%",
    backgroundColor: "red",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  screenText: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default CalculatorScreen = () => {
  const [result, setResult] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <StatusBar hidden /> */}
      <View style={styles.screenInput}>
        <Text style={styles.screenText}>{result}</Text>
      </View>
      <View style={styles.buttonConatiner}>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(1)}
        >
          <Text style={styles.buttonTextL}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(2)}
        >
          <Text style={styles.buttonTextL}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPressSymbol}
          onPress={() => setResult("-")}
        >
          <Text style={styles.buttonTextL}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPressSymbol}
          onPress={() => setResult("+")}
        >
          <Text style={styles.buttonTextL}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(3)}
        >
          <Text style={styles.buttonTextL}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(4)}
        >
          <Text style={styles.buttonTextL}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPressSymbol}
          onPress={() => setResult("/")}
        >
          <Text style={styles.buttonTextL}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPressSymbol}
          onPress={() => setResult("*")}
        >
          <Text style={styles.buttonTextL}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPress}>
          <Text style={styles.buttonTextL} onPress={() => setResult(5)}>
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(6)}
        >
          <Text style={styles.buttonTextL}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPressSymbol}
          onPress={() => setResult("%")}
        >
          <Text style={styles.buttonTextL}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPressSymbol}
          onPress={() => setResult("=")}
        >
          <Text style={styles.buttonTextL}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(7)}
        >
          <Text style={styles.buttonTextL}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(8)}
        >
          <Text style={styles.buttonTextL}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(9)}
        >
          <Text style={styles.buttonTextL}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => setResult(0)}
        >
          <Text style={styles.buttonTextL}>0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
