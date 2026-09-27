import { prisma } from './prisma'

// Responsavel pela instanciação das rotas
import {FastifyInstance} from  'fastify'

//Lib responsavel pela confirmação de informações vindas do request
import { z } from 'zod'

export async function appRoutes(app: FastifyInstance){
    
    app.get('/', async()=>{
        const habits = await prisma.habit.findMany({
            where: {
                title: {
                    startsWith: 'Beber'
                }
            }
        })
        return habits

    })
    app.post('/habit', async(request)=>{

        const createHabitBody = z.object({
            title:z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        })

        const { title, weekDays } = createHabitBody.parse(request.body)
        await prisma.habit.create({
            data:{
                title,
                created_at: new Date(),
                weekDays: {

                }

            }
        })
        
        
        }

        
    )
}

