import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import App from '@/App.vue';

describe('App', () => {
  it('mounts', () => {
    const sut = shallowMount(App, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    expect(sut.exists()).toBe(true);
  });
});
