import { Controller, Get, Query } from "@nestjs/common";

// nestjs
// loopback
// decorator: class, method, param
// middleware, interceptor

@Controller()
export class AppController {

  // /api?data=Quoc
  @Get()
  sayHello(
    @Query() data
  ) {
    return {
      message: "Hello World"
    }
  }
}