import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'
import {fileURLToPath} from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const caminhoDist = path.join(__dirname, "../front-end/dist")

const App = express()
const prisma = new PrismaClient()

App.use(express.json())
App.use(cors())
App.use(express.static(caminhoDist))


App.get("/api/produto", async (req, res) =>{
    const produtos = await prisma.produto.findMany()
    res.json(produtos)
})
 

App.post("/api/pedido", async (req, res) =>{
    const { valorTotal, itensVendas } =req.body
    const novoPedido = await prisma.pedido.create({
        data: {
            valorTotal,
            itensVendas: JSON.stringify(itensVendas),   
        }
    })
    res.json(novoPedido) 
})

App.post("/api/produto", async (req, res) =>{
    const {
        titulo,
        preco,
        precoDesconto, 
        precoParcelar,
        carateristicas,
        imagens,
        estoque,
        freteGratis,
        full,} =req.body
    const novoProduto = await prisma.produto.create({
        data: {
            titulo,
            preco,
            precoDesconto, 
            precoParcelar,
            carateristicas: JSON.stringify(carateristicas),
            imagens: JSON.stringify(imagens),
            estoque,
            freteGratis,
            full,
        }
    })
 
    res.json(novoProduto)
})

App.get("/api/produto/:id", async (req, res) =>{
    const {id} = req.params
    const produto = await prisma.produto.findUnique({
        where: { id: Number(id) },
    })
    res.json(produto)
})
 
App.delete("/api/produto/:id", async (req, res) =>{
    const {id} = req.params
    const produtoDeletar = await prisma.produto.delete({
        where: { id: Number(id) },
    })
    res.json(produtoDeletar)
})

App.get((req, res)=>{
    res.sendFile(path.join(caminhoDist, "index.html"))
})

App.listen(4000, () =>{ 
    console.log('O servido está rodando na porta http://localhost:4000')
})
