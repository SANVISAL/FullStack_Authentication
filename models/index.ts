import { sequelize } from "../src/database/sequelize-source";
import { User } from "./user.model";
import { Token } from "./user-token.model";

// Initialize models
User.initialize(sequelize);
Token.initialize(sequelize);

// Export models
export { User, Token };
