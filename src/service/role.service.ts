import { inject, injectable } from "inversify";
import { RoleRepository } from "../database/repository/role.repository";

@injectable()
export class RoleService {
  private _roleRepository: RoleRepository;
  constructor(@inject(RoleRepository) roleRepository: RoleRepository) {
    this._roleRepository = roleRepository;
  }
  public async createRole(roleData: string) {
    try {
      const roleName = await this._roleRepository.createRole(roleData);
      return roleName;
    } catch (error) {
      console.error("Error creating role:", error);
      throw error;
    }
  }
}
