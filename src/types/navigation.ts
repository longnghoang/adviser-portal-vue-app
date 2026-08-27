import type { Component } from 'vue';

export interface NavItem {
  id: string;
  label: string;
  to: string;
  icon: Component;
  badge?: number | string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface AdviserPersona {
  id: string;
  name: string;
  role: string;
  title: string;
  avatarUrl?: string;
  initials?: string;
}
