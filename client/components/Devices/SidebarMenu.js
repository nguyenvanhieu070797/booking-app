import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Pressable,
} from "react-native";
import Colors from "../../constants/colors";

function SidebarMenu({onPress}) {
    return (
        <View style={{backgroundColor: Colors.blueGrey100,}}>
            <ScrollView
                style={styles.rootContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "flex-start",
                    width: '100%',
                }}
            >
                <View style={styles.container}>
                    <Pressable
                        style={
                            ({pressed}) => [styles.itemContainer, styles.itemContainerActive, pressed && styles.pressed]
                        }
                        onPress={onPress}>
                        <Text style={[styles.buttonText, styles.buttonTextActive]}>
                            Dây sạc laptop
                        </Text>
                    </Pressable>
                    <Pressable
                        style={
                            ({pressed}) => [styles.itemContainer, pressed &&  styles.pressed]
                        }
                        onPress={onPress}>
                        <Text style={[styles.buttonText]}>
                            Phụ kiện laptop
                        </Text>
                    </Pressable>
                    <Pressable
                        style={
                            ({pressed}) => [styles.itemContainer, pressed &&  styles.pressed]
                        }
                        onPress={onPress}>
                        <Text style={[styles.buttonText]}>
                            Thiết bị mạng
                        </Text>
                    </Pressable>

                </View>
            </ScrollView>
        </View>
   )
}

export default SidebarMenu;


const styles = StyleSheet.create({
    rootContainer: {
    },
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    itemContainer: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: Colors.blueGrey100,
    },
    itemContainerActive: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.red500,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.blueGrey200,
    },
    buttonText: {
        flexWrap: 'wrap',
        color: Colors.darkPrimary,
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 13,
    },
    buttonTextActive:{
        color: Colors.red500,
    }
})
