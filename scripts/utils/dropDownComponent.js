function closeAllSelect(elmnt) {
// a function that will close all select boxes in the document,
// except the current select box:
  var selectItems, y, i, xl, yl, arrNo = [];
  selectItems = document.querySelectorAll('select-items');
  y = document.querySelectorAll('select-selected');
  xl = selectItems.length;
  yl = y.length;
  for (i = 0; i < yl; i += 1) {
    if (elmnt === y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i += 1) {
    if (arrNo.indexOf(i)) {
      selectItems[i].classList.add('select-hide');
    }
  }
}

var divSort, i, j, l, ll, selectElement, a, b, c;
// look for any elements with the class "div-sort":
divSort = document.querySelectorAll('.div-sort');
l = divSort.length;
for (i = 0; i < l; i += 1) {
  selectElement = divSort[i].querySelector('select');
  ll = selectElement.length;
  // for each element, create a new DIV that will act as the selected item:
  a = document.createElement('div');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
  divSort[i].appendChild(a);
  // for each element, create a new DIV that will contain the option list:
  b = document.createElement('div');
  b.setAttribute('class', 'select-items select-hide');
  for (j = 0; j < ll; j += 1) {
    // for each option in the original select element,
    // create a new DIV that will act as an option item:
    c = document.createElement('div');
    c.innerHTML = selectElement.options[j].innerHTML;
    c.addEventListener('click', function(e) {
      // when an item is clicked, update the original select box,
      // and the selected item:
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.querySelector('select');
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i += 1) {
        if (s.options[i].innerHTML === this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.querySelectorAll('same-as-selected');
          yl = y.length;
          for (k = 0; k < yl; k += 1) {
            y[k].removeAttribute('class');
          }
          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  divSort[i].appendChild(b);
  a.addEventListener('click', function (e) {
    // when the select box is clicked, close any other select boxes,
    // and open/close the current select box:
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}

// if the user clicks anywhere outside the select box,
// then close all select boxes:
document.addEventListener('click', closeAllSelect);
