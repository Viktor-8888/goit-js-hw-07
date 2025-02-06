const allCategories = document.querySelectorAll('li.item');
console.log('Number of categories:', allCategories.length);

allCategories.forEach(function (li) {
  console.log('Category:', li.querySelector('h2').textContent);
  console.log('Elements:', li.querySelectorAll('li').length);
});
