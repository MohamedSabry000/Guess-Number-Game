import { StyleSheet, Text } from "react-native";

const Title = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#0084ca",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#036564",
        borderRadius: 8,
        padding: 8,
        marginVertical: 16,
    },
});

export default Title;