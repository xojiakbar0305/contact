// push qilish uchun array elon qilindi
var contacts = []

//elementlar topib olindi
var elForm = document.querySelector('.js-form')
var elInputName = elForm.querySelector('.js-input-name')
var elInputSurname = elForm.querySelector('.js-input-surname')
var elInputPhone = elForm.querySelector('.js-input-phone')
var elInputAuthor = elForm.querySelector('.js-input-author')
var elButton = elForm.querySelector('.js-button')
var elUlBox = document.querySelector('.js-box')

//formaning submit hodisasi
elForm.addEventListener('submit', function(evt) {
  evt.preventDefault()
  
  //inputlarning qiymati olindi
  var resultName = elInputName.value.trim()
  var resultSurname = elInputSurname.value.trim()
  var resultPhone = parseInt(elInputPhone.value.trim(), 10)
  var resultAuthor = elInputAuthor.value.trim()
  //inputning qiymati bosh stringa tenglab olindi  va bitta qiymatga olib qoyildi
  var resultInput = resultName === '' || resultSurname === '' || resultPhone === '' || resultAuthor === ''

//shartlar 
//inputlarning boshligi
  if (resultInput) {
    alert(`Bo'sh ma'lumot`)
    return
  }

//raqam kiritilmaganda
  if (isNaN(resultPhone)) {
    elInputPhone.value = ''
    elInputPhone.focus()
    alert('Son kiriting iltimos')
    return
  }

  //malumot chiqadigan joyining innerHtml boshatib qoyildi qayta qayta eski malumotlar chiqmasligi uchun
  elUlBox.innerHTML = ''
//arrayga object sifatida push qilindi
  contacts.push(
    {
      name: `Ism: ${resultName}`,
      surname: `Familiya: ${resultSurname}`,
      phone: `Telefon: ${resultPhone}`,
      author: `Shaxsiy: ${resultAuthor}`,
    }
  )

  // birinchi array aynalib chiqildi
  for (let i = 0; i < contacts.length; i++) {

    //yangi element elon qilindi
    var resultBox = document.createElement('ol')
    resultBox.textContent = `Kontakt`
    resultBox.classList.add('list-group', 'list-group-flush' , 'mt-4' , 'bg-light' , 'p-3')

    //arrey ichidagi objectni values olindi
    var resultContacts = Object.values(contacts[i])

    // array ichidagi objectlar aynalib chiqildi
    for (let j = 0; j < resultContacts.length; j++) {
      //yangi element elon qilindi
      var resultText = document.createElement('li')
      resultText.classList.add('list-group-item', 'mt-2', 'border-0')
      // textti tenglandi objectni ichisiga
      resultText.textContent = resultContacts[j]
      resultBox.appendChild(resultText)
    }
    //malumot chiqarildi
   elUlBox.appendChild(resultBox)
  }
  //qulayliklar
  elInputName.value = ''
  elInputSurname.value = ''
  elInputPhone.value = ''
  elInputAuthor.value = ''

})