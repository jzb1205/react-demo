const Koa = require('koa')
const app = new Koa()

app.use(async ctx=>{
    ctx.body = '31651651fdsaf'
})

app.listen(1111,()=>{
    console.log('服务已启动')
})