
// DOM 요소 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');
const taskCount = document.getElementById('taskCount');
const prioritySelect = document.getElementById('prioritySelect');

    // 할 일 개수 업데이트 함수
    function updateTaskCount() {
        const count = taskList.querySelectorAll('li').length;
        taskCount.textContent = '현재 할 일:' + count + '개';

    }
    // 입력값 검증 및 할 일 추가 함수
    function addTask() {
    //const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    //const prioritySelect = document.getElementById("prioritySelect");
    

    

    // 입력값이 비어있는지 확인 (유효성 검증)) early-return;
    //console.log(taskText);
    if (taskText === "") {
        alert('할 일을 입력해주세요!');
        return;
    }

    //alert(taskText);

    // 새로운 리스트 아이템 생성
    const li = document.createElement("li");
    li.className = "task-item";

    // 할 일 텍스트 추가
    const span = document.createElement("span");
    span.textContent = taskText;
    //li.appendChild(span);

    // 우선 순위가 높을 경우 빨간색 텍스트 적용
    if (priority === 'high') {
        span.style.color = 'red';
    }

    // 클릭시 완료 토글
    span.addEventListener('click', function () {
        span.classList.toggle('completed');
    });

    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.className = "delete-button";
    //li.appendChild(deleteButton);
    //taskList.appendChild(li);
    
    // 삭제 버튼 이벤트 리스너. 삭제 버튼 클릭시 해당 항목 삭제
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
        updateTaskCount(); // 삭제 후 개수 갱신
    });

    // 완료 상태 토글 이벤트 리스너
    //addEventListener
    //span.classList.toggle("completed")

    // 요소 조립
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // 입력창 초기화
   // taskInput.appendChild(li);

    // 할 일 개수 업데이트
    updateTaskCount();

    // 모든 삭제 버튼에 이벤트 리스너 다시 연결 
    const deleteButtons = document.querySelectorAll('.delete-buttom');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const item = button.parentNode;
            taskList.removeChild(item);
            updateTaskCount();
        });
    });
}

     // 모든 할 일 삭제 함수
     function clearAllTasks() {  
     taskList.innerHTML = '';
     updateTaskCount(); //  개수 0으로 갱신
}

     // 추가 버튼 클릭 이벤트 적용
     addButton.addEventListener("click", addTask);
  
//addButton.addEventListener("click", function () {
//    alert("!!!@@");
//});

     // 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
     taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
     });


     // 전체 삭제 버튼 클릭 이벤트 적용
     clearButton.addEventListener('click', clearAllTasks);

