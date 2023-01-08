const apikey = '20e5f26d-e419-46bc-ad87-dceca6b31d79';
const apihost = 'https://todo-api.coderslab.pl';

function apiListAllTasks() {
    return fetch(
        apihost + '/api/tasks',
        { headers: { 'Authorization': apikey } }
    ).then(
        function (resp) {
            if(!resp.ok) {
                alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
            }
            return resp.json();
        }
    );
}
