import * as model from './model';
import { adjustMainPadding } from './features/layout';
import mobileMenu from './features/mobileMenu';
import slider from './features/slider';

import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import previewView from './views/previewView';
import bookmarksView from './views/bookmarksView';
import scheduleView from './views/scheduleView';
import shareView from './views/shareView';
import generateScheduleView from './views/generateScheduleView';
import messageView from './views/messageView';

const controlSearchResultsByName = async function () {
  try {
    // Get query and set queryType
    const queryType = 'name';
    const query = searchView.getQuery();
    if (!query) return;

    // Remove hidden class, scroll to results, render loading
    resultsView.displaySection();
    resultsView.loading();
    resultsView.scrollToView();

    // Load search results
    await model.loadSearchResults(queryType, query);

    // Render results
    resultsView.render(model.getSearchResults());

    // Render pagination
    paginationView.render(model.state.search);

    // Scroll to results
    resultsView.scrollToView();

    // Hide bookmark and schedule sections if opened
    bookmarksView.close();
    scheduleView.close();
  } catch (error) {
    // messageView.displayErrorMessage('Query not found!');
    console.error(error);
  }
};

const controlSearchResultsByCategory = async function () {
  try {
    // Get category and set queryType
    const queryType = 'bodyPart';
    const query = searchView.getCategory();
    if (!query) return;

    // Remove hidden class, scroll to results, render loading
    resultsView.displaySection();
    resultsView.loading();
    resultsView.scrollToView();

    // Load search results
    await model.loadSearchResults(queryType, query);

    // Render results
    resultsView.render(model.getSearchResults());

    // Render pagination
    paginationView.render(model.state.search);

    // Scroll to results
    resultsView.scrollToView();

    // Hide bookmark and schedule section if opened
    bookmarksView.close();
    scheduleView.close();
  } catch (error) {
    console.error(error);
  }
};

const controlPagination = function (goToPage) {
  // Render new results
  resultsView.render(model.getSearchResults(goToPage));

  // Render new pagination
  paginationView.render(model.state.search);
};

const controlPreview = async function () {
  // Get id from URL
  const id = window.location.hash.slice(1);
  if (!id) return;

  // Hide bookmark and schedule of opened
  bookmarksView.close();
  scheduleView.close();

  // Open model and render loading
  previewView.open();
  previewView.loading();

  // Load exercise
  await model.loadExercise(id);

  // Render preview
  previewView.render(model.state.exercise);

  // Observe preview modal (to make it works closing with ESC button)
  previewView.observePreview();

  // Load the preview image with loading animation
  previewView.loadImg();
};

// Control Bookmarks
const controlBookmarkState = function () {
  // Toggle bookmark add or remove
  if (model.state.exercise.bookmarked)
    model.deleteBookmark(model.state.exercise.id);
  else {
    model.addBookmark(model.state.exercise);
  }
  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);

  // Update bookmarks notifications
  bookmarksView.updateBookmarkNotification(model.state.bookmarks.length);
};

const controlBookmarks = function () {
  // Close schedule if its opened
  scheduleView.close();

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlDeleteBookmark = function (id) {
  if (!id) return;

  // Delete specify bookmark
  model.deleteBookmark(id);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);

  // Update bookmarks notifications
  bookmarksView.updateBookmarkNotification(model.state.bookmarks.length);
};

const controlClearBookmarks = function () {
  // Clear bookmarks
  model.clearBookmarks();

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);

  // Update bookmarks notifications
  bookmarksView.updateBookmarkNotification(model.state.bookmarks.length);
};

// Control Schedule
const controlSchedule = function () {
  // Close bookmarks if its opened
  bookmarksView.close();

  // Render schedule
  scheduleView.render(model.state.schedule);
};

