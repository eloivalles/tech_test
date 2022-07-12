// add flatMap polyfill for node and jest tests
import 'core-js/features/array/flat-map';
// required for tests that involve canvas, with ng2-charts
import 'jest-canvas-mock';
import 'jest-preset-angular/setup-jest';
import './jestGlobalMocks';

// https://github.com/telerik/kendo-angular/issues/1505
// Caused by clicking a MatSelect option via its harness
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop) => '',
  }),
});

// workaround for ng2-chart https://github.com/valor-software/ng2-charts/issues/1352
window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));
