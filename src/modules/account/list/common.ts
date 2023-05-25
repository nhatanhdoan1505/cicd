export const sortColumnListAccount: { [key: string]: string } = {
  loginId: 'LOGIN_ID',
  familyName: 'FAMILY_NAME',
  email: 'EMAIL',
  isActive: 'IS_ACTIVE',
  lastLogin: 'UPDATED_AT',
};

export const accountStatus: {[key: string]: {[key: string]: string}} = {
  active: {
    title: '有効',
    color: '#FC8686'
  },
  deActive: {
    title: '無効',
    color: '#BAB8B8'
  }
};

export const sortDirectionAccount: {[key: string]: string} = {
  ascend: "ASC",
  descend: "DESC"
};