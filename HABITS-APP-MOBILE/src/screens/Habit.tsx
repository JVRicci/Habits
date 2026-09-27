import { View, ScrollView, Text} from "react-native";
import { useRoute } from "@react-navigation/native";

import dayjs from "dayjs";

import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/CheckBox";

interface params{
    date:string
}


export function Habit(){
    const route = useRoute();
    const {date} = route.params as params

    //captura a data atual
    const parsedDate = dayjs(date)

    //formata a data atual em dia da semana
    const dayOfWeek = parsedDate.format('dddd');

    //formata em mês e dia
    const dayAndMounth = parsedDate.format('DD/MM')


    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:100}}>
                <BackButton />

            <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
                {dayOfWeek}
            </Text>

            <Text className="text-white font-extrabold text-3xl">
                {dayAndMounth}
            </Text>

            <ProgressBar progress={30} />

            <View className="mt-6">
                <CheckBox title="20 Flexões" checked={false}/>
                <CheckBox title="Beber 40 litros de Água" checked={false}/>
            </View>

            </ScrollView>
        </View>
    )
}