function setStatus(newStatus) {
  status = newStatus;
  updateARText();
}

function updateARText() {
  const textEntity = document.querySelector('#statusText');
  textEntity.setAttribute('value', status === 'ok' ? '話しかけてOK' : '話しかけNG');
}
