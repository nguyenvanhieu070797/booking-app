import {View, Text} from "react-native";
import SidebarMenu from "../components/Devices/SidebarMenu";
import DevicesListItem from "../components/Devices/DevicesListItem";

function DevicesScreen() {

    return (
        <View>
            <SidebarMenu/>
            <DevicesListItem/>
        </View>
    )
}

export default DevicesScreen;
