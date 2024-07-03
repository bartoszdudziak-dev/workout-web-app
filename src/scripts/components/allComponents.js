import { CustomHeader } from './customHeader';
import { HeroSection } from './heroSection';
import { ResultsSection } from './resultsSection';
import { PreviewModal } from './previewModal';
import { BookmarksSection } from './bookmarksSection';
import { ScheduleSection } from './scheduleSection';
import { ShareModal } from './shareModal';
import { GenerateModal } from './generateModal';
import { AboutModal } from './aboutModal';

export default (function () {
  customElements.define('custom-header', CustomHeader);
  customElements.define('hero-section', HeroSection);
  customElements.define('results-section', ResultsSection);
  customElements.define('preview-modal', PreviewModal);
  customElements.define('bookmarks-section', BookmarksSection);
  customElements.define('schedule-section', ScheduleSection);
  customElements.define('share-modal', ShareModal);
  customElements.define('generate-modal', GenerateModal);
  customElements.define('about-modal', AboutModal);
})();
