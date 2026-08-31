export interface NavItem {
  id: string;
  label: string;
  to: string;
  icon: string;
  badge?: number | string;
}

export interface AdviserPersona {
  id: string;
  name: string;
  role: string;
  title: string;
  avatarUrl?: string;
  initials?: string;
}
