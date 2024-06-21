import {Pressable, SafeAreaView, View, Text, StyleSheet} from "react-native";
import Icons from "../../UI/Icons";
import Colors from "../../../constants/colors";

function OthersItems({data = {}, onPress}) {
    if (data && Object.values(data).length === 0) {
        return ""
    }

    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, ({pressed}) => pressed && styles.pressed]}
        >
            <View style={styles.titleContainer}>
                <Icons {...data.iconTitle}/>
                <Text style={styles.textTitle}>{data.title}</Text>
            </View>
            <View style={styles.actionContainer}>
                <Icons
                    style={styles.iconAction}
                    icon="right"
                    size={16}
                    color={Colors.grey800}
                    type="AntDesign"
                />
            </View>
        </Pressable>
    );
}

export default OthersItems;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 10,
        columnGap: 10,
        alignSelf: 'stretch',
        paddingVertical: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 4,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    textTitle: {
        marginLeft: 10,
        textAlign: 'left',
        fontFamily: 'font-regular',
        fontSize: 17,
        fontWeight: "700",
        color: Colors.darkPrimary,
    },
    iconTitle: {
        alignItems: "flex-start",
        marginRight: 5,
    },
    actionContainer: {
        flex: 1,
        alignItems: "flex-end"
    },
    iconAction: {},

    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75,
    },
});
