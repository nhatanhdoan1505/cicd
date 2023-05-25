export interface subMenu {
  title: string;
  path: string;
  icon?: string;
  iconActive?: string;
}
export default interface ISideBar {
  title: string;
  path: string;
  icon?: string;
  iconActive?: string;
  childs?: any;
  subItem?: subMenu[];
}
