{
    const form = document.querySelector('.createTaskForm');
    // console.log(form);
    
    form.onsubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const task = formData.get('task');

        console.log(task);
        addTask(task);
        form.reset();
    }

    const getUpdatedTemplate = (task) => `
        <div class="content">
            <button class="checkbox"></button>
            <input type="text" disabled value="${task}" class="taskInput" />
        </div>
        <div class="actions">
        <button class="star"></button>
        <button class="edit"></button>
        <button class="remove"></button>
        </div>
    `;

    const addRemoveHandler = (taskDom) => {
        const removeDom = taskDom.querySelector('.remove');
        console.log(taskDom);
        removeDom.onclick = () => taskDom.remove();
    }

    const addFavoriteHandler = (taskDom) => {
        const starDom = taskDom.querySelector('.star');

        starDom.onclick = () => {
            starDom.classList.toggle('selected');
        }
        
    }

    const addEditHandler = (taskDom) => {
        const editDom = taskDom.querySelector('.edit');

        editDom.onclick = () => {
            const taskInputDom = taskDom.querySelector('.taskInput'); 
            const isDisabled = taskInputDom.getAttribute('disabled') === null; 
            editDom.classList.toggle('selected');
            if (isDisabled) {
                taskInputDom.setAttribute('disabled', true);
            } else {
                taskInputDom.removeAttribute('disabled');
            }
        }
    }

    const addCheckboxHandler = (taskDom) => {
        const checkDom = taskDom.querySelector('.checkbox');

        checkDom.onclick = () => {
            checkDom.classList.toggle('selected');
        }
    }

    const addCheckboxHandlerAll = (tasksDom) => {
        const checkDomAll = document.querySelector('.checkbox.selectAll');
        const checkDomAllCheck = tasksDom.querySelectorAll('.checkbox');

        checkDomAll.onclick = () => {
            Array.from(checkDomAllCheck).forEach((node) => {
                if (!node.classList.contains('selected')) {
                    node.classList.add('selected');
                } 
                node.classList.add('selected');
            }); 
        }
    }

    const addTask = (task) => {
        const tasksDom = document.querySelector('.tasks');
        const taskDom = document.createElement('li');
        const inputDom = document.querySelector('.createTask');
        taskDom.innerHTML = getUpdatedTemplate(task);
        
        if (inputDom.value !== '') {
            tasksDom.prepend(taskDom);
        } 

        addRemoveHandler(taskDom);
        addFavoriteHandler(taskDom);
        addEditHandler(taskDom);
        addCheckboxHandler(taskDom);
        addCheckboxHandlerAll(tasksDom);
    }
}


