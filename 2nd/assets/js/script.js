function showmenu() {
  const menu1 = document.getElementById('menu1');
  const menuhid = document.querySelectorAll('.menuhid');

  if (menu1.style.display === 'block') {
    menu1.style.display = 'none';
    menuhid.forEach((e) => {
      e.style.visibility = 'visible';
    });
  } else {
    menu1.style.display = 'block';
    menuhid.forEach((e) => {
      e.style.visibility = 'hidden';
    });
    menu1.className = "borred";
  }
}
