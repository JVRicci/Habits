import dayjs from 'dayjs';

export function generateDatesFromYearBeginning(){
    //Função responsavel por pegar todos os dias do ano até então
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()
    const dates = []
    let compareDate = firstDayOfTheYear

    while (compareDate.isBefore(today)){
        dates.push(compareDate.toDate());
        compareDate = compareDate.add(1,'day')
    }

    return dates
}