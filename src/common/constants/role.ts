export enum ROLE {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
}

export const roleLabel = {
  [ROLE.ADMIN]: '一般',
  [ROLE.STAFF]: '管理者',
};
