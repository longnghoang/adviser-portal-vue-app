<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  variant?: 'outlined' | 'rounded' | 'sharp';
  fill?: boolean;
  size?: number | string;
  weight?: number | string;
  grade?: number | string;
  opticalSize?: number | string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'outlined',
  fill: false,
  size: 24,
  weight: 400,
  grade: 0,
  opticalSize: 24,
  class: '',
});

const variantClass = computed(() => `material-symbols-${props.variant}`);

const style = computed(() => ({
  fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
  fontVariationSettings: `'FILL' ${props.fill ? 1 : 0}, 'wght' ${props.weight}, 'GRAD' ${props.grade}, 'opsz' ${props.opticalSize}`,
}));
</script>

<template>
  <span :class="[variantClass, props.class]" :style="style" aria-hidden="true">
    {{ name }}
  </span>
</template>
