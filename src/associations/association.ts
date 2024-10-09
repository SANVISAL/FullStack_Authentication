import { User } from "../../models/user.model";
import { Token } from "../../models/user-token.model";
import { Role } from "../../models";

// Define associations
User.associate();
Token.associate();
Role.associate();
