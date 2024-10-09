import { sequelize } from "../src/database/sequelize-source";
import { User } from "./user.model";
import { Token } from "./user-token.model";
import { Role } from "./role.model";

// Initialize models
Role.initialize(sequelize);
User.initialize(sequelize);
Token.initialize(sequelize);

// Export models
export { User, Token, Role };
