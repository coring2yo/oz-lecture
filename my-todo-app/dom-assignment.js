// DOM 요소 선택
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');
const taskCount = document.getElementById('taskCount');

// 할 일 개수 업데이트 함수
function updateTaskCount() {
  const count = taskList.querySelectorAll('li').length;
  taskCount.textContent = `해야 할 일: ${count}개`;
}

// 로컬 스토리지에서 불러오기
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => renderTask(task.text, task.date));
  updateTaskCount();
}

// 로컬 스토리지에 저장
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    const text = li.querySelector('span').textContent;
    const date = li.getAttribute('data-date') || '';
    tasks.push({ text, date });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 할 일 추가
function addTask() {
  const taskText = taskInput.value.trim();
  const date = taskDate.value;

  if (taskText === '') {
    alert('할 일을 입력해주세요!');
    return;
  }

  renderTask(taskText, date);
  taskInput.value = '';
  taskDate.value = '';
  updateTaskCount();
  saveTasks();
}

// DOM에 표시하는 함수
function renderTask(taskText, date) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.setAttribute('data-date', date);

  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
    saveTasks();
  });

  const dateSpan = document.createElement('small');
  dateSpan.textContent = date ? `${date}` : '';
  dateSpan.style.marginLeft = '10px';
  dateSpan.style.color = '#666';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '✈️';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(li);
    updateTaskCount();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(dateSpan);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

// 전체 삭제
function clearAllTasks() {
  taskList.innerHTML = '';
  updateTaskCount();
  localStorage.removeItem('tasks');
}

// 이벤트 리스너 등록
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});
clearButton.addEventListener('click', clearAllTasks);

// 초기 로드
loadTasks();
