import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopLevelTabs from './TopLevelTabs';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Add your common elements here. For example, a header */}
      {/* <Header /> */}
      {children}
      {/* Add your common elements here. For example, a footer */}
      {/* <Footer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Layout;