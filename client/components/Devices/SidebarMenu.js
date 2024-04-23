import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Pressable,
    Dimensions
} from "react-native";
import Colors from "../../constants/colors";

function SidebarMenu({onPress}) {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={ [styles.viewContainer]}>
            <ScrollView
                style={[styles.rootContainer, {width: screenWidth}]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                snapToInterval={screenWidth}
                decelerationRate={"fast"}
                contentContainerStyle={{flexGrow: 1}}
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
                            Phụ kiện laptop
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
                            Phụ kiện laptop
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
   )
}

export default SidebarMenu;


const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: Colors.grey50,
        justifyContent:'stretch',
    },
    rootContainer: {
        width: "100%",
    },
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        width: "100%",
    },
    itemContainer: {
        flex: 1,
        flexGrow: 1,
        flexBasis: 0,
        flexShrink: 0,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor:  Colors.grey50,
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
