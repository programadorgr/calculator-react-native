import {StyleSheet, View} from 'react-native';

const Row = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

// Creamos los estilos de la fila
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default Row;
