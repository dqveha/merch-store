import React, {useState} from "react";
import BiographyBlock from "./BiographyBlock";
import BuyRestockBlock from "./BuyRestockBlock";
import CareerBlock from "./CareerBlock";
import ContactBlock from "./ContactBlock";
import LocationBlock from "./LocationBlock";
import MerchBlock from "./MerchBlock";
import AddMerchBlock from "./AddMerchBlock"

function MerchControl() {

  const [drinkCount, setDrinkCount] = useState("Out of Stock")
  const [chipCount, setChipCount] = useState("Out of Stock")
  const [hotDogCount, setHotDogCount] = useState("Out of Stock")

  function addOneDrink(){
    if (drinkCount === "Out of Stock"){
      setDrinkCount(1)
    }else {
      setDrinkCount(drinkCount + 1)
    }
  }
  function addOneChip(){
    if (chipCount === "Out of Stock"){
      setChipCount(1)
    }else {
      setChipCount(chipCount + 1)
    }
  }
  function addOneHotDog(){
    if (hotDogCount === "Out of Stock"){
      setHotDogCount(1)
    }else {
      setHotDogCount(hotDogCount + 1)
    }
  }
  function removeOneDrink() {
    if (drinkCount === 1) {
      setDrinkCount("Out of Stock")
    } else if (drinkCount === "Out of Stock") {
      setDrinkCount(drinkCount)
    } else {
    setDrinkCount(drinkCount - 1)
    }
  }
  function removeOneChip() {
    if (chipCount === 1) {
      setChipCount("Out of Stock")
    } else if (chipCount === "Out of Stock") {
      setChipCount(chipCount)
    } else {
    setChipCount(chipCount - 1)
    }
  }
  function removeOneHotDog() {
    if (hotDogCount === 1) {
      setHotDogCount("Out of Stock")
    } else if (hotDogCount === "Out of Stock") {
      setHotDogCount(hotDogCount)
    } else {
    setHotDogCount(hotDogCount - 1)
    }
  }

  return (
    <>
      <hr/>
      <div class="row">
        <div class="column" className="location">
          <LocationBlock />
        </div>

        <div class="column">
          <BiographyBlock />
        </div>

        <div class="column">
          <CareerBlock />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <ContactBlock />
        </div>

        <div class="column">
          <MerchBlock drinkCount={drinkCount} chipCount={chipCount} hotDogCount={hotDogCount} />
        </div>

        <div class="column">

        </div>
      </div>

      <div class="row">
        <div class="column">

        </div>

        <div class="column">
          <BuyRestockBlock  drinkCountAddOne={addOneDrink} chipCountAddOne={addOneChip} hotDogCountAddOne={addOneHotDog} drinkCountMinusOne={removeOneDrink} chipCountMinusOne={removeOneChip} hotDogCountMinusOne={removeOneHotDog} />
        </div>

        <div class="column">
          <AddMerchBlock />
        </div>
      </div>
    </>
  )
}

export default MerchControl;