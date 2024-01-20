function addItem() {
  const text = document.getElementById('newItemText').value;
  const li = document.createElement('li');
  li.textContent = text;
  const deleteBtn = document.createElement('a');
  deleteBtn.href = '#';
  deleteBtn.textContent = '[Delete]';
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', () => li.remove())
  const list = document.getElementById('items');
  list.appendChild(li);

}