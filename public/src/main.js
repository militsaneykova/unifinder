console.log('main.js is connected');
require('isomorphic-fetch')

function completeNote(e) {
  const noteId = e.target.dataset.id;
  fetch(`/notes/${noteId}/complete`, {
    method: 'PUT',
    credentials: 'include',
  }).then(res => res.json())
    .then(jsonRes => {
      e.target.innerHTML = 'Done!';
      e.target.classList = 'done';
      e.target.removeEventListener('click', handler);
      console.log(jsonRes);
    })
}

function getAllNotes() {
  const notes = document.querySelectorAll('span.not-done');
  notes.forEach(note => {
    note.addEventListener('click', handler = (e) => completeNote(e));
  })
}

document.addEventListener('DOMContentLoaded', getAllNotes);