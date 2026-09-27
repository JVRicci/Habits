import { TouchableOpacity, View, Text, TouchableOpacityProps} from "react-native";
import {Feather} from '@expo/vector-icons'
import colors from "tailwindcss/colors";

interface props extends TouchableOpacityProps{
    title: string
    checked?: boolean,
}

export function CheckBox( {title, checked = false, ...rest  } :props){

    

    return(
        <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row mb-2 items-center mt-4"
            {...rest}
        >
            {

            checked ? 
            <View className="h-8 w-8  bg-violet-500 rounded-lg items-center justify-center">
                <Feather
                name="check"
                size={20}
                color={colors.white}
                />
            </View>
            :
            <View className="h-8 w-8 bg-zinc-900 rounded-lg items-center justify-center">
                
            </View>
            
            }

            <Text className="ml-4 text-white text-base font-semibold">
                {title}
            </Text>


        </TouchableOpacity>
    )
}