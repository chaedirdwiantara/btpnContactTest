import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {NavigationContainer} from '@react-navigation/native';
import DetailData from './DetailData';

const mockStore = configureStore([]);
const store = mockStore({
  deleteData: {
    success: false,
    error: null,
    loading: false,
  },
});

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack,
    }),
  };
});

describe('DetailData Screen', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        data: {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          photo: 'url-to-photo',
        },
      },
    };

    const {getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <DetailData route={route} />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByText('John')).toBeTruthy();
    expect(getByText('Doe')).toBeTruthy();
  });

  it('navigates back on success', () => {
    store.dispatch = jest.fn();
    store.getState = () => ({
      deleteData: {
        success: true,
        error: null,
        loading: false,
      },
    });

    const route = {
      params: {
        data: {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          photo: 'url-to-photo',
        },
      },
    };

    render(
      <Provider store={store}>
        <NavigationContainer>
          <DetailData route={route} />
        </NavigationContainer>
      </Provider>,
    );

    expect(mockGoBack).toHaveBeenCalled();
  });

  it('calls deleteDataRequest on delete button press', () => {
    const route = {
      params: {
        data: {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          photo: 'url-to-photo',
        },
      },
    };

    const {getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <DetailData route={route} />
        </NavigationContainer>
      </Provider>,
    );

    fireEvent.press(getByText('Delete User'));
    expect(store.dispatch).toHaveBeenCalled();
  });
});
