import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './src/products/products.controller';
import { ProductsModule } from './src/products/products.module';


@Module({
  imports: [ProductsModule,

    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class ApplicationModule {}
