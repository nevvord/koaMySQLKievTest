const Router = require('koa-router')
const router = new Router()

// ===== import books =====
const books = require('../api/books')

router
    .get('/', async ctx => {
        try {
            const result = await books.select()
            ctx.body = result
        } catch (error) {
            console.log('err', error);
            ctx.status = 500
            ctx.body = 'Internal ERROR'
        }
    })
    .post('/add', async ctx => {
        try {
            const result = await books.add(ctx.request.body)
            ctx.body = result
        } catch (error) {
            console.log('err', error);
            ctx.status = 500
            ctx.body = 'Internal ERROR'
        }
    })
    .get('/books/:element/:quantity', async ctx => {
        try {
            console.log('lol');
            
            const result = await books.search(ctx.params.element, ctx.params.quantity)
            ctx.body = result
        } catch (error) {
            console.log('err', error);
            ctx.status = 500
            ctx.body = 'Internal ERROR'
        }
    })
    .get('/book/:element/:filter/:quantity', async ctx => {
        try {
            const result = await books.filter(ctx.params.element, ctx.params.filter, ctx.params.quantity)
            ctx.body = result
        } catch (error) {
            console.log('err', error);
            ctx.status = 500
            ctx.body = 'Internal ERROR'
        }
    })
    .put('/put/:id/:element', async ctx => {
        try {
            const result = await books.put(ctx.params.id, ctx.params.element, ctx.request.body)
            ctx.body = result
        } catch (error) {
            console.log('err', error);
            ctx.status = 500
            ctx.body = 'Internal ERROR'
        }
    })

module.exports = router;