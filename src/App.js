import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component/Navigation/Navigation';
import catalogData from './Component/Navigation/catalog.json';
import Catalog from './Component/Catalog/Catalog';

class App extends Component {

  state = {
    showWelcome: true,
    locations: catalogData.data.locations,
    catalogFilter: null,
    categories: null,
    selectedCategory: null
  }

  render() {

    let welcomeMessage = null;

    let catalogPreviewList = null;

    if (this.state.showWelcome) {
      welcomeMessage = <div className="Welcome"> <h2>WELCOME TO <br /> RENTAL MANAGEMENT SYSTEM</h2> <p>Please select Location</p></div>
    }

    if (this.state.categories !== null) {
      catalogPreviewList = <Catalog catalogFilter={this.state.catalogFilter} showCategories={this.showCategories} categories={this.state.categories} selectedCategory={this.state.selectedCategory} showSubCategories={this.showSubCategories}></Catalog>;
    }

    return (
      <div className="App">
        <Navigation showCategories={this.showCategories}></Navigation>
        {welcomeMessage}
        {catalogPreviewList}
      </div>
    );
  }

  showCategories = (catalogFilter) => {
    let filteredCategories = this.state.locations
      .filter(location => location.dealers_id === catalogFilter.dealerId)
      .map(location => location.branches.filter(branch => branch.branch_id === catalogFilter.branchId)
        .map(branch => branch.categories)).flat(2)
    this.setState({ showWelcome: false, catalogFilter: catalogFilter, categories: filteredCategories, selectedCategory: null })
  }

  showSubCategories = (category) => {
    if (category.subcategories !== null && category.subcategories !== undefined) {
      let subCategories = category.subcategories
      this.setState({ categories: subCategories, selectedCategory: category.name })
    }
  }
}

export default App;