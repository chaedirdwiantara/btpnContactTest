import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {NavigationContainer} from '@react-navigation/native';
import CreateScreen from './CreateData';
import {MainTabParams} from '../navigations';

const mockStore = configureStore([]);
const store = mockStore({
  createData: {
    loading: false,
    error: null,
    success: false,
  },
  updateData: {
    loading: false,
    error: null,
    success: false,
  },
});

const mockNavigate = jest.fn();
const mockRoute = {
  params: {
    data: null,
  },
};

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('CreateScreen', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <CreateScreen route={mockRoute} />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByPlaceholderText('First Name..')).toBeTruthy();
    expect(getByPlaceholderText('Last Name..')).toBeTruthy();
    expect(getByPlaceholderText('Age..')).toBeTruthy();
  });

  it('submits data correctly', () => {
    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <CreateScreen route={mockRoute} />
        </NavigationContainer>
      </Provider>,
    );

    fireEvent.changeText(getByPlaceholderText('First Name..'), 'John');
    fireEvent.changeText(getByPlaceholderText('Last Name..'), 'Doe');
    fireEvent.changeText(getByPlaceholderText('Age..'), '30');
    fireEvent.press(getByText('Submit'));

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('updates data correctly when data is provided', () => {
    const updatedRoute = {
      params: {
        data: {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          age: '28',
        },
      },
    };

    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <CreateScreen route={updatedRoute} />
        </NavigationContainer>
      </Provider>,
    );

    fireEvent.changeText(getByPlaceholderText('First Name..'), 'Johnny');
    fireEvent.press(getByText('Update'));

    expect(store.dispatch).toHaveBeenCalled();
  });
});
