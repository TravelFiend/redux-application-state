import reducer from './consumeReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/consumeThings';

describe('incrementors', () => {
  it('should increment coffees state', () => {
    const initialState = { coffees: 4 };
    const action = drinkCoffee();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ coffees: 5 });
  });

  it('should increment snacks state', () => {
    const initialState = { snacks: 7 };
    const action = eatSnack();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ snacks: 8 });
  });

  it('should increment naps state', () => {
    const initialState = { naps: 3 };
    const action = takeNap();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ naps: 4 });
  });

  it('should increment studies state', () => {
    const initialState = { studies: 6 };
    const action = study();

    const stateNow = reducer(initialState, action);

    expect(stateNow).toEqual({ studies: 7 });
  });
});
