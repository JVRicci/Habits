import Fastify from "fastify";
import cors from '@fastify/cors'
const app = Fastify()
import { appRoutes } from "./lib/routes";

app.register(cors) //registra quais rotaspodem acessar a api Ex: origin:'http://localhost:3000'
app.register(appRoutes)

app.listen(
    {
        port:3333
    }
).then(()=>{
    console.log('SERVER RODANDO')
})