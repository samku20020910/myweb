document.getElementById('issueForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issueType = document.getElementById('issueType').value;
    const description = document.getElementById('description').value;

    const messageElement = document.getElementById('message');

    if (name && email && issueType && description) {
        messageElement.textContent = '您的問題已成功提交！感謝您的回報。';
        messageElement.className = 'message success';
        messageElement.style.display = 'block';

        
        document.getElementById('issueForm').reset();
    } else {
        messageElement.textContent = '請填寫所有欄位。';
        messageElement.className = 'message error';
        messageElement.style.display = 'block';
    }
});
