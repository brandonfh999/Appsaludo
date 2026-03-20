import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleGreet = () => {
    if (name.trim()) {
      setGreeting(`¡Hola ${name.trim()}! Bienvenido a AppSaludo.`);
    } else {
      setGreeting("Por favor, ingresa tu nombre.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Aplicación de Saludo</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />
      <Button title="Enviar saludo" onPress={handleGreet} />
      <Text style={styles.result}>{greeting}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
