import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

// Método HTTP: get (solicita a info, busca), post (criação de algo), put (atualizar ou editar um recurso completo), patch (atualizar ou editar uma info específica de um recurso), delete
app.get('/', () => {
    return "Hello World"
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log('HTTP Server Running!')
})