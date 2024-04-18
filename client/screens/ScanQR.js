import {View, Text} from "react-native"
import IconButton from "../components/UI/IconButton";
import {useEffect} from "react";
import CameraScanQR from "../components/ScanQR/CameraScanQR";
import SnyBarCodeScanner from "../components/ScanQR/SyncBarCodeScanner";

function ScanQR({navigation}) {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: ({tintColor}) => (
                <IconButton
                    icon="arrow-back"
                    type="MaterialIcons"
                    color={tintColor}
                    size={24}
                    style={{
                        borderRadius: 0,
                        padding: 0,
                        marginHorizontal: 0,
                        marginVertical: 0
                    }}
                    onPress={() => {
                        navigation.navigate("MainScreen");
                    }}
                />
            )
        });
    }, [navigation]);


    function onScanHandler() {

    }

    function onCloseHandler() {

    }

    return <View>
        <SnyBarCodeScanner
            onScan={onScanHandler()}
            onClose={onCloseHandler()}
        >
            asd
        </SnyBarCodeScanner>
    </View>
}

export default ScanQR;
