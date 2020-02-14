import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useSelector, useDispatch } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/consumeThings';
import getFace from '../selectors/getFace';

export default function Moods() {
  const dispatch = useDispatch();
  const face = useSelector(getFace);
  const coffees = useSelector(state => state.coffees);
  const snacks = useSelector(state => state.snacks);
  const naps = useSelector(state => state.naps);
  const studies = useSelector(state => state.studies);

  const handleDrink = () => dispatch(drinkCoffee());
  const handleEat = () => dispatch(eatSnack());
  const handleSleep = () => dispatch(takeNap());
  const handleStudy = () => dispatch(study());

  return (
    <>
      <Controls>
        <button onClick={handleDrink}>coffee - {coffees}</button>
        <button onClick={handleEat}>snacks - {snacks}</button>
        <button onClick={handleSleep}>naps - {naps}</button>
        <button onClick={handleStudy}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
}
