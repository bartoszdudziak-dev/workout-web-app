import * as modal from './modal';
import { adjustMainPadding } from './features/layout';
import mobileMenu from './features/mobileMenu';

import searchViewByName from './views/searchByNameView';
import searchByCategory from './views/searchByCategory';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';

const controlSearchByNameResults = async function () {
  try {
    // Get input value
    const query = searchViewByName.getQuery();

    // Load search results
    await modal.loadSearchResultsByName(query);

    // Render results
    resultsView.scrollToResults();
    resultsView.render(modal.getSearchResults(1));

    // Render pagination
    paginationView.render(modal.state.search);
  } catch (error) {
    console.error(error);
  }
};

const controlPagination = function (goToPage) {
  resultsView.scrollToResults();
  resultsView.render(modal.getSearchResults(goToPage));

  // Render pagination
  paginationView.render(modal.state.search);
};

const app = function () {
  mobileMenu.init();
  window.addEventListener('load', adjustMainPadding);
  searchViewByName.addHandlerSearch(controlSearchByNameResults);
  paginationView.addHandlerClick(controlPagination);
};
app();
