document.addEventListener('DOMContentLoaded', function () {
    const search_button = document.getElementById('search_button');
    const clear_history_button = document.getElementById('clear_history_button');
    const search_input = document.getElementById('search_input');
    const search_history_list = document.getElementById('search_history_list');
  

    let search_history = JSON.parse(localStorage.getItem('search_history')) || [];
  

    function update_search_history() {
      search_history_list.innerHTML = '';
      search_history.forEach((term) => {
        const li = document.createElement('li');
        li.textContent = term;
        search_history_list.appendChild(li);
      });
    }
  

    update_search_history();
  

    search_button.addEventListener('click', function () {
      const searchTerm = search_input.value.trim();
      if (searchTerm) {

        search_history.push(searchTerm);
  

        localStorage.setItem('search_history', JSON.stringify(search_history));
  

        update_search_history();
  

        search_input.value = '';
      }
    });
  

    clear_history_button.addEventListener('click', function () {

      search_history = [];
  

      localStorage.removeItem('search_history');
  

      update_search_history();
    });
  });