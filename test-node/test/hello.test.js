let request = require('supertest')
let assert = require('assert')
let Koa = require('koa')

describe('测试koa', () => {
  let app1 = new Koa()
  app1.context.msg = 'kaikeba'
  let app2 = new Koa()

  it('可以合并参数', () => {
    app1.use((ctx, next) => {
      assert.equal(ctx.msg, 'kaikeba')
      ctx.body = 'hi' + ctx.msg
      ctx.status = 200
    })
    return request(app1.listen())
      .get('/')
      .expect('hikaikeba')
      .expect(200)
  })
})