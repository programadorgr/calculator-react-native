import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Row from './src/components/Row';
import calculator, {initialState} from './src/model/calculator';

// Creamos la clase del componente App
export default class App extends Component {
  state = initialState;

  //Manejmaos el método Tap
  HandleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  // Método Render
  render() {
    return (
      <View style={styles.container}>
        {/* Status */}
        <SafeAreaView>
          <Text style={styles.valueNew}>{this.state.currentTempValue}</Text>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {/* Creamos el component fila */}
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.HandleTap('clear')}
            />

            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.HandleTap('posneg')}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => this.HandleTap('percentage')}
            />

            <Button
              text="/"
              theme="accent"
              onPress={() => this.HandleTap('operator', '/')}
            />
          </Row>

          {/* Número */}
          <Row>
            <Button text="7" onPress={() => this.HandleTap('number', 7)} />
            <Button text="8" onPress={() => this.HandleTap('number', 8)} />
            <Button text="9" onPress={() => this.HandleTap('number', 9)} />
            <Button
              text="*"
              theme="accent"
              onPress={() => this.HandleTap('operator', '*')}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.HandleTap('number', 4)} />
            <Button text="5" onPress={() => this.HandleTap('number', 5)} />
            <Button text="6" onPress={() => this.HandleTap('number', 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.HandleTap('operator', '-')}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap('number', 1)} />
            <Button text="2" onPress={() => this.HandleTap('number', 2)} />
            <Button text="3" onPress={() => this.HandleTap('number', 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.HandleTap('operator', '+')}
            />
          </Row>

          <Row>
            <Button text="0" onPress={() => this.HandleTap('number', 0)} />
            <Button text="." onPress={() => this.HandleTap('number', '.')} />
            <Button
              text="="
              theme="primary"
              onPress={() => this.HandleTap('equal', '=')}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

// Creamos los estilos de la App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#ffffff',
    fontSize: 44,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  valueNew: {
    color: '#DDDDDD',
    fontSize: 22,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  calcCurrent: {
    color: '#ffffff',
    fontSize: 17,
    textAlign: 'right',
    marginRight: 24,
    marginBottom: 20,
  },
});
