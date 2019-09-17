/**
 * Generates confirm block. To show this block you should use inner "show" method. Template for confirm is in View->Shared->Layout
 * @param {object} options - object with init options (required)
 * OPTIONS
 * @param {string} text - text message to be shown in popup (required)
 * @param {function} cbProceed - callback function, which will fire, when confirm button is pressed.
 * @param {function} cbCancel - callback function, which will fire, when cancel button is pressed.
 * @param {string} title - title for confirm block (default title in template - "confirm action")
 * @param {string} alertText - if you want to show additional decorated text (for instance "This action can not be undone" in alert block)
 * @param {string} alertType - bootstrap type of alert decoration (info, warning, success, danger)
 * @param {boolean} isOnlyProceed - if set to true, button 'Cancel' will be removed
 * @param {string} proceedText - if provided, button 'Proceed' text will be changed
 * @param {string} cancelText - if provided, button 'Cancel' text will be changed
 */
let ConfirmPopup = function (options) {
  if (typeof options === 'undefined') {
    throw new ReferenceError('No confirm object provided!');
  }

  if (typeof options.text !== 'string' || options.text === '') {
    throw new ReferenceError('No appropriate confirm text provided!');
  }

  let c = {
    classBlock: 'confirm',
    classBlockActive: 'confirm--active',
    classInner: 'confirm__inner',
    classTitle: 'confirm__title',
    classAlert: 'confirm__alert',
    classText: 'confirm__text',
    classButtons: 'confirm__buttons',
    classCancel: 'confirm__btn-cancel',
    classProceed: 'confirm__btn-proceed'
  }

  let confirm = this;

  this.options = {
    text: '',
    cbProceed: function () {
      return;
    },
    cbCancel: function () {
      return;
    },
    title: resources.Shared_Confirm_Title,
    alertText: '',
    alertType: 'danger',
    isOnlyProceed: false,
    proceedText: resources.Shared_Confirm,
    cancelText: resources.Shared_Cancel
  };

  this.create = function () {
    let opts = confirm.options;
    let blockElem = document.createElement('div');
    let innerElem = document.createElement('div');
    let titleElem = document.createElement('h3');
    let textElem = document.createElement('p');
    let buttonsElem = document.createElement('div');

    blockElem.classList.add(c.classBlock);
    innerElem.classList.add(c.classInner);
    titleElem.classList.add(c.classTitle);
    textElem.classList.add(c.classText);
    buttonsElem.classList.add(c.classButtons);

    textElem.innerHTML = opts.text;
    titleElem.textContent = opts.title;

    if (!opts.isOnlyProceed) {
      addConfirmBtn();
    }
    addConfirmBtn('proceed');

    innerElem.appendChild(titleElem);
    if (opts.alertText !== '') {
      innerElem.appendChild(getAlertBlock());
    }
    innerElem.appendChild(textElem);
    innerElem.appendChild(buttonsElem);

    blockElem.appendChild(innerElem);

    return blockElem;

    function addConfirmBtn(type) {
      let btn = document.createElement('button');
      let isProceed = type === 'proceed';
      let callback = isProceed ? opts.cbProceed : opts.cbCancel;

      btn.setAttribute('type', 'button');
      btn.setAttribute('class', isProceed ? 'btn btn-primary confirm__btn confirm__btn-proceed' : 'btn btn-default confirm__btn confirm__btn-cancel');
      btn.textContent = isProceed ? opts.proceedText : opts.cancelText;

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        confirm.close();

        if (typeof callback === 'function') {
          callback();
        }
      });

      buttonsElem.appendChild(btn);
    }

    function getAlertBlock() {
      let alertElem = document.createElement('div');
      alertElem.classList.add(c.classAlert, 'alert', 'alert-' + opts.alertType);
      alertElem.innerHTML = opts.alertText;

      return alertElem;
    }
  };

  this.show = function () {
    let block = confirm.create();

    document.body.appendChild(block);
    setTimeout(function () {
      block.classList.add(c.classBlockActive);
    }, 100);

    document.addEventListener('click', watchClickOuter);
  };

  this.close = function () {
    let block = document.querySelector('.' + c.classBlockActive);

    if (block) {
      block.classList.remove(c.classBlockActive);
      setTimeout(function () {
        document.body.removeChild(block);
      }, 400);
    }

    document.removeEventListener('click', watchClickOuter);
  };

  function watchClickOuter(e) {
    if (e.target.classList.contains(c.classBlock)) {
      confirm.close();
    }
  }
  function setOptions(newOptions) {
    Object.keys(newOptions).forEach(function (key) {
      if (typeof newOptions[key] === typeof confirm.options[key]) {
        confirm.options[key] = newOptions[key];
      }
    });
  }

  setOptions(options);
  this.show();
};


/**
 * Feature for popping alert notices
 * @param {string} message - text to be shown in notice
 * @param {string} type - bootstrap style of alert decoration
 */
let PanelNotice = function (message, type) {

  if (typeof message === 'undefined') {
    throw 'To create notice, you must provide text description';
  }

  let n = this;
  let c = {
    blockClass: 'notices',
    elemClass: 'notices__item',
    elemClassActive: 'notices__item--active',
    elemClassHidden: 'notices__item--hidden',
    elemCloseClass: 'notices__item-close',
    timeout: 7000 // 7 seconds
  }
  this.interval = false;

  this.showNotice = function () {
    let existingBlock = document.querySelector('.' + c.blockClass);
    let isBlockAlreadyCreated = existingBlock !== null;
    let resultBlock = (isBlockAlreadyCreated) ? existingBlock : createBlock();
    let notice = createNotice(resultBlock);

    if (!isBlockAlreadyCreated) {
      document.body.appendChild(resultBlock);
    }

    resultBlock.appendChild(notice);

    setTimeout(function () {
      notice.classList.add(c.elemClassActive);
    }, 200);

    n.interval = setTimeout(function () {
      n.removeNotice(notice, resultBlock);
    }, c.timeout);
  };
  this.removeNotice = function (item, parentBlock) {
    item.classList.add(c.elemClassHidden);
    setTimeout(function () {
      if (item) {
        parentBlock.removeChild(item);
      }
    }, 400);
    clearTimeout(n.interval);
  };

  function createBlock() {
    let block = document.createElement('div');
    block.classList.add(c.blockClass);
    return block;
  }
  function createNotice(parentBlock) {
    let notice = document.createElement('div');
    let close = document.createElement('button');
    let noticeType = (typeof type !== 'undefined') ? type : 'warning';

    notice.className = 'notices__item alert alert-dissmissable';
    notice.classList.add('alert-' + noticeType);
    notice.innerHTML = message;

    close.className = 'notices__item-close close';
    close.innerHTML = '&times;';

    notice.appendChild(close);
    close.addEventListener('click', function () {
      n.removeNotice(notice, parentBlock);
    });

    return notice;
  }

  n.showNotice();
};

function getProductInfo(handle, cbSuccess){
  let url = '/products/' + handle + '.js';
  sendAjaxRequest(null, url, null, cbSuccess, 'GET');
}
