type Role = {
  SUPER_ADMINISTRATOR: "SUPER_ADMINISTRATOR";
  ADMINISTRATOR: "ADMINISTRATOR";
  VENDOR: "VENDOR";
  CUSTOMER: "CUSTOMER";
};

type RoleKey = keyof Role;

export interface IJwtPayload {
  sub: number;
  exp: number;
  iat: number;
  email: string;
  roles: RoleKey[];
  /** redis key */
  key?: string;
}
