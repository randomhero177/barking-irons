$(document).ready(function() {
  var Modal = {
    config: {
      modal: '.modal-block',
      modalInner: '.modal-block__innner',
      buttonShow: '[data-modal="show"]',
      buttonClose: '[data-modal="close"]',
      activeBody: 'modal-block__body'
    },
    show: function(id){
      var c = Modal.config,
      curBlock = $('#' + id),
      inner = curBlock.find(c.modalInner);

      $(curBlock).addClass('active');
      $('body').addClass(c.activeBody);
      inner.toggle(300);
    },
    hide: function(id){
      var c = Modal.config,
      curBlock = $('#' + id),
      inner = curBlock.find(c.modalInner);
      
      $(curBlock).removeClass('active');
      $('body').removeClass(c.activeBody);
      inner.toggle(300);
    },
    buttonShow: function(){
      var c = Modal.config;
      $(c.buttonShow).click(function(e){
        e.preventDefault();
        Modal.show($(this).data('modal-id'))
      });
    },
    buttonHide: function(){
      var c = Modal.config;
      $(c.buttonClose).click(function(e){
        e.preventDefault();
        Modal.hide($(this).parents(c.modal).attr('id'))
      });
    },
    watch: function(){
      var c = Modal.config;
      $(c.modalInner).click(function(e){
        e.stopPropagation();
      })
      $(c.modal).click(function(){
        Modal.hide($(this).attr('id'));
      });
    },
    init: function(){
      Modal.buttonShow();
      Modal.buttonHide();
      Modal.watch();
    }
  }
  Modal.init();


  (function () {
    /**** search function ****/
    var block = $('.header__search-wrap'),
    menuSearchBtn = $('.main-menu__search'),
    menuCloseBtn = $('.header__search-btn');

    menuSearchBtn.click(function(e){
      e.preventDefault();
      block.toggleClass('hidden')
    });
    menuCloseBtn.click(function(e){
      e.preventDefault();
      block.addClass('hidden');
    })

    /***** Mobile dropdown ****/
    var mobileMenuItem = $('.main-menu__mobile-item');
    mobileMenuItem.each(function(i, el) {
      console.log(this);
      if($(el).has('.main-menu__mobile-dropdown').length){
        var link = $(el).find('.main-menu__mobile-link');
        link.click(function(e){
          e.preventDefault();
          $('.main-menu__mobile-dropdown').removeClass('active');
          $(el).find('.main-menu__mobile-dropdown').addClass('active');
        });
        console.log(this);
      } else {
        console.log('хуй')
      };
    })

    /**** MOBILE ICON ****/
    var mIcon = $('#mobile-menu-icon'),
      mMenu = $('#mobile-menu');
    mIcon.click(function(){
      $(this).toggleClass('active');
      mMenu.toggleClass('hidden');
    });

    /**TOGGLE common func***/

    var el = $('[data-toggle]');
    el.each(function(i, el){
      $(this).click(function(e){
        e.preventDefault();
        var href = $(this).data('href');
        $('#' + href).toggle(400);
        $(this).toggleClass('in');
      })
    });

  })();
  smoothScroll($('.goTo'));

  $('.header a[href^="http"]').not('a[href^="'+$(location).attr('hostname')+'"]').attr('target', '_blank');
  $('.footer a[href^="http"]').not('a[href^="'+$(location).attr('hostname')+'"]').attr('target', '_blank');
});
var resources = {
  ErrorMsg_NoDescription: 'Ошибка без описания',
  ServerError: 'К сожалению,на сервере произошла ошибка. Попробуйте повторить операцию позднее и, если проблема повторится, <a href="/support?pid=20895" title="Создать обращение  в службу поддержки">сообщите нам</a>',
  Shared_MaxValue: 'Максимальное значение',
  Shared_MinValue: 'Миниимальное значение',
  Shared_ClosestValue: 'Ближайшее значение',
  Shared_Next: 'Вперед',
  Shared_Prev: 'Назад',
  Shared_Required: 'Поле обязательно для заполнения',
  Shared_Incorrect_Data: 'Отправленные данные содержать ошибку. Исправьте ошибки и повторите попытку',
  ConfirmRequired: 'Необходимо подтвердить свое согласие',
  Shared_Action_Undone: 'Это действие нельзя отменить',
  Common_copy: 'Копировать',
  Common_delete: 'Удалить',
  Shared_BtnDownload: 'Скачать',
  Shared_Rename: 'Переименовать',
  Shared_Move: 'Переместить',
  Shared_Edit: 'Редактировать',
  Shared_Confirm_Title: 'Подтверждение действия',
  Shared_Confirm: 'Подтвердить',
  Shared_Cancel: 'Отменить',
  Sending: 'Отправляем...',
  Sent: 'Успешно отправлено',
  Completed_Successful_Text: 'Успешно выполнено',
  Shared_Changes_Saved: 'Изменения сохранены успешно',
  TurnOn: 'Включено',
  TurnOff: 'Выключено',
  Required: 'Поле обязательно для заполнения',
  ServerErrorTitle: 'Ошибка сервера',
  HtmlTagNotAvaliable: 'HTML-теги не допускаются',
  Upload: {
    MaxUploadFileSize: 10485760,
    MaxUploadFileSizeErrorText: 'Разрешаются только файлы со следующими расширениями: PNG, DOC, JPEG, GIF, DOC, DOCX, TXT, RTF, PDF и размером не более 10 MB',
    MaxUploadFiles: 10,
    MaxUploadFilesErrorText: 'Максимальное количество загружаемых файлов за один раз: 10',
    AllowedFileExtensionsForUpload: 'png,jpeg,jpg,gif,doc,docx,txt,rtf,pdf,zip,rar,7z,tar.bz2,tar.gz,tar,xls,xlsx,csv'
  }
};

