module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "~": "./src"
          },
          sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
        },
      ],
    ],
  };
};
