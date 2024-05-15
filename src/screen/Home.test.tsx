import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeScreen from './Home';
import {NavigationContainer} from '@react-navigation/native';

interface FetchDataState {
  data: Array<{id: number; firstName: string; lastName: string; photo: string}>;
  loading: boolean;
  error: string | null;
}

interface RootState {
  fetchData: FetchDataState;
}

const mockStore = configureStore<RootState>([]);
const store = mockStore({
  fetchData: {
    data: [{id: 1, firstName: 'John', lastName: 'Doe', photo: 'url-to-photo'}],
    loading: false,
    error: null,
  },
});

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByText('BTPN Officers')).toBeTruthy();
  });

  it('displays loading indicator when loading', () => {
    store.getState().fetchData.loading = true;
    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('displays error message when there is an error', () => {
    store.getState().fetchData.error = 'Error fetching data';
    const {getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByText('Error fetching data')).toBeTruthy();
  });

  it('displays data when available', async () => {
    const {getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>,
    );

    await waitFor(() => {
      expect(getByText('John')).toBeTruthy();
      expect(getByText('Doe')).toBeTruthy();
    });
  });
});
