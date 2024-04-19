import {View, Text} from "react-native"
import IconButton from "../components/UI/IconButton";
import {useEffect} from "react";
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

    function onScanHandler(data) {
        console.log({data});
    }

    return <View>
        <SnyBarCodeScanner
            onScan={onScanHandler}
        >
            Quét mã QR Code
        </SnyBarCodeScanner>
    </View>
}

export default ScanQR;
