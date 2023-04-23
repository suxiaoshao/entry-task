module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@': './src',
          '@mocks': './__mocks__',
          '@tests': './__tests__',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
