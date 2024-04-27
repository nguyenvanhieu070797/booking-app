import {Alert} from 'react-native';
import {launchImageLibraryAsync, useCameraPermissions, useMediaLibraryPermissions, PermissionStatus, MediaTypeOptions} from 'expo-image-picker';
import PrimaryButton from "./PrimaryButton";

function ImageChoose({title = "take image", style = {}, onTakenImage}) {
    const [cameraPermissionInformation,  requestPermission] = useCameraPermissions();
    const [mediaLibraryPermissions,  requestMediaLibraryPermissions] = useMediaLibraryPermissions();

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

    async function verityMediaLibraryPermissions() {

        if (mediaLibraryPermissions.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestMediaLibraryPermissions();

            return permissionResponse.granted;
        }

        if (mediaLibraryPermissions.status === PermissionStatus.DENIED){
            Alert.alert(
                "Insufficient Permission!",
                "You need to grant media library permissions to use this app."
            );
            return false;
        }

        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verityPermission();
        const hasMediaLibraryPermissions = await verityMediaLibraryPermissions();

        if(!hasPermission || !hasMediaLibraryPermissions) {
            return;
        }

        const image = await launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            mediaTypes: MediaTypeOptions.All,
        });

        if(!image.canceled) {
            onTakenImage(!image.canceled ? image?.assets?.[0].uri || "" : "");
        }
    }

    return <PrimaryButton style={style} onPress={takeImageHandler}>
        {title}
    </PrimaryButton>
}

export default ImageChoose;

