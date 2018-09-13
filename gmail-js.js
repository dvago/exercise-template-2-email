(function() {

  var editBannerTextButton = document.getElementById('banner-text-copy-button'),
    bannerTextSaveButton = document.querySelector('#banner-text-save'),
    bannerTextExitButton = document.querySelector('#banner-text-exit'),
    modalBanner = document.querySelector('.modal-banner'),
    editHeaderTextButton = document.getElementById('header-text-copy-button'),
    headerTextSaveButton = document.querySelector('#header-text-save'),
    headerTextExitButton = document.querySelector('#header-text-exit'),
    modalHeader = document.querySelector('.modal-header'),
    editHeaderImageButton = document.getElementById('header-image-button'),
    headerImageSaveButton = document.querySelector('#header-image-save'),
    headerImageExitButton = document.querySelector('#header-image-exit'),
    modalHeaderImage = document.querySelector('.modal-header-image'),
    editLogoImageButton = document.getElementById('logo-image-button'),
    logoImageSaveButton = document.querySelector('#logo-image-save'),
    logoImageExitButton = document.querySelector('#logo-image-exit'),
    modalLogoImage = document.querySelector('.modal-logo-image'),
    editMainTextButton = document.getElementById('main-text-copy-button'),
    mainTextSaveButton = document.querySelector('#main-text-save'),
    mainTextExitButton = document.querySelector('#main-text-exit'),
    modalMainText = document.querySelector('.modal-main-text'),
    editMainButton = document.getElementById('bttn1'),
    mainButtonSave = document.querySelector('#main-button-save'),
    mainButtonExit = document.querySelector('#main-button-exit'),
    modalMainButton = document.querySelector('.modal-main-button'),
    editImageBox1 = document.getElementById('image-box1-button'),
    imageBox1SaveButton = document.querySelector('#image-box1-save'),
    imageBox1ExitButton = document.querySelector('#image-box1-exit'),
    modalImageBox1 = document.querySelector('.modal-image-box1'),
    editImageBox2 = document.getElementById('image-box2-button'),
    imageBox2SaveButton = document.querySelector('#image-box2-save'),
    imageBox2ExitButton = document.querySelector('#image-box2-exit'),
    modalImageBox2 = document.querySelector('.modal-image-box2'),
    editBox1TextButton = document.getElementById('box1-text-copy-button'),
    box1TextSaveButton = document.querySelector('#box1-text-save'),
    box1TextExitButton = document.querySelector('#box1-text-exit'),
    modalBox1Text = document.querySelector('.modal-box1-text'),
    editBox2TextButton = document.getElementById('box2-text-copy-button'),
    box2TextSaveButton = document.querySelector('#box2-text-save'),
    box2TextExitButton = document.querySelector('#box2-text-exit'),
    modalBox2Text = document.querySelector('.modal-box2-text'),
    editBox1Button = document.getElementById('button-box-1'),
    box1ButtonSave = document.querySelector('#box1-button-save'),
    box1ButtonExit = document.querySelector('#box1-button-exit'),
    modalBox1Button = document.querySelector('.modal-box1-button'),
    editBox2Button = document.getElementById('button-box-2'),
    box2ButtonSave = document.querySelector('#box2-button-save'),
    box2ButtonExit = document.querySelector('#box2-button-exit'),
    modalBox2Button = document.querySelector('.modal-box2-button'),
    textcolourChange = document.getElementById('text-colour-select'),
    chameleonText = document.querySelectorAll('.banner-txt'),
    chameleonButton = document.querySelectorAll('.chameleon-button'),
    templateTable = document.querySelector('#template'),
    captureScreenShot = document.querySelector('#capture'),
    screenshotOptions = {
        imageTimeout: 5000,
        allowTaint: true
      };

  //Edit Banner Text Button
  editBannerTextButton.addEventListener('click', function() {
    return modalBanner.classList.contains('modal-visible') ? modalBanner.classList.remove('modal-visible') : modalBanner.classList.add('modal-visible');
  });

  //Banner Text Save Button
  bannerTextSaveButton.addEventListener('click', function() {
    var bannerText = modalBanner.querySelector('[name="banner-text-copy"]');

    editBannerTextButton.innerText = bannerText.value;
    modalBanner.classList.remove('modal-visible');
  });

  //Banner Text Exit Button
  bannerTextExitButton.addEventListener('click', function() {
    return modalBanner.classList.remove('modal-visible');
  });

  //Edit Header Text Button
  editHeaderTextButton.addEventListener('click', function() {
    return modalHeader.classList.contains('modal-visible') ? modalHeader.classList.remove('modal-visible') : modalHeader.classList.add('modal-visible');
  });

  //Header Text Save Button
  headerTextSaveButton.addEventListener('click', function() {
    var headerText = modalHeader.querySelector('[name="header-text-copy"]');

    editHeaderTextButton.innerText = headerText.value;
    modalHeader.classList.remove('modal-visible');
  });

  //Header Text Exit Button
  headerTextExitButton.addEventListener('click', function() {
    return modalHeader.classList.remove('modal-visible');
  });

  //Edit Header Image Button
  editHeaderImageButton.addEventListener('click', function() {
    return modalHeaderImage.classList.contains('modal-visible') ? modalHeaderImage.classList.remove('modal-visible') : modalHeaderImage.classList.add('modal-visible');
  });

  //Header Image Save Button
  headerImageSaveButton.addEventListener('click', function() {
    var newUrl = modalHeaderImage.querySelector('[name="header-image-url"]'),
      headerImgUpdate = document.querySelector('img[name="header-image"]').src = newUrl.value;

    modalHeaderImage.classList.remove('modal-visible');
  });

  //Header Image Exit Button
  headerImageExitButton.addEventListener('click', function() {
    return modalHeaderImage.classList.remove('modal-visible');
  });

  //Edit Logo Image Button
  editLogoImageButton.addEventListener('click', function() {
    return modalLogoImage.classList.contains('modal-visible') ? modalLogoImage.classList.remove('modal-visible') : modalLogoImage.classList.add('modal-visible');
  });

  //Logo Image Save Button
  logoImageSaveButton.addEventListener('click', function() {
    var newUrl = modalLogoImage.querySelector('[name="logo-image-url"]'),
      logoImgUpdate = document.querySelector('img[name="logo-image"]').src = newUrl.value;

    modalLogoImage.classList.remove('modal-visible');
  });

  //Logo Image Exit Button
  logoImageExitButton.addEventListener('click', function() {
    return modalLogoImage.classList.remove('modal-visible');
  });

  //Edit Main Text Button
  editMainTextButton.addEventListener('click', function() {
    return modalMainText.classList.contains('modal-visible') ? modalMainText.classList.remove('modal-visible') : modalMainText.classList.add('modal-visible');
  });

  //Main Text Save Button
  mainTextSaveButton.addEventListener('click', function() {
    var mainText = modalMainText.querySelector('[name="main-text-copy"]');

    editMainTextButton.innerText = mainText.value;
    modalMainText.classList.remove('modal-visible');
  });

  //Main Text Exit Button
  mainTextExitButton.addEventListener('click', function() {
    return modalMainText.classList.remove('modal-visible');
  });

  //Edit Main Button
  editMainButton.addEventListener('click', function() {
    return modalMainButton.classList.contains('modal-visible') ? modalMainButton.classList.remove('modal-visible') : modalMainButton.classList.add('modal-visible');
  });

  //Main Button Save 
  mainButtonSave.addEventListener('click', function() {
    var mainButton = modalMainButton.querySelector('[name="main-button-copy"]');

    editMainButton.innerText = mainButton.value;
    modalMainButton.classList.remove('modal-visible');
  });

  //Main Button Exit 
  mainButtonExit.addEventListener('click', function() {
    return modalMainButton.classList.remove('modal-visible');
  });

  //Edit Image Box1
  editImageBox1.addEventListener('click', function() {
    return modalImageBox1.classList.contains('modal-visible') ? modalImageBox1.classList.remove('modal-visible') : modalImageBox1.classList.add('modal-visible');
  });

  //Image Box1 Save Button
  imageBox1SaveButton.addEventListener('click', function() {
    var newUrl = modalImageBox1.querySelector('[name="image-box1-url"]'),
      imageBox1Update = document.querySelector('img[name="image-box1"]').src = newUrl.value;

    modalImageBox1.classList.remove('modal-visible');
  });

  //Image Box1 Exit Button
  imageBox1ExitButton.addEventListener('click', function() {
    return modalImageBox1.classList.remove('modal-visible');
  });

  //Edit Image Box2
  editImageBox2.addEventListener('click', function() {
    return modalImageBox2.classList.contains('modal-visible') ? modalImageBox2.classList.remove('modal-visible') : modalImageBox2.classList.add('modal-visible');
  });

  //Image Box2 Save Button
  imageBox2SaveButton.addEventListener('click', function() {
    var newUrl = modalImageBox2.querySelector('[name="image-box2-url"]'),
      imageBox2Update = document.querySelector('img[name="image-box2"]').src = newUrl.value;

    modalImageBox2.classList.remove('modal-visible');
  });

  //Image Box2 Exit Button
  imageBox2ExitButton.addEventListener('click', function() {
    return modalImageBox2.classList.remove('modal-visible');
  });

  //Edit Box1 Text Button
  editBox1TextButton.addEventListener('click', function() {
    return modalBox1Text.classList.contains('modal-visible') ? modalBox1Text.classList.remove('modal-visible') : modalBox1Text.classList.add('modal-visible');
  });

  //Box1 Text Save Button
  box1TextSaveButton.addEventListener('click', function() {
    var box1Text = modalBox1Text.querySelector('[name="box1-text-copy"]');

    editBox1TextButton.innerText = box1Text.value;
    modalBox1Text.classList.remove('modal-visible');
  });

  //Box1 Text Exit Button
  box1TextExitButton.addEventListener('click', function() {
    return modalBox1Text.classList.remove('modal-visible');
  });

  //Edit Box2 Text Button
  editBox2TextButton.addEventListener('click', function() {
    return modalBox2Text.classList.contains('modal-visible') ? modalBox2Text.classList.remove('modal-visible') : modalBox2Text.classList.add('modal-visible');
  });

  //Box2 Text Save Button
  box2TextSaveButton.addEventListener('click', function() {
    var box2Text = modalBox2Text.querySelector('[name="box2-text-copy"]');

    editBox2TextButton.innerText = box2Text.value;
    modalBox2Text.classList.remove('modal-visible');
  });

  //Box2 Text Exit Button
  box2TextExitButton.addEventListener('click', function() {
    return modalBox2Text.classList.remove('modal-visible');
  });

  //Edit Box 1 Button
  editBox1Button.addEventListener('click', function() {
    return modalBox1Button.classList.contains('modal-visible') ? modalBox1Button.classList.remove('modal-visible') : modalBox1Button.classList.add('modal-visible');
  });

  //Box 1 Button Save 
  box1ButtonSave.addEventListener('click', function() {
    var box1Button = modalBox1Button.querySelector('[name="box1-button-copy"]');

    editBox1Button.innerText = box1Button.value;
    modalBox1Button.classList.remove('modal-visible');
  });

  //Box 1 Button Exit 
  box1ButtonExit.addEventListener('click', function() {
    return modalBox1Button.classList.remove('modal-visible');
  });

  //Edit Box 2 Button
  editBox2Button.addEventListener('click', function() {
    return modalBox2Button.classList.contains('modal-visible') ? modalBox2Button.classList.remove('modal-visible') : modalBox2Button.classList.add('modal-visible');
  });

  //Box 2 Button Save 
  box2ButtonSave.addEventListener('click', function() {
    var box2Button = modalBox2Button.querySelector('[name="box2-button-copy"]');

    editBox2Button.innerText = box2Button.value;
    modalBox2Button.classList.remove('modal-visible');
  });

  //Box 2 Button Exit 
  box2ButtonExit.addEventListener('click', function() {
    return modalBox2Button.classList.remove('modal-visible');
  });

  // Change Text Colours

  textcolourChange.onchange = function myFunction() {
    var action = (textcolourChange.value !== 'W1') ? 'add' : 'remove';

    [].forEach.call(chameleonText, function(item) {
      item.classList[action]('banner-txt-black');
    });

    [].forEach.call(chameleonButton, function(item) {
      item.classList[action]('banner-txt-black');
    });
  }

// Screenshot

captureScreenShot.addEventListener('click', function() {
	html2canvas(templateTable, screenshotOptions).then(canvas => {
  	document.body.appendChild(canvas)
  });
});

})();
