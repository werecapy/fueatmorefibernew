console.log('js loaded')

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search-btn').addEventListener('click', function() {
    document.getElementById('recipe-search').classList.add('touched');
  });
});
