// Fonction pour ajouter une nouvelle tâche à la liste des tâches
function addTask() {
    const taskInput = document.getElementById("Tinput");
    const taskList = document.getElementById("list");

    // Vérifier si la valeur de l'entrée n'est pas vide ou ne contient que des espaces 
    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.className = "list-group-item";

        const span = document.createElement("span");
        span.innerText = taskInput.value;

        // Créer un bouton pour modifier
        const editButton = document.createElement("button");
        editButton.type = "Submit";
        editButton.className = "btn btn-primary float-right btn-sm ml-2";
        editButton.innerText = "Modifier";
        editButton.addEventListener("click", function () {
            editTask(this);
        });

        // Créer un bouton pour supprimer
        const deleteButton = document.createElement("button");
        deleteButton.type = "Submit";
        deleteButton.className = "btn btn-danger float-right btn-sm";
        deleteButton.innerText = "Supprimer";
        deleteButton.addEventListener("click", function () {
            deleteTask(this);
        });

        // Ajouter les éléments à l'élément de liste
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Ajouter le nouvel élément de liste à la liste des tâches
        taskList.appendChild(li);

        // Effacer le champ d'entrée de la tâche
        taskInput.value = "";

        // Ajouter un gestionnaire d'événements pour changer la couleur de fond en vert lorsqu'on clique sur la tâche
        li.addEventListener("click", function () {
            li.style.backgroundColor = "green";
        });
    }
}

        // Fonction pour supprimer une tâche
        function deleteTask(element) {
            const li = element.parentElement;
            const span = li.querySelector('span');

            // Demander confirmation à l'utilisateur avant de supprimer la tâche
            const confirmation = confirm(`Voulez-vous vraiment supprimer la tâche "${span.innerText}" ?`);

            if (confirmation) {
                const taskList = document.getElementById("list");
                // Supprimer l'élément de liste de la liste des tâches
                taskList.removeChild(li);
                alert("Tâche supprimée avec succès!");
            } else {
                alert("Suppression annulée.");
            }
        }



        // Fonction pour éditer une tâche
        function editTask(element) {
            const li = element.parentElement;
            const span = li.querySelector('span');
        
            // Demander une nouvelle valeur pour la tâche en utilisant une pop up
            let newTask = prompt('Modifier la tâche', span.innerText);
        
            // Vérifier si l'utilisateur a cliqué sur Annuler ou a laissé le champ vide
            while (newTask !== null && newTask.trim() === "") {
                alert("La tâche ne peut pas être vide. Veuillez saisir une valeur valide.");
                newTask = prompt('Modifier la tâche', span.innerText);
            }
        
            // Vérifier si l'utilisateur a saisi une nouvelle valeur et n'a pas annulé
            if (newTask !== null) {
                // Mettre à jour le texte
                span.innerText = newTask;
                alert("Tâche modifiée avec succès!");
            } else {
                alert("Modification annulée.");
            }
        }
        