const controlScheduleExerciseState = function () {
  // Toggle bookmark add or remove
  if (model.state.exercise.scheduled) {
    model.deleteExercise(model.state.exercise.id);
  } else {
    model.addExercise(model.state.exercise);
  }
  // Render bookmarks
  scheduleView.render(model.state.schedule);

  // Update schedule notifications
  scheduleView.updateScheduleNotification(model.state.schedule.length);
};

const controlDeleteScheduleExercise = function (id) {
  if (!id) return;

  // Delete specify bookmark
  model.deleteExercise(id);

  // Render bookmarks
  scheduleView.render(model.state.schedule);

  // Update schedule notifications
  scheduleView.updateScheduleNotification(model.state.schedule.length);
};

const controlClearSchedule = function () {
  // Clear bookmarks
  model.clearSchedule();

  // Render bookmarks
  scheduleView.render(model.state.schedule);

  // Update schedule notifications
  scheduleView.updateScheduleNotification(model.state.schedule.length);
};

const controlOpenShareModal = function () {
  const schedule = model.state.schedule;
  if (!schedule || (Array.isArray(schedule) && schedule.length === 0)) {
    messageView.displayErrorMessage('There is nothing to share!');
    return;
  }

  scheduleView.close();
  shareView.open();
};

const controlShare = async function () {
  try {
    shareView.startLoading();
    await shareView.sendSchedule(model.state.schedule);
    shareView.stopLoading();
    messageView.displaySuccessMessage('Sending successful!');
  } catch (error) {
    shareView.stopLoading();
    messageView.displayErrorMessage('Sending failed!');
    console.error(error);
  }
};

const controlOpenGenerateModal = function () {
  scheduleView.close();
  generateScheduleView.open();
};

const controlGenerateSchedule = async function () {
  try {
    // Get schedule data
    const data = [...generateScheduleView.getData()];
    // Just in case check the data
    if (!data || (Array.isArray(data) && data.length === 0)) return;

    // Render loading
    generateScheduleView.startLoading();

    // Wait for generating schedule
    await model.generateSchedule(data);

    // Render the new schedule
    scheduleView.render(model.state.schedule);
    scheduleView.updateScheduleNotification(model.state.schedule.length);

    // Close generate container
    generateScheduleView.stopLoading();
    generateScheduleView.close();
    messageView.displaySuccessMessage('Schedule generated!');

    // Open schedule view
    scheduleView.open();
  } catch (error) {
    generateScheduleView.stopLoading();
    messageView.displayErrorMessage('Something went wrong!');
    console.error(error);
  }
};

const app = function () {
  window.addEventListener('load', () => {
    adjustMainPadding();
    bookmarksView.updateBookmarkNotification(model.state.bookmarks.length);
    scheduleView.updateScheduleNotification(model.state.schedule.length);
  });
  window.addEventListener('resize', adjustMainPadding);
  mobileMenu.init();
  slider.init();

  searchView.addHandlerSearch(controlSearchResultsByName);
  searchView.addHandlerSearchCategory(controlSearchResultsByCategory);

  paginationView.addHandlerClick(controlPagination);

  previewView.addHandlerClick(controlPreview);
  previewView.addHandlerBookmarkState(controlBookmarkState);
  previewView.addHandlerScheduleExerciseState(controlScheduleExerciseState);

  bookmarksView.addHandlerClick(controlBookmarks);
  bookmarksView.addHandlerDeleteBookmark(controlDeleteBookmark);
  bookmarksView.addHandlerClearBookmarks(controlClearBookmarks);

  scheduleView.addHandlerClick(controlSchedule);
  scheduleView.addHandlerDeleteExercise(controlDeleteScheduleExercise);
  scheduleView.addHandlerClearSchedule(controlClearSchedule);
  scheduleView.addHandlerClickShare(controlOpenShareModal);
  scheduleView.addHandlerClickGenerate(controlOpenGenerateModal);

  shareView.addHandlerSubmit(controlShare);
  generateScheduleView.addHandlerSubmit(controlGenerateSchedule);
};
app();
