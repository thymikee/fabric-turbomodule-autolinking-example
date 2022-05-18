module.exports = {
  dependencies: {
    // RNScreens have their own linking setup, disable
    'react-native-screens': {
      platforms: {
        android: {
          libraryName: null,
          componentDescriptors: null,
          androidMkPath: null,
        },
      },
    },
    // RNSaveAreaContext have their own linking setup, disable
    'react-native-safe-area-context': {
      platforms: {
        android: {
          libraryName: null,
          componentDescriptors: null,
          androidMkPath: null,
        },
      },
    },
    // RNPagerView doesn't support new arch yet, disable
    'react-native-pager-view': {
      platforms: {
        android: {
          libraryName: null,
          componentDescriptors: null,
          androidMkPath: null,
        },
      },
    },
  },
};
