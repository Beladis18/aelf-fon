// Gestion du comportement de la barre latérale
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.querySelector('.menu-toggle');

        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            sidebar.classList.toggle('expanded');
        });


        // Sélection des éléments
        const searchIcon = document.querySelector('.search-icon');
        const modalSearch = document.querySelector('.modal-search');
        const closeModal = document.querySelector('.close-modal');

        // Afficher le modal
        searchIcon.addEventListener('click', () => {
            modalSearch.classList.remove('d-none');
        });

        // Fermer le modal
        closeModal.addEventListener('click', () => {
            modalSearch.classList.add('d-none');
        });

        // Fermer le modal en cliquant à l'extérieur
        modalSearch.addEventListener('click', (e) => {
            if (e.target === modalSearch) {
                modalSearch.classList.add('d-none');
            }
        });

        function toggleHeart(button) {
            button.classList.toggle('active');
        }