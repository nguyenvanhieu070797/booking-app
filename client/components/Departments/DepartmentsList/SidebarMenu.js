import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Pressable,
    Dimensions
} from "react-native";
import Colors from "../../../constants/colors";

function SidebarMenu({onPress, idActive}) {
    const screenWidth = Dimensions.get('window').width;
    const items = [
        {
            title: "CYLLENGE VN",
            locate: "vn",
            id: 0,
        },{
            title: "CYLLENGE TOKYO",
            locate: "jp",
            id: 1,
        },{
            title: "CYLLENGE HOSHIRIMA",
            locate: "jp",
            id: 2,
        },,{
            title: "CYLLENGE HOSHIRIMA",
            locate: "jp",
            id: 3,
        },,{
            title: "CYLLENGE HOSHIRIMA",
            locate: "jp",
            id: 4,
        },
    ];


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
                    {items.length > 0 ?
                        items.map((item, key) => {
                            const isActive = !idActive && key === 0 || item.id === idActive;
                            return <Pressable
                                key={item.id}
                                style={
                                    ({pressed}) => [styles.itemContainer, isActive && styles.itemContainerActive, pressed && styles.pressed]
                                }
                                onPress={() => onPress(item)}>
                                <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                    {item.title}
                                </Text>
                            </Pressable>
                        })
                        : null
                    }
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
        borderBottomWidth: 2,
        borderBottomColor: Colors.grey50,
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
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 13,
        color: Colors.darkPrimary,
    },
    buttonTextActive:{
        color: Colors.red500,
    }
})