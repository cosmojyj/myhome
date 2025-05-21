// 간단한 게시판 기능 구현
const postForm = document.getElementById('postForm');
const postList = document.getElementById('postList');

postForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && message) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${name}</strong>: ${message}`;
        postList.prepend(li);
        postForm.reset();
    }
});
