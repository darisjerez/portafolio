import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService{
    getHello(): {name: string}{
        return {name: "Hello World, backend is running successfully"};
    }
}