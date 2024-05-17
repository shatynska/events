import { defineConfig } from '@kubb/core';

export default defineConfig({
  root: '.',
  input: {
    path: 'https://shatynska.com/api-json',
  },
  output: {
    path: './src/shared/api/generated',
    clean: true,
  },
  hooks: {
    done: ['prettier --write "**/*.{ts,tsx}"'],
  },
  plugins: [
    ['@kubb/swagger', { output: false, validate: true }],
    [
      '@kubb/swagger-ts',
      {
        output: {
          path: './models',
        },
        group: {
          type: 'tag',
        },
        enumType: 'asPascalConst',
        dateType: 'date',
      },
    ],
    [
      '@kubb/swagger-tanstack-query',
      {
        output: {
          path: './hooks',
        },
        group: { type: 'tag' },
        client: { importPath: '../../../client' },
        framework: 'react',
        suspense: true,
      },
    ],
    [
      '@kubb/swagger-zod',
      {
        output: {
          path: './zod',
        },
        group: { type: 'tag' },
      },
    ],
  ],
});
