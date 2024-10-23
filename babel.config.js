module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true
      }
    ],
    ['module-resolver', {
      alias: {
        '@assets': './src/assets',
        '@styles': './src/styles',
        '@api': './src/api',
        '@components': './src/components',
        '@navigation': './src/navigation',
        '@screens': './src/screens',
      },
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ]
    }]
  ]
};
