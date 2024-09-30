import { Container } from "inversify";
import { UserController } from "../controller/user.controller";
import UserRepository from "../database/repository/user.repository";
import { UserService } from "../service/user.service";
import { TokenRepository } from "../../src/database/repository/token.repository";

const container = new Container();
container.bind<UserRepository>(UserRepository).toSelf();
container.bind<UserService>(UserService).toSelf();
container.bind<UserController>(UserController).toSelf();

container.bind<TokenRepository>(TokenRepository).toSelf();

export { container };
