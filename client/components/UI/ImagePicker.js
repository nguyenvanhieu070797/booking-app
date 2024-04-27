import {Alert, View} from 'react-native';
import {launchCameraAsync, useCameraPermissions, PermissionStatus, MediaTypeOptions} from 'expo-image-picker';
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker({title = "take image", style = {}, onTakenImage}) {
    const [cameraPermissionInformation,  requestPermission] = useCameraPermissions();

    async function verityPermission() {

        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                "Insufficient Permission!",
                "You need to grant camera permissions to use this app."
            );
            return false;
        }

        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verityPermission();

        if(!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            mediaTypes: MediaTypeOptions.All,
        });

        if(!image.canceled) {
            onTakenImage(!image.canceled ? image?.assets?.[0].uri || "" : "");
        }
    }

    return <View style={style}>
        <OutlinedButton icon="camera" onPress={takeImageHandler}>
            {title}
        </OutlinedButton>
    </View>
}

export default ImagePicker;

