import { View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons"

import {BackButton} from '../components/BackButton'
import {CheckBox} from '../components/CheckBox'
import colors from "tailwindcss/colors";

const avaiableWeekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export function New(){

    //<number[]>([]) Indica que é um vetor de números e que inicia vazio

    const [weekDays, setWeekDays] = useState<number[]>([]);

    // Função responsável pelo funcionamento dos checkbox
    function handleToggleWeekDay(weekDayIndex : number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        }
        else{
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    return (
        <View 
        className="flex-1 bg-background px-8 pt-16"
        >
            <ScrollView
            showsHorizontalScrollIndicator ={false}
            contentContainerStyle={{paddingBottom:90}}
            >

        <BackButton />
        
        <Text className="mt-6 text-white font-extrabold text-3xl">
            Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
            Qual o seu comprometimento?
        </Text>

        <TextInput
        className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white border-2 border-zinc-800  focus:border-violet-400"
        placeholder="Ex: Exercícios, Berber água, etc"
        placeholderTextColor={colors.zinc[500]}
        />

        <Text className="mt-4 text-white font-semibold text-base">
            Qual a recorrência?
        </Text>
        
            {
                avaiableWeekDays.map((value,i) => (
                    <CheckBox
                    key={value} 
                    title={value}
                    checked={weekDays.includes(i)}
                    onPress={()=>handleToggleWeekDay(i)}
                    />

                ))
            }
        
        <TouchableOpacity className="flex-row mt-6 p-4 w-full h-14 rounded-lg bg-green-500 align-items justify-center">
            <Feather 
            name="check"
            size={20}
            color={colors.white}
            />
            <Text className="text-white font-semibold text-base">Confirmar</Text>
        </TouchableOpacity>

        </ScrollView>
        </View>
    )
}