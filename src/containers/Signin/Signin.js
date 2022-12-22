import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles/Signin.css";
import globalStyles from "../../globalStyles.css";
import Signup from "../../components/CreateAccount/Signup";

class Signin extends Component {
  state = {
    page: "signin",
    address1: "",
    address2: "",
    city: "",
    pin: "",
    phone: "",
    otherAllergen: "",
    menuItemName: "",
    menuItemCategory: "",
    menuItemIngredients: "",
    menuItemPrice: "",
    allMenuItems: [],
  };

  clickHandler = () => {
    const { history } = this.props;
    history.push("/home");
  };

  consumerSetupClickHandler = () => {
    this.setState({ page: "consumer-address-setup" });
  };

  consumerAddressSetupClickHandler = () => {
    this.setState({ page: "consumer-allergen-setup" });
  };

  restaurantMenuSetupClickHandler = () => {
    console.log(this.state.allMenuItems);
    const menuItem =
      this.state.menuItemName +
      " - " +
      this.state.menuItemIngredients +
      " - " +
      this.state.menuItemCategory +
      " - $" +
      this.state.menuItemPrice;
    var newAllItemArray = this.state.allMenuItems.concat(menuItem);
    this.setState({
      page: "restaurant-menu-show",
      allMenuItems: newAllItemArray,
    });
  };

  onAddress1Change = (event) => {
    this.setState({ address1: event.target.value });
  };

  onAddress2Change = (event) => {
    this.setState({ address2: event.target.value });
  };

  onCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  onPinChange = (event) => {
    this.setState({ pin: event.target.value });
  };

  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  onOtherAllergenChange = (event) => {
    this.setState({ otherAllergen: event.target.value });
  };

  onMenuItemNameChange = (event) => {
    this.setState({ menuItemName: event.target.value });
  };

  onMenuItemIngredientsChange = (event) => {
    this.setState({ menuItemIngredients: event.target.value });
  };

  onMenuItemCategoryChange = (event) => {
    this.setState({ menuItemCategory: event.target.value });
  };

  onMenuItemPriceChange = (event) => {
    this.setState({ menuItemPrice: event.target.value });
  };

  handleMenuItemAdd = () => {
    console.log(this.state.menuItemName);
    this.allMenuItems.push(this.state.menuItemName);
  };

