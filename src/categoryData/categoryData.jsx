import Data from "../data";

const jweleryData = () => {
  const jwelery = Data.filter((e) => {
    return e.category == "jewelery";
  });
  return jwelery;
};

const clothingData = () => {
  const clothing = Data.filter((e) => {
    return e.category == "women's clothing" || e.category == "men's clothing";
  });
  return clothing;
};

const electronicsData = () => {
  const electronics = Data.filter((e) => {
    return e.category == "electronics";
  });
  return electronics;
};

export { jweleryData, clothingData, electronicsData };
