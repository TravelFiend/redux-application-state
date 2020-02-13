const DRINK_COFFEE = 'DRINK_COFFEE';
const drinkCoffee = () => ({
  type: DRINK_COFFEE
});

const EAT_SNACK = 'EAT_SNACK';
const eatSnack = () => ({
  type: EAT_SNACK
});

const TAKE_NAP = 'TAKE_NAP';
const takeNap = () => ({
  type: TAKE_NAP
});

const STUDY = 'STUDY';
const study = () => ({
  type: STUDY
});

const actions = [drinkCoffee, eatSnack, takeNap, study];

export default actions;