  render() {
    console.log(this.state.allMenuItems);
    switch (this.state.page) {
      case "signin":
        return (
          <div className="signin-signup-page">
            <h1 className="u-c-w u-fs-4 u-mt-1 m-mb-0">Food For Everyone</h1>
            <form className="signin-form" onSubmit={this.clickHandler}>
              <h1 className="u-c-w u-fs-2_5 u-mt-1 u-mb-1">Sign In</h1>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="email" className="u-c-w u-fs-1_5 u-mb-1 u-d-b">
                  Email
                </label>
                <input
                  className="input-text-field"
                  type="email"
                  id="username"
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-2">
                <label
                  htmlFor="password"
                  className="u-c-w u-fs-1_5 u-mb-1 u-d-b"
                >
                  Password
                </label>
                <input
                  className="input-text-field"
                  type="password"
                  id="password"
                  required
                />
              </div>
              <button className="signin-form-button" type="submit">
                Sign In
              </button>
            </form>
            <p className="u-fs-1_5 u-c-w u-d-b u-mb-1">
              Don't have an account?{" "}
            </p>
            <button
              className="u-mt-0 signin-form-button"
              onClick={() => this.setState({ page: "choose-account-type" })}
            >
              Sign Up
            </button>
          </div>
        );
      case "choose-account-type":
        return (
          <div className="signin-signup-page">
            <h1 className="u-c-w u-fs-4 u-mt-1 u-mb-0">Food For Everyone</h1>
            <h1 className="u-c-w u-fs-2_5 u-mt-1 u-mb-1">Welcome</h1>
            <h1 className="u-c-w u-fs-2 u-mt-1 u-mb-1">Choose account type</h1>
            <button
              className="u-mt-1 signin-form-button"
              onClick={() => this.setState({ page: "consumer-setup" })}
            >
              Consumer
            </button>
            <button
              className="signin-form-button u-mt-2"
              onClick={() => this.setState({ page: "restaurant-setup" })}
            >
              Restaurant Owner
            </button>
            <button
              className="signin-form-button u-mt-2"
              onClick={() => this.setState({ page: "signin" })}
            >
              Go Back
            </button>
          </div>
        );
      case "consumer-setup":
        return (
          <div className="signin-signup-page">
            <h1 className="u-c-w u-fs-2 u-mt-1 u-mb-1">
              Please fill in the details
            </h1>
            <form
              className="signin-form"
              onSubmit={this.consumerSetupClickHandler}
            >
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="email" className="u-c-w u-fs-1_5 u-mb-1">
                  Email*
                </label>
                <input
                  className="input-text-field"
                  type="email"
                  id="username"
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="name" className="u-c-w u-fs-1_5 u-mb-1">
                  First name*
                </label>
                <input
                  className="input-text-field"
                  type="name"
                  id="name"
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="name" className="u-c-w u-fs-1_5 u-mb-1">
                  Last name*
                </label>
                <input
                  className="input-text-field"
                  type="last name"
                  id="name"
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-2">
                <label
                  htmlFor="password"
                  className="u-c-w u-fs-1_5 u-mb-1 u-d-b"
                >
                  Create Password*
                </label>
                <input
                  className="input-text-field"
                  type="password"
                  id="password"
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-2">
                <label
                  htmlFor="password"
                  className="u-c-w u-fs-1_5 u-mb-1 u-d-b"
                >
                  Re-enter Password*
                </label>
                <input
                  className="input-text-field"
                  type="password"
                  id="password"
                  required
                />
              </div>
              <div className="u-d-f u-w-300 u-m-a">
                <button
                  className="consumer-details-form-button u-mr-0_5 u-f-a"
                  onClick={() => this.setState({ page: "choose-account-type" })}
                >
                  Go Back
                </button>
                <button
                  className="consumer-details-form-button u-ml-0_5"
                  type="submit"
                  onClick={() =>
                    this.setState({ page: "consumer-address-setup" })
                  }
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        );
      case "consumer-address-setup":
        return (
          <div className="signin-signup-page">
            <h1 className="u-c-w u-fs-2 u-mt-1 u-mb-1">
              Let's complete your profile
            </h1>
            <form
              className="signin-form"
              onSubmit={this.consumerAddressSetupClickHandler}
            >
              <div className="input-text-field-wrapper u-mb-1">
                <label className="u-c-w u-fs-1_5 u-mb-1">Address Line 1*</label>
                <input
                  className="input-text-field"
                  type="address line 1"
                  id="address"
                  value={this.state.address1}
                  onChange={this.onAddress1Change}
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="address" className="u-c-w u-fs-1_5 u-mb-1">
                  Address Line 2
                </label>
                <input
                  className="input-text-field"
                  type="address line 2"
                  id="address"
                  value={this.state.address2}
                  onChange={this.onAddress2Change}
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="city" className="u-c-w u-fs-1_5 u-mb-1">
                  City*
                </label>
                <input
                  className="input-text-field"
                  type="city"
                  id="city"
                  required
                  value={this.state.city}
                  onChange={this.onCityChange}
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="state" className="u-c-w u-fs-1_5 u-mb-1">
                  State*
                </label>
                <select required class="input-select-field" name="state">
                  <option value="" />
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="input-text-field-wrapper u-mb-2">
                <label
                  htmlFor="pincode"
                  className="u-c-w u-fs-1_5 u-mb-1 u-d-b"
                >
                  Pin code*
                </label>
                <input
                  className="input-text-field"
                  type="number"
                  id="pincode"
                  required
                  value={this.state.pin}
                  onChange={this.onPinChange}
                />
              </div>
              <div className="input-text-field-wrapper u-mb-2">
                <label htmlFor="phone" className="u-c-w u-fs-1_5 u-mb-1 u-d-b">
                  Phone number*
                </label>
                <input
                  className="input-text-field"
                  type="number"
                  id="phone"
                  required
                  value={this.state.phone}
                  onChange={this.onPhoneChange}
                />
              </div>
              <div className="u-d-f u-w-300 u-m-a">
                <button
                  className="consumer-details-form-button u-mr-0_5"
                  onClick={() => this.setState({ page: "consumer-setup" })}
                >
                  Go Back
                </button>

                <button
                  className="consumer-details-form-button u-ml-0_5"
                  type="submit"
                  onClick={() =>
                    this.setState({ page: "consumer-allergen-setup" })
                  }
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        );
      case "consumer-allergen-setup":
        return (
          <div className="signin-signup-page">
            <h1 className="u-c-w u-fs-2 u-mt-1 u-mb-1">
              Let's complete your profile
            </h1>
            <form
              className="signin-form"
              onSubmit={this.consumerAddressSetupClickHandler}
            >
              <div className="input-text-field-wrapper u-mb-1 u-ai-fs">
                <h2 className="u-c-w u-fs-1_5 u-mb-1">
                  Please select the items you are allergic to
                </h2>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  Nuts
                </label>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  Gluten
                </label>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  Lactose
                </label>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  Wheat
                </label>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  Soy
                </label>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  Crustacean
                </label>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  Fish
                </label>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  All of the above
                </label>
                <label className="u-d-f u-c-w u-fs-1_5 u-mb-0_5" for="checkbox">
                  <input
                    className="input-checkbox-field u-d-b u-mr-1 u-w-20"
                    type="checkbox"
                  />
                  None
                </label>
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label
                  htmlFor="other allergen"
                  className="u-c-w u-fs-1_5 u-mb-1"
                >
                  Any others
                </label>
                <input
                  className="input-text-field"
                  type="other allergen"
                  id="other-allergen"
                  value={this.state.otherAllergen}
                  onChange={this.onOtherAllergenChange}
                />
              </div>
              <div className="u-d-f u-w-300 u-m-a">
                <button
                  className="consumer-details-form-button u-mr-0_5"
                  onClick={() => this.setState({ page: "consumer-setup" })}
                >
                  Go Back
                </button>

                <button
                  className="consumer-details-form-button u-ml-0_5"
                  type="submit"
                  onClick={this.clickHandler}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        );
      case "restaurant-setup":
        return (
          <div className="signin-signup-page">
            <h1 className="u-c-w u-fs-2 u-mt-1 u-mb-1">
              Let's complete your profile
            </h1>
            <form className="signin-form">
              <div className="input-text-field-wrapper u-mb-1">
                <label className="u-c-w u-fs-1_5 u-mb-1">Address Line 1*</label>
                <input
                  className="input-text-field"
                  type="address line 1"
                  id="address"
                  value={this.state.address1}
                  onChange={this.onAddress1Change}
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="address" className="u-c-w u-fs-1_5 u-mb-1">
                  Address Line 2
                </label>
                <input
                  className="input-text-field"
                  type="address line 2"
                  id="address"
                  value={this.state.address2}
                  onChange={this.onAddress2Change}
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="city" className="u-c-w u-fs-1_5 u-mb-1">
                  City*
                </label>
                <input
                  className="input-text-field"
                  type="city"
                  id="city"
                  required
                  value={this.state.city}
                  onChange={this.onCityChange}
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label htmlFor="state" className="u-c-w u-fs-1_5 u-mb-1">
                  State*
                </label>
                <select required class="input-select-field" name="state">
                  <option value="" />
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="input-text-field-wrapper u-mb-2">
                <label
                  htmlFor="pincode"
                  className="u-c-w u-fs-1_5 u-mb-1 u-d-b"
                >
                  Pin code*
                </label>
                <input
                  className="input-text-field"
                  type="number"
                  id="pincode"
                  required
                  value={this.state.pin}
                  onChange={this.onPinChange}
                />
              </div>
              <div className="input-text-field-wrapper u-mb-2">
                <label htmlFor="phone" className="u-c-w u-fs-1_5 u-mb-1 u-d-b">
                  Phone number*
                </label>
                <input
                  className="input-text-field"
                  type="number"
                  id="phone"
                  required
                  value={this.state.phone}
                  onChange={this.onPhoneChange}
                />
              </div>
              <div className="u-d-f u-w-300 u-m-a">
                <button
                  className="consumer-details-form-button u-mr-0_5"
                  onClick={() => this.setState({ page: "choose-account-type" })}
                >
                  Go Back
                </button>

                <button
                  className="consumer-details-form-button u-ml-0_5"
                  type="submit"
                  onClick={() =>
                    this.setState({ page: "restaurant-menu-setup" })
                  }
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        );
      case "restaurant-menu-setup":
        return (
          <div className="signin-signup-page">
            <h1 className="u-c-w u-fs-2 u-mt-1 u-mb-1">
              Let's build your menu
            </h1>
            <form
              className="signin-form"
              onSubmit={this.restaurantMenuSetupClickHandler}
            >
              <div className="input-text-field-wrapper u-mb-1">
                <label className="u-c-w u-fs-1_5 u-mb-1">
                  Name of the item*
                </label>
                <input
                  className="input-text-field"
                  type="menu item"
                  id="menu-item"
                  value={this.state.menuItemName}
                  onChange={this.onMenuItemNameChange}
                  required
                />
                {/* {this.state.menuItems.map((menuItem, index) => (
                  <div key={index}>
                    <input
                      value={menuItem.value}
                      onChange={(event) => this.onMenuItemChange(event, index)}
                    />
                    <button onClick={this.handleMenuItemAdd}>Add Item</button>
                  </div>
                ))} */}
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label className="u-c-w u-fs-1_5 u-mb-1">
                  Category of the item*
                </label>
                <input
                  className="input-text-field"
                  type="menu item category"
                  id="menu-item-category"
                  value={this.state.menuItemCategory}
                  onChange={this.onMenuItemCategoryChange}
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label className="u-c-w u-fs-1_5 u-mb-1">
                  Ingredients of the item*
                </label>
                <input
                  className="input-text-field"
                  type="menu item ingredients"
                  id="menu-item-ingredients"
                  value={this.state.menuItemIngredients}
                  onChange={this.onMenuItemIngredientsChange}
                  required
                />
              </div>
              <div className="input-text-field-wrapper u-mb-1">
                <label className="u-c-w u-fs-1_5 u-mb-1">
                  Price of the item*
                </label>
                <input
                  className="input-text-field"
                  type="menu item price"
                  id="menu-item-price"
                  value={this.state.menuItemPrice}
                  onChange={this.onMenuItemPriceChange}
                  required
                />
              </div>

              {/* {this.state.menuItems.map((menuItem, index) => (
                <p>{menuItem}</p>
              ))} */}

              <div className="u-d-f u-w-300 u-m-a">
                <button
                  className="consumer-details-form-button u-mr-0_5"
                  onClick={() => this.setState({ page: "restaurant-setup" })}
                >
                  Go Back
                </button>

                <button
                  className="consumer-details-form-button u-ml-0_5"
                  type="submit"
                  onClick={() => {
                    this.restaurantMenuSetupClickHandler;
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        );
      case "restaurant-menu-show":
        return (
          <div className="signin-signup-page">
            <h1 className="u-c-w u-fs-2 u-mt-1 u-mb-1">Your menu</h1>
            {console.log(this.state.allMenuItems)}
            <ol>
              {this.state.allMenuItems.map((menuItem, index) => (
                <li className="u-d-f u-w-a u-c-w u-fs-1_5 u-mb-1 u-ta-l u-mr-1_5">
                  {index + 1}
                  {". "}
                  {menuItem}
                </li>
              ))}
            </ol>

            <div className="u-d-f u-w-300 u-m-a">
              <button
                className="consumer-details-form-button u-mr-0_5"
                onClick={() => this.setState({ page: "choose-account-type" })}
              >
                Go to Sign in
              </button>

              <button
                className="consumer-details-form-button u-ml-0_5"
                type="submit"
                onClick={() => {
                  this.setState({ page: "restaurant-menu-setup" });
                }}
              >
                Add item
              </button>
            </div>
          </div>
        );
    }
  }
}

Signin.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Signin;
