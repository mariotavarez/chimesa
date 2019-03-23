interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Chimesa',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Perfiles'
  },
  {
    name: 'Perfiles',
    url: '/perfiles',
    icon: 'icon-drop'
  },
  {
    title: true,
    name: 'Sucursales'
  },
  {
    name: 'Sucursales',
    url: '/sucursales',
    icon: 'icon-drop'
  },
  {
    title: true,
    name: 'Empleados'
  },
  {
    name: 'Empleados',
    url: '/empleados',
    icon: 'icon-drop'
  },
  {
    title: true,
    name: 'Conceptos'
  },
  {
    name: 'Conceptos',
    url: '/conceptos',
    icon: 'icon-drop'
  },
];
