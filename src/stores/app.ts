import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { AdviserPersona } from '@/types/navigation';

export const DEFAULT_PERSONAS: AdviserPersona[] = [
  {
    id: 'alex-sterling',
    name: 'Alex Sterling',
    role: 'adviser',
    title: 'Senior Adviser',
    initials: 'AS',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 'emma-wilson',
    name: 'Emma Wilson',
    role: 'adviser',
    title: 'Adviser',
    initials: 'EW',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
  },
];

export const useAppStore = defineStore('app', () => {
  // Sidebar state
  const isSidebarCollapsed = ref(false);

  function toggleSidebar() {
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
  }

  // Persona state
  const currentPersona = ref<AdviserPersona>(DEFAULT_PERSONAS[0]);
  const availablePersonas = ref<AdviserPersona[]>(DEFAULT_PERSONAS);

  function switchPersona() {
    const currentIndex = DEFAULT_PERSONAS.findIndex((p) => p.id === currentPersona.value.id);
    const nextIndex = (currentIndex + 1) % DEFAULT_PERSONAS.length;
    currentPersona.value = DEFAULT_PERSONAS[nextIndex];
  }

  function setPersona(personaId: string) {
    const found = DEFAULT_PERSONAS.find((p) => p.id === personaId);
    if (found) {
      currentPersona.value = found;
    }
  }

  return {
    // Sidebar
    isSidebarCollapsed,
    toggleSidebar,
    // Persona
    currentPersona,
    availablePersonas,
    switchPersona,
    setPersona,
  };
});
