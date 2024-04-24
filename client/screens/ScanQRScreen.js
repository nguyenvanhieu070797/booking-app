import {View, Text} from "react-native"
import IconButton from "../components/UI/IconButton";
import {useEffect} from "react";
import SyncBarCodeScanner from "../components/ScanQR/SyncBarCodeScanner";

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
        <SyncBarCodeScanner
            onScan={onScanHandler}
        >
            Quét mã QR Code
        </SyncBarCodeScanner>
    </View>
}

export default ScanQRScreen;
