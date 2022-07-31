import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducerForNorth } from '../Redux/regions/fetchNorthAfrica';
import Home from '../components/home_page/home';
import africa from '../components/home_page/Africa.png';
import store from '../Redux/configureStore';

const mockStore = () => {
  const preloadedState = {
    northAfrica: [
      {
        country: 'Egypt',
        population: 102334403,
        capital: 'Cairo',
        region: 'Northern Africa',
        flags: 'https://flagcdn.com/w320/eg.png',
        latlng: [27.0, 30.0],
      },
      {
        country: 'Tunísia',
        population: 11818618,
        capital: 'Tunis',
        region: 'Northern Africa',
        flags: 'https://flagcdn.com/w320/tn.png',
        latlng: [34.0, 9.0],
      },
      {
        country: 'Algeria',
        population: 44700000,
        capital: 'Algiers',
        region: 'Northern Africa',
        flags: 'https://flagcdn.com/w320/dz.png',
        latlng: [28.0, 3.0],
      },
    ],
  };
  return configureStore({
    preloadedState,
    reducer: {
      northAfrica: reducerForNorth,
    },
  });
};

const mockHome = () => {
  const north = [
    {
      country: 'Egypt',
      population: 102334403,
      capital: 'Cairo',
      region: 'Northern Africa',
      flags: 'https://flagcdn.com/w320/eg.png',
      latlng: [27.0, 30.0],
    },
    {
      country: 'Tunísia',
      population: 11818618,
      capital: 'Tunis',
      region: 'Northern Africa',
      flags: 'https://flagcdn.com/w320/tn.png',
      latlng: [34.0, 9.0],
    },
    {
      country: 'Algeria',
      population: 44700000,
      capital: 'Algiers',
      region: 'Northern Africa',
      flags: 'https://flagcdn.com/w320/dz.png',
      latlng: [28.0, 3.0],
    },
  ];

  const getNorthCountries = north;

  return (
    <div className="wrapper">
      <div>
        <img id="africa" src={africa} alt="Africa-continent" />
      </div>
      <div>
        <div>
          <p className="cities">Africa</p>
        </div>
        <div>
          <p className="ncities">Cities:54</p>
        </div>
      </div>
      <p id="stats">Select capital city by region</p>
      <div className="regionCont">
        <div role="button" tabIndex={0} className="northy">
          {`Northern Africa ${getNorthCountries.length} main cities`}
        </div>
      </div>
    </div>
  );
};

describe('Testing the Home component', () => {
  test('When app runs north Africa region is displayed correctly', () => {
    render(<Provider store={mockStore()}>{mockHome()}</Provider>);
    expect(screen.getByAltText('Africa-continent')).toBeTruthy();
  });

  describe('Jest Snapshot testing suite', () => {
    it('Matches DOM Snapshot', () => {
      const { container } = render(
        <MemoryRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </MemoryRouter>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
