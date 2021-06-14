import classes from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../../assets/meals.jpeg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Eddie's ReactMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food." />
      </div>
    </>
  );
};

export default Header;