/*
*
* @elClass - string. Class name
*
*/
function setAnchors(elClass){
  let blocks = $(elClass),
   linkElems = $('.main-menu__anchors-item a');

  blocks.each(function(i, el){
    var curId = $(el).attr('id');
    $(linkElems[i]).attr('href', '#' + curId);
    smoothScroll(linkElems[i]);
  })
};

// Select all links with hashes
function smoothScroll(elem){
  $(elem).click(function(event) {
    event.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      $('html, body').animate({
        scrollTop: target.offset().top - $('.header').height()
      }, 1000);
    }
  });
};



function equalHeights(elements) {
  if (elements.length > 0) {
    var height = 0;
    elements.each(function () {
      $(this).css('height', '');
      if ($(this).outerHeight() > height) {
        height = $(this).outerHeight();
      }
    });
    elements.css('height', height);
  }
}



/**
* Constructor for increase/decrease element. Must have html-structure like in "OnceCloud.Web.Panel\Views\UnocCompany\Create.cshtml"
* Requires jQuery
* @param {node} obj - DOM object of amount block
* @param {function} cbIncrease - callback function for clicking on increase button (optional)
* @param {function} cbDecrease - callback function for clicking on decrease button (optional)
* @param {function} customErrFunc - extra function for handling error cases (optional)
*/
var Amount = function (obj, cbIncrease, cbDecrease, customErrFunc) {
var amount = this,
  btnIncrease = obj.querySelector('.amount__increase'),
  btnDecrease = obj.querySelector('.amount__decrease'),
  input = obj.querySelector('.amount__input'),
  min = Number(input.min),
  max = Number(input.max),
  step = (input.step) ? Number(input.step) : 1,
  errMsgConfig = {
    max: resources.Shared_MaxValue + ': ',
    min: resources.Shared_MinValue + ': ',
    closest: resources.Shared_ClosestValue + ': '
  };

this.increaseAmount = function () {
  var prevVal = Number(input.value);
  if (prevVal + step > max) {
    return false;
  } else {
    input.value = prevVal + step;
    btnIncrease.disabled = (prevVal + step * 2 > max) ? true : false;
    btnDecrease.disabled = false;

    if (typeof cbIncrease === 'function') {
      cbIncrease();
    }
  }
};

this.decreaseAmount = function (prevVal) {
  var prevVal = Number(input.value);
  if (prevVal - step < min) {
    return false;
  } else {
    input.value = prevVal - step;
    btnDecrease.disabled = (prevVal - step * 2 < min) ? true : false;
    btnIncrease.disabled = false;

    if (typeof cbDecrease === 'function') {
      cbDecrease();
    }
  }
};

this.init = function () {
  var timeout;
  if (typeof btnIncrease === 'undefined' || typeof btnDecrease === 'undefined') {
    return false;
  } else {
    if (Number(input.value) === min) {
      btnDecrease.disabled = true;
    }
    if (Number(input.value) === max) {
      btnIncrease.disabled = true;
    }

    if (typeof customErrFunc === 'function') {
      amount.showError = customErrFunc;
    }

    btnIncrease.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      amount.increaseAmount();
    });

    btnDecrease.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      amount.decreaseAmount();
    });

    input.addEventListener('keyup', function (e) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        amount.checkBtn();
        amount.inputChange();
        cbIncrease();
      }, 800)
    });
    $(input).on('change', function (e) {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        amount.checkBtn();
        amount.inputChange();
        cbIncrease();
      }, 800)
    });
  }
}

this.checkBtn = function () {
  if (Number(input.value) === min) {
    btnDecrease.disabled = true;
  } else {
    btnDecrease.disabled = false;
  };
  if (Number(input.value) === max) {
    btnIncrease.disabled = true;
  } else {
    btnIncrease.disabled = false;
  };
};

this.inputChange = function () {
  input.value = Math.ceil(input.value);
  var curStep = (Number(input.value) - min) / step;
  if (curStep % 1 !== 0) {
    input.value = Math.ceil(curStep) * step + min;
    amount.showError(errMsgConfig.closest + input.value);
  };
  if (Number(input.value) > max) {
    input.value = max;
    amount.showError(errMsgConfig.max + max);
  };
  if (Number(input.value) < min) {
    input.value = min;
    amount.showError(errMsgConfig.min + min);
  };

};

this.showError = function (msg) {
  amount.removeErr();
  var parentBlock = $(input).parent();
  $('<span class="amount-tooltip amount-tooltip--active">' + msg + '</span>').hide().insertAfter(parentBlock).fadeIn(400);
  setTimeout(amount.removeErr, 5000);
};

this.removeErr = function () {
  if ($(input).parent().next('.amount-tooltip').length > 0) {
    $(input).parent().next('.amount-tooltip').remove();
  }
};

this.init();
};


function sendAjaxRequest(blockId, url, obj, successFunction, errFunction, type) {
  // submitting trigger must have [type="submit"] attribute or class 'btn-send'
  $.ajax({
    type: (typeof type !== 'undefined') ? type : 'POST',
    context: document.body,
    url: url,
    data: obj,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    success: function (data) {
      if (typeof data !== 'undefined' && data.redirectTo) {
        window.location.href = data.redirectTo;
      } else {
        if (typeof successFunction === 'function') {
          successFunction(data);
        }
      }
    },
    error: function (data, status) {
      console.log(data, status);
      if (typeof errorFunction === 'function') {
        errorFunction(errMsg);
      };
    }
  });
};
