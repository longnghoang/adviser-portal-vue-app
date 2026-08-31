import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Button } from '@/components/ui/button';

describe('shadcn-vue Button', () => {
  it('renders correctly with default slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click Me',
      },
    });
    expect(wrapper.text()).toBe('Click Me');
    expect(wrapper.classes()).toContain('inline-flex');
  });

  it('applies variant classes correctly', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'destructive',
      },
      slots: {
        default: 'Delete',
      },
    });
    expect(wrapper.classes()).toContain('text-destructive');
  });
});
