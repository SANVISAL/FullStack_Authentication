// import { Container } from "inversify";
// import UserRepository from "./database/repository/user.repository";
// import { UserService } from "./service/user.service";
// import { UserControler } from "./controller/user.controller";
// import container from "./utils/inversify";
// import { dependenciesId } from "./constants";
// import { sequelize } from "./database/sequelize-source";

// // // Bindings using string identifiers
// // export default () => {
// //   container.bind<UserRepository>("UserRepository").to(UserRepository);
// //   container.bind<UserService>(dependenciesId.userService).to(UserService);
// //   container
// //     .bind<UserControler>(dependenciesId.userController)
// //     .to(UserControler);
// // };
// // Initialize and bind User model
// const userModel = initializeUserModel(sequelize);
// container.bind<typeof User>('UserModel').toConstantValue(userModel);

// // Bind repository and service
// container.bind(UserRepository).toSelf();
// container.bind(UserService).toSelf();

// export default container;