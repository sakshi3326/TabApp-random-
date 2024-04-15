import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Tab from './Tab';
import KeyValueDetail from './KeyValueDetail';
import KeyParagraphDetail from './KeyParagraphDetail';
import TableDetail from './TableDetail';
import ParagraphDetail from './ParagraphDetail';

const MainScreen = ({ data }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(data)[0]);

  const renderTabs = (tabs) => {
    return Object.keys(tabs).map((tabName, index) => {
      if (Array.isArray(tabs[tabName]) || typeof tabs[tabName] === 'string') {
        return (
          <Tab key={index} title={tabName} onPress={() => setActiveTab(tabName)} />
        );
      } else if (typeof tabs[tabName] === 'object') {
        return (
          <Tab key={index} title={tabName} onPress={() => setActiveTab(tabName)} />
        );
      }
    });
  };
  

  const renderDetailContent = (content) => {
    switch (content.type) {
      case 'KEY_VALUE':
        return <KeyValueDetail data={content.data} />;
      case 'PARAGRAPH':
        return <ParagraphDetail data={content.data} />;
      case 'KEY_PARAGRAPH':
        return <KeyParagraphDetail data={content.data} />;
      case 'TABLE':
        return <TableDetail data={content.data} />;
      default:
        return null;
    }
  };

  const renderTabsAndContent = (tabs) => {
    const tabContent = tabs[activeTab];

    if (Array.isArray(tabContent)) {
      return (
        <ScrollView>
          <ScrollView horizontal style={styles.tabContainer}>
            {renderTabs(tabs)}
          </ScrollView>
          {tabContent.map((content, index) => renderDetailContent(content))}
        </ScrollView>
      );
    } else if (typeof tabContent === 'object') {
      return (
        <ScrollView>
          <ScrollView horizontal style={styles.tabContainer}>
            {renderTabs(Object.keys(tabContent))}
          </ScrollView>
          {Object.values(tabContent).map((content, index) => renderDetailContent(content))}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <ScrollView horizontal style={styles.tabContainer}>
            {renderTabs(tabs)}
          </ScrollView>
          <Text>{tabContent}</Text>
        </ScrollView>
      );
    }
  };

  return <>{renderTabsAndContent(data)}</>;
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
  },
});

export default MainScreen;
