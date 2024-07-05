
function openTab(tabName) {
  document.getElementById(tabName).classList.add('active');
  document.querySelector('.background').style.display = 'none';
  if (tabName === 'intro') {
document.getElementById('introVideo').play();
}
}

function closeTab(tabName) {
  document.getElementById(tabName).classList.remove('active');
  document.querySelector('.background').style.display = 'flex';
  if (tabName === 'intro') {
      document.getElementById('introVideo').pause();
}
}