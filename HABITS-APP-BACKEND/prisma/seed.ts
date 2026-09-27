import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const firstHabitid = '0730ffac-acd039-4194-9571-01aa2aa0efbd'
const firstHabitCreationDate = new Date('2022-12-31T03:00:00.000')

const secondHabitid = '00880d75-a933-4fef-94ab-e05744435297'
const secondHabitCreationDate = new Date('2023-01-03T03:00:00.000')

const thirdHabitid = 'fala1bcf-3d87-4626-8c0d-d7fd1255ac08'
const thirdHabitCreationDate = new Date('2023-01-08T03:00:00.000')

async function main() {
    
    await prisma.habit.deleteMany()
    await prisma.day.deleteMany()

    // Criar Habitos

    // await Promise.all([
    //     prisma.habit.create({
    //         data:{
    //             id: firstHabitid,
    //             title:'Beber 2L Água',
    //             created_at: firstHabitCreationDate,
                
                
                
    //         },
            
    //     })
    // ])

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })