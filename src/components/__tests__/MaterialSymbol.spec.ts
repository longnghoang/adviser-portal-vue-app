import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MaterialSymbol from '../MaterialSymbol.vue';

describe('MaterialSymbol', () => {
  it('renders standard outlined symbol properly', () => {
    const wrapper = mount(MaterialSymbol, {
      props: { name: 'favorite' },
    });
    expect(wrapper.classes()).toContain('material-symbols-outlined');
    expect(wrapper.text()).toBe('favorite');
  });

  it('supports rounded variant and fill prop', () => {
    const wrapper = mount(MaterialSymbol, {
      props: {
        name: 'settings',
        variant: 'rounded',
        fill: true,
        size: 32,
      },
    });
    expect(wrapper.classes()).toContain('material-symbols-rounded');
    expect(wrapper.text()).toBe('settings');
    expect(wrapper.attributes('style')).toContain('font-size: 32px;');
    expect(wrapper.attributes('style')).toContain("'FILL' 1");
  });
});
