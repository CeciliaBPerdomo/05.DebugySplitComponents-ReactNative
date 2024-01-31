import { Pressable, StyleSheet, Text, View } from 'react-native'


const ButtonPrimary = ({ title, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "95%",
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 5
    },

    text: {
        fontSize: 16, 
        color: "#872FF5"
    }
})