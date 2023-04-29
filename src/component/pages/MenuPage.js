import { Header } from "../ui/Header/Header";
import MealsSummary from "../main/MealsSummary";
import { Footer } from "../ui/Footer/Footer";
import {
  categories,
  Snacks,
  Momos,
  Gravy,
  Noodles,
  Pastas,
  Pizzas,
  Burgers,
  Sandwiches,
  Soups,
  Tandoor,
  Paneer,
  Veg,
  Dal,
  South,
  Fish,
  Egg,
  Chicken,
  Mutton,
  Rice,
  Roti,
  Sides,
  Desserts,
  Drinks,
  Thali,
} from "../../utils/data";
import Card from "../ui/MenuPage/Card";
import Title from "../ui/MenuPage/Title";
import { useEffect, useState } from "react";
import classes from "./MenuPage.module.css";
import { CartIcon } from "../ui/ui-icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { BackgroundImg } from "../ui/Background/Background";

const MenuPage = (props) => {
  const [active, setActive] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const cartCount = useSelector((state) => state.cart.items);
  const isCartEmpty = useSelector((state) => state.cart.changed);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  useEffect(() => {
    const cartShowHandler = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 100) {
          setShowCart(true);
        } else {
          setShowCart(false);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", cartShowHandler);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", cartShowHandler);
      };
    }
  }, [lastScrollY]);

  // const scrollToCategories = (item) => {
  //   var target = document.getElementById(item);
  //   target.scrollIntoView({
  //     block: "start",
  //     inline: "nearest",
  //     behavior: "smooth",
  //   });
  // };

  const scrollToCategories = (item) => {
    var target = document.getElementById(item);
    target.parentNode.scrollTop = target.offsetTop;
  };

  return (
    <div className={classes.menu}>
      <div>
        <Header
          onShowbg={false}
          onIsSearchVisible={true}
          onIsSearchSlide={false}
          isBgBlack={true}
          isMenupage={true}
          isPosition={false}
        />
      </div>
      <section className={classes.background}>
        <BackgroundImg className={classes.background__img} />
      </section>
      <section>
        <MealsSummary />
      </section>

      <div className={classes.menu__body} id={"body"}>
        <aside className={classes.menu__sidebar}>
          <nav>
            {categories.map((category) => (
              <p
                className={`${classes.sidebarContent} ${
                  active === category && classes.active
                }`}
                key={category.title}
                onClick={() => {
                  scrollToCategories(category.title);
                  setActive(category);
                }}
              >
                {category.title}
              </p>
            ))}
          </nav>
        </aside>
        <section className={classes.menu__selections} id={"selection"}>
          <>{/* Snacks*/}
            <Title onClick={props.onClick} title={"Snacks"} id={"Snacks"}>
              {Snacks.map((snack) => (
                <Card
                  key={snack.name}
                  id={snack.name}
                  name={snack.name}
                  price={snack.price}
                  src={snack.src}
                  type={snack.type}
                />
              ))}
            </Title>
          </>
          <>{/* Momos */}
            <Title onClick={props.onClick} title={"Momos"} id={"Momos"}>
              {Momos.map((momo) => (
                <Card
                  key={momo.name}
                  id={momo.name}
                  name={momo.name}
                  price={momo.price}
                  src={momo.src}
                  type={momo.type}
                />
              ))}
            </Title>
          </>
          <>{/* Gravy */}
            <Title onClick={props.onClick} title={"Gravy"} id={"Gravy"}>
              {Gravy.map((grav) => (
                <Card
                  key={grav.name}
                  id={grav.name}
                  name={grav.name}
                  price={grav.price}
                  src={grav.src}
                  type={grav.type}
                />
              ))}
            </Title>
          </>
          <>{/* Noodles */}
            <Title onClick={props.onClick} title={"Noodles"} id={"Noodles"}>
              {Noodles.map((noodle) => (
                <Card
                  key={noodle.name}
                  id={noodle.name}
                  name={noodle.name}
                  price={noodle.price}
                  src={noodle.src}
                  type={noodle.type}
                />
              ))}
            </Title>
          </>
          <>{/* Pasta */}
            <Title onClick={props.onClick} title={"Pasta"} id={"Pasta"}>
              {Pastas.map((pasta) => (
                <Card
                  key={pasta.name}
                  id={pasta.name}
                  name={pasta.name}
                  price={pasta.price}
                  src={pasta.src}
                  type={pasta.type}
                />
              ))}
            </Title>
          </>
          <>{/* pizzas */}
            <Title onClick={props.onClick} title={"Pizzas"} id={"Pizzas"}>
              {Pizzas.map((pizza) => (
                <Card
                  key={pizza.name}
                  id={pizza.name}
                  name={pizza.name}
                  price={pizza.price}
                  src={pizza.src}
                  type={pizza.type}
                />
              ))}
            </Title>
          </>
          <>{/* burgers */}
            <Title onClick={props.onClick} title={"Burgers"} id={"Burgers"}>
              {Burgers.map((Burger) => (
                <Card
                  key={Burger.name}
                  id={Burger.name}
                  name={Burger.name}
                  price={Burger.price}
                  src={Burger.src}
                  type={Burger.type}
                />
              ))}
            </Title>
          </>
          <>{/* Sandwiches */}
            <Title
              onClick={props.onClick}
              title={"Sandwiches"}
              id={"Sandwiches"}
            >
              {Sandwiches.map((Sandwich) => (
                <Card
                  key={Sandwich.name}
                  id={Sandwich.name}
                  name={Sandwich.name}
                  price={Sandwich.price}
                  src={Sandwich.src}
                  type={Sandwich.type}
                />
              ))}
            </Title>
          </>
          <>{/* Soups */}
            <Title onClick={props.onClick} title={"Soups"} id={"Soups"}>
              {Soups.map((Soup) => (
                <Card
                  key={Soup.name}
                  id={Soup.name}
                  name={Soup.name}
                  price={Soup.price}
                  src={Soup.src}
                  type={Soup.type}
                />
              ))}
            </Title>
          </>
          <>{/* Tandoor */}
            <Title onClick={props.onClick} title={"Tandoor"} id={"Tandoor"}>
              {Tandoor.map((Tandoors) => (
                <Card
                  key={Tandoors.name}
                  id={Tandoors.name}
                  name={Tandoors.name}
                  price={Tandoors.price}
                  src={Tandoors.src}
                  type={Tandoors.type}
                />
              ))}
            </Title>
          </>
          <>{/* Panner*/}
            <Title onClick={props.onClick} title={"Paneer"} id={"Paneer"}>
              {Paneer.map((Paneers) => (
                <Card
                  key={Paneers.name}
                  id={Paneers.name}
                  name={Paneers.name}
                  price={Paneers.price}
                  src={Paneers.src}
                  type={Paneers.type}
                />
              ))}
            </Title>
          </>
          <>{/* Veg*/}
            <Title onClick={props.onClick} title={"Veg"} id={"Veg"}>
              {Veg.map((Vegs) => (
                <Card
                  key={Vegs.name}
                  id={Vegs.name}
                  name={Vegs.name}
                  price={Vegs.price}
                  src={Vegs.src}
                  type={Vegs.type}
                />
              ))}
            </Title>
          </>
          <>{/* Dal*/}
            <Title onClick={props.onClick} title={"Dal"} id={"Dal"}>
              {Dal.map((Dals) => (
                <Card
                  key={Dals.name}
                  id={Dals.name}
                  name={Dals.name}
                  price={Dals.price}
                  src={Dals.src}
                  type={Dals.type}
                />
              ))}
            </Title>
          </>
          <>{/* South*/}
            <Title onClick={props.onClick} title={"South"} id={"South"}>
              {South.map((Souths) => (
                <Card
                  key={Souths.name}
                  id={Souths.name}
                  name={Souths.name}
                  price={Souths.price}
                  src={Souths.src}
                  type={Souths.type}
                />
              ))}
            </Title>
          </>
          <>{/* Fish*/}
            <Title onClick={props.onClick} title={"Fish"} id={"Fish"}>
              {Fish.map((Fishs) => (
                <Card
                  key={Fishs.name}
                  id={Fishs.name}
                  name={Fishs.name}
                  price={Fishs.price}
                  src={Fishs.src}
                  type={Fishs.type}
                />
              ))}
            </Title>
          </>
          <>{/* Egg*/}
            <Title onClick={props.onClick} title={"Egg"} id={"Egg"}>
              {Egg.map((Eggs) => (
                <Card
                  key={Eggs.name}
                  id={Eggs.name}
                  name={Eggs.name}
                  price={Eggs.price}
                  src={Eggs.src}
                  type={Eggs.type}
                />
              ))}
            </Title>
          </>
          <>{/* Egg*/}
            <Title onClick={props.onClick} title={"Chicken"} id={"Chicken"}>
              {Chicken.map((Chickens) => (
                <Card
                  key={Chickens.name}
                  id={Chickens.name}
                  name={Chickens.name}
                  price={Chickens.price}
                  src={Chickens.src}
                  type={Chickens.type}
                />
              ))}
            </Title>
          </>
          <>{/* Chicken*/}
            <Title onClick={props.onClick} title={"Chicken"} id={"Chicken"}>
              {Chicken.map((Chickens) => (
                <Card
                  key={Chickens.name}
                  id={Chickens.name}
                  name={Chickens.name}
                  price={Chickens.price}
                  src={Chickens.src}
                  type={Chickens.type}
                />
              ))}
            </Title>
          </>
          <>{/* Mutton*/}
            <Title onClick={props.onClick} title={"Mutton"} id={"Mutton"}>
              {Mutton.map((Muttons) => (
                <Card
                  key={Muttons.name}
                  id={Muttons.name}
                  name={Muttons.name}
                  price={Muttons.price}
                  src={Muttons.src}
                  type={Muttons.type}
                />
              ))}
            </Title>
          </>
          <>{/* Rice*/}
            <Title onClick={props.onClick} title={"Rice"} id={"Rice"}>
              {Rice.map((Rices) => (
                <Card
                  key={Rices.name}
                  id={Rices.name}
                  name={Rices.name}
                  price={Rices.price}
                  src={Rices.src}
                  type={Rices.type}
                />
              ))}
            </Title>
          </>
          <>{/* Roti*/}
            <Title onClick={props.onClick} title={"Roti"} id={"Roti"}>
              {Roti.map((Rotis) => (
                <Card
                  key={Rotis.name}
                  id={Rotis.name}
                  name={Rotis.name}
                  price={Rotis.price}
                  src={Rotis.src}
                  type={Rotis.type}
                />
              ))}
            </Title>
          </>
          <>{/* Sides*/}
            <Title onClick={props.onClick} title={"Sides"} id={"Sides"}>
              {Sides.map((Sides) => (
                <Card
                  key={Sides.name}
                  id={Sides.name}
                  name={Sides.name}
                  price={Sides.price}
                  src={Sides.src}
                  type={Sides.type}
                />
              ))}
            </Title>
          </>
          <>{/* Desserts*/}
            <Title onClick={props.onClick} title={"Desserts"} id={"Desserts"}>
              {Desserts.map((Dessert) => (
                <Card
                  key={Dessert.name}
                  id={Dessert.name}
                  name={Dessert.name}
                  price={Dessert.price}
                  src={Dessert.src}
                  type={Dessert.type}
                />
              ))}
            </Title>
          </>
          <>{/* Drinks*/}
            <Title onClick={props.onClick} title={"Drinks"} id={"Drinks"}>
              {Drinks.map((Drink) => (
                <Card
                  key={Drink.name}
                  id={Drink.name}
                  name={Drink.name}
                  price={Drink.price}
                  src={Drink.src}
                  type={Drink.type}
                />
              ))}
            </Title>
          </>
          <>{/* Thali*/}
            <Title onClick={props.onClick} title={"Thali"} id={"Thali"}>
              {Thali.map((Thalis) => (
                <Card
                  key={Thalis.name}
                  id={Thalis.name}
                  name={Thalis.name}
                  price={Thalis.price}
                  src={Thalis.src}
                  type={Thalis.type}
                />
              ))}
            </Title>
          </>

        </section>
        {isCartEmpty && showCart && (
          <div className={classes.cart}>
            <button onClick={toggleCartHandler}>
              <p>CART</p>
              <CartIcon />
              <p>{cartCount.length}</p>
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
