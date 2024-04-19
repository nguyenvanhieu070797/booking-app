import OthersItems from "./OthersItems";
import CardTitle from "../../UI/CardTitle";
import Colors from "../../../constants/colors";

function OthersLists() {
    const items = [
        {
            id: 1,
            title: "Thiết bị điện tử",
            iconTitle: {
                size: 24,
                icon: "home",
                color: Colors.blue400,
                type: "Ionicons",
            },
        },
        {
            id: 2,
            title: "Đồ gia dụng",
            iconTitle: {
                size: 24,
                icon: "home",
                color: Colors.blue400,
                type: "Ionicons",
            },
        },
        {
            id: 3,
            title: "Thiết bị khác",
            iconTitle: {
                size: 24,
                icon: "home",
                color: Colors.blue400,
                type: "Ionicons",
            },
        },
    ]

    function onPressItemHandler(item) {
        console.log({item});
    }

    return (
        <CardTitle title="Danh mục">
            {items && items.map(
                item => <OthersItems data={item} key={item.id} onPress={() => onPressItemHandler(item)}/>
            )}
        </CardTitle>
    )
}

export default OthersLists;
