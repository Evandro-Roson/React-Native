import { SafeAreaView, StyleSheet, Text } from "react-native"
import styled from "styled-components/native";

const TextNew = styled.Text`
    font-size: 24px;
    color: #00ff8c;
`;

const App = () => {
    return (
        <SafeAreaView>
            <Text style={styles.container}>Testando</Text>
            <TextNew>Novo Teste</TextNew>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'red',
    },
});

export default App;