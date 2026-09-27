import {View,  Image} from "react-native"
import  Logo  from "../assets/Logo"

export function Loading (){
    return(
        <View className="flex-1 bg-background justify-center items-center ">
            
               <Logo />
        </View>
    )
}
// style={{flex:1, justifyContent: 'center', alignItems:'center', backgroundColor:'#09090A'}}