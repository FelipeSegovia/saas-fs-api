import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { configValidationSchema } from "./common/environment.validation";

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
