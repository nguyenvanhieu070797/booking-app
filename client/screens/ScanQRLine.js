import {View, Text} from "react-native"
import IconButton from "../components/UI/IconButton";
import {useEffect} from "react";
import CameraScanQRLine from "../components/ScanQRLine/CameraScanQRLine";

function ScanQRLine({navigation}) {

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
        <CameraScanQRLine
            onScan={onScanHandler}
        >
            Quét mã QR Code
        </CameraScanQRLine>
    </View>
}

export default ScanQRLine;
