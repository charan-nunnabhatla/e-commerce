import { useEffect, useState } from "react";
import "./card.css";
import React from "react";
import LazyLoad from "react-lazyload";

const Card = ({
  ProductName,
  Brand,
  Price,
  DiscountPrice,
  Image_Url,
  Quantity,
  Category,
  CubCategory,
  Absolute_Url,
}) => {
  const handleClick = () => {
    // window.open(Absolute_Url, '_blank')
  };
  return (
    <div className="card" onClick={handleClick}>
      <LazyLoad>
        <img src={Image_Url} alt={ProductName} />
      </LazyLoad>
      <div className="cardBody">
        <h2>
          {ProductName} {Quantity}
        </h2>
        <h3>{Brand}</h3>
        <h3>
          <span className="originaPrice">{Price} </span>
          <span>{DiscountPrice}</span>
        </h3>
      </div>
    </div>
  );
};

const AllProducts = React.memo(({ bigBasketJson }) => {
  console.log("AllProducts");
  return bigBasketJson.map((product, index) => (
    <Card key={index} {...product} />
  ));
});

const SearchedProducts = React.memo(({ filteredList }) => {
  console.log("SearchedProdects");
  return filteredList.map((product, index) => (
    <Card key={index} {...product} />
  ));
});

const CardList = () => {
  const [bigBasketJson, setJson] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("fetching json data");
    fetch("/bigbasket.json")
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .catch((e) => {
        setIsLoading(false);
        console.error("error: ", e);
      })
      .then((jsonData) => {
        setIsLoading(false);
        setJson(jsonData);
      })
      .catch((e) => {
        setIsLoading(false);
        console.error("error: ", e);
      });
  }, []);

  // useEffect(() => {
  //   const filtered = bigBasketJson.filter((product) =>
  //     product.ProductName.toLowerCase().includes(
  //       searchItem.toLowerCase() ||
  //         product.Brand.toLowerCase().includes(searchItem.toLowerCase())
  //     )
  //   );
  //   setFilteredList(filtered);
  // }, [searchItem]);

  const updateFilter = (query) => {
    console.log("updateFilter fn");
    const filtered = bigBasketJson.filter((product) =>
      product.ProductName.toLowerCase().includes(
        query.toLowerCase() ||
          product.Brand.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredList(filtered);
  };
  const handleSearch = () => {
    console.log("handleSearch");
    // setSearchItem(e.target.value);
    updateFilter(searchItem);
  };

  const onEnter = (e) => {
    console.log("onEnter");
    if (e.key === "Enter") {
      console.log("onEnter if");
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchItem.length === 0) {
      console.log("input feild is empty");
      setFilteredList([]);
    }
    console.log("use effect in action");
  }, [searchItem]);

  const handleOnChange = (e) => {
    console.log("handleOnChange");
    setSearchItem(e.target.value);
  };

  return (
    <div className="cardMain">
      <div className="searchArea">
        <input
          placeholder="Search"
          type="text"
          onKeyDown={onEnter}
          onChange={handleOnChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="cardContainer">
        {isLoading ? (
          <div className="loading">
            <div className="spining"></div>
          </div>
        ) : filteredList.length > 0 ? (
          <SearchedProducts filteredList={filteredList} />
        ) : (
          <AllProducts bigBasketJson={bigBasketJson} />
        )}
      </div>
    </div>
  );
};

export default CardList;
