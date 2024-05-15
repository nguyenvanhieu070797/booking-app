import {View} from "react-native"
import IconButton from "../components/UI/IconButton";
import {useEffect} from "react";
import CameraScanQR from "../components/ScanQR/CameraScanQR";

function ScanQRScreen({navigation}) {

    useEffect(() => {
        navigation.setOptions({
            gestureEnabled: false,
            headerLeft: ({tintColor}) => (
                <IconButton
                    icon="chevron-back-outline"
                    color={tintColor}
                    size={24}
                    style={{
                        borderRadius: 5,
                        padding: 10,
                        marginHorizontal: 0,
                        marginVertical: 0,
                    }}
                    onPress={() => {
                        navigation.replace("MainScreen");
                    }}
                />
            )
        });
    }, [navigation]);

    function onScanHandler(data) {
        console.log({data});
    }

    return <View>
        <CameraScanQR
            onScan={onScanHandler}
        >
            Quét mã QR Code
        </CameraScanQR>
    </View>
}

export default ScanQRScreen;
