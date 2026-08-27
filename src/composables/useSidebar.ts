import { ref } from 'vue';

const isCollapsed = ref(false);

export function useSidebar() {
  function toggleCollapsed() {
    isCollapsed.value = !isCollapsed.value;
  }

  function setCollapsed(value: boolean) {
    isCollapsed.value = value;
  }

  return {
    isCollapsed,
    toggleCollapsed,
    setCollapsed,
  };
}
