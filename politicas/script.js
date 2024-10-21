function loadContent(file) {
    const contentDiv = document.getElementById('content');
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o conteúdo');
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            contentDiv.innerHTML = '<p>Erro ao carregar a política.</p>';
            console.error('Erro:', error);
        });
}
