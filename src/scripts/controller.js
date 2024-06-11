import * as modal from './modal';
import { adjustMainPadding } from './features/layout';
import mobileMenu from './features/mobileMenu';
import slider from './features/slider';

import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import previewView from './views/previewView';

const controlSearchResultsByName = async function () {
  try {
    // Get input value
    const queryType = 'name';
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.displaySection();
    resultsView.scrollToView();
    resultsView.loading();

    // Load search results
    await modal.loadSearchResults(queryType, query);

    // Render results
    resultsView.render(modal.getSearchResults(1));

    // Render pagination
    paginationView.render(modal.state.search);
    resultsView.scrollToView();
  } catch (error) {
    console.error(error);
  }
};

const controlSearchResultsByCategory = async function () {
  try {
    // Get input value
    const queryType = 'bodyPart';
    const query = searchView.getCategory();
    if (!query) return;

    resultsView.displaySection();
    resultsView.scrollToView();
    resultsView.loading();

    // Load search results
    await modal.loadSearchResults(queryType, query);

    // Render results
    resultsView.render(modal.getSearchResults(1));

    // Render pagination
    paginationView.render(modal.state.search);

    resultsView.scrollToView();
  } catch (error) {
    console.error(error);
  }
};

const controlPagination = function (goToPage) {
  // Render new results
  resultsView.render(modal.getSearchResults(goToPage));

  // Render new pagination
  paginationView.render(modal.state.search);

  resultsView.scrollToView();
};

const controlPreview = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;

  previewView.open();
  previewView.loading();

  await modal.loadExercise(id);

  previewView.render(modal.state.exercise);
  previewView.enableCloseEvent();
};

const app = function () {
  window.addEventListener('load', adjustMainPadding);
  mobileMenu.init();
  slider.init();
  searchView.addHandlerSearch(controlSearchResultsByName);
  searchView.addHandlerSearchCategory(controlSearchResultsByCategory);
  paginationView.addHandlerClick(controlPagination);
  previewView.addHandlerClick(controlPreview);
};
app();
