import React, { useCallback } from 'react';
import { View, Button, ListRenderItemInfo, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from 'modules/dummyModule/actions';
import { ApplicationState } from 'utils/root.reducer';
import { ActionLoggerActionTypes } from 'modules/actionLogger/actionLogger.actions';

const HomeScreen = () => {
  const dispatchedActions = useSelector(
    ({ actionLogger }: ApplicationState) => actionLogger.dispatchedActions,
  );

  const dispatch = useDispatch();

  const requestEvery = useCallback(() => {
    dispatch({ type: ActionTypes.REQUEST_TAKE_EVERY });
  }, []);

  const requestLatest = useCallback(() => {
    dispatch({ type: ActionTypes.REQUEST_TAKE_LATEST });
  }, []);

  const request = useCallback(() => {
    dispatch({ type: ActionTypes.REQUEST_TAKE });
  }, []);

  const resetActionlogger = useCallback(() => {
    dispatch({ type: ActionLoggerActionTypes.RESET_LOGGER });
  }, []);

  return (
    <View style={{ margin: 24 }}>
      <Button
        title="Dispatch REQUEST_TAKE_EVERY action"
        onPress={requestEvery}
      />
      <Separator />
      <Button
        title="Dispatch REQUEST_TAKE_LATEST action"
        onPress={requestLatest}
      />
      <Separator />
      <Button title="Dispatch REQUEST_TAKE action" onPress={request} />
      <Separator />
      <Button title="Reset action logger" onPress={resetActionlogger} />
      <Separator />
      <FlatList
        data={dispatchedActions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const Separator = () => <View style={{ marginVertical: 8 }} />;

const renderItem = ({ item }: ListRenderItemInfo<string>) => (
  <View style={{ marginVertical: 2 }}>
    <Text style={{ fontWeight: 'bold' }}>{item}</Text>
  </View>
);

const keyExtractor = (item: string, index: number) => index.toString();

export default HomeScreen;
