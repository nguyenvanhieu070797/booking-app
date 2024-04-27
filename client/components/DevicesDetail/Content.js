import {ScrollView} from "react-native"
import DevicesInformation from "./DevicesInformation";
import DevicesTotal from "./DevicesTotal";
import DevicesSideMenu from "./DevicesSideMenu";

function Content() {


    return <ScrollView>
        <DevicesSideMenu/>
        <DevicesInformation/>
        <DevicesTotal/>
    </ScrollView>
}

export default Content;
