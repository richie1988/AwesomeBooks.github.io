export default class ContentSections {
  constructor(bookManager) {
    this.bookManager = bookManager;
    this.listContent = document.querySelector('#listContent');
    this.addNewContent = document.querySelector('#addNewContent');
    this.contactContent = document.querySelector('#contactContent');

    document.querySelector('.item1 a').addEventListener('click', () => {
      this.showContent(this.listContent);
    });
    document.querySelector('.item2 a').addEventListener('click', () => {
      this.showContent(this.addNewContent);
    });
    document.querySelector('.item3 a').addEventListener('click', () => {
      this.showContent(this.contactContent);
    });

    this.hideAllContent();
  }

  hideAllContent() {
    this.listContent.style.display = 'none';
    this.addNewContent.style.display = 'none';
    this.contactContent.style.display = 'none';
  }

  showContent(contentSection) {
    this.hideAllContent();
    contentSection.style.display = 'block';
  }
}