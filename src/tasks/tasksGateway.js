const baseUrl = 'https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1/todoList';

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create task');
    }; 
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json()
    }
  }).then(tasksList => 
    tasksList.map(({_id, ...task}) => ({id: _id, ...task})),
  );
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create task');
    };
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to delete task');
    };
  });
};