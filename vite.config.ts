import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'bitcoin-wallet-sdk',
      fileName: (format) => `bitcoin-wallet-sdk.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['bip39', 'bitcoinjs-lib', 'tiny-secp256k1'],
      output: {
        globals: {
          bip39: 'bip39',
          'bitcoinjs-lib': 'bitcoinjsLib',
          'tiny-secp256k1': 'tinySecp256k1',
        },
      },
    },
  },
});
