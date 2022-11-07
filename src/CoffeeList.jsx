import React, { useState, useEffect, useRef } from "react";

function CoffeeList(props) {
  const coffeeUrl = "https://api.sampleapis.com/coffee/hot/";
  const [coffeeList, setCofeeList] = useState([]);
  const [isDetailed, setIsDetailed] = useState(false);
  const buttonText = useRef("Show ");

  useEffect(
    function printAllCofee() {
      console.log(coffeeList);
    },
    [coffeeList]
  );

  function getCoffeeData() {
    console.log("Some coffee");
    async function fetchCoffee() {
      const randomCoffeeUrl =
        coffeeUrl + String(Math.floor(Math.random() * 20));
      const response = await fetch(randomCoffeeUrl);
      console.log(response);
      const textResponse = await response.json();
      console.log(textResponse);
      setCofeeList([...coffeeList, textResponse]);
    }
    fetchCoffee();
  }

  function renderCoffee() {
    if (isDetailed) {
      return coffeeList.map((eachCoffee) => {
        return (
          <div>
            <h2>{eachCoffee.title}</h2>
            <p>{eachCoffee.description}</p>
            <img width="30%" src={eachCoffee.image} alt="foto" />
            <hr />
          </div>
        );
      });
    } else {
      return coffeeList.map((eachCoffee) => {
        return <h2>{eachCoffee.title}</h2>;
      });
    }
  }

  function removeCoffee() {
    coffeeList.pop();
    setCofeeList([...coffeeList]);
  }

  useEffect(() => {
    console.log(isDetailed);
  }, [isDetailed]);

  function showDetail() {
    if (isDetailed) {
      setIsDetailed(false);
      buttonText.current = "Show ";
    } else {
      setIsDetailed(true);
      buttonText.current = "Hide ";
    }
  }

  const myStyleBtn = {
    backgroundColor: "grey",
    color: "white",
    margin: "5px"
  };

  return (
    <div>
      <p>My coffeList</p>
      {renderCoffee()}
      <button style={myStyleBtn} onClick={getCoffeeData}>
        Add coffee
      </button>
      <button style={myStyleBtn} onClick={removeCoffee}>
        Remove coffee
      </button>
      <button style={myStyleBtn} onClick={showDetail}>
        {buttonText.current} information
      </button>
    </div>
  );
}
export default CoffeeList;
