$(document).ready(init)

function init() {
  const img = divImg()
  const body = $('body')

  body.before(img)

  initTimeMargin()
}

function divImg() {
  var img = $('<img id="tiu" />')

  // http://i65.tinypic.com/voc18y.jpg
  img.attr('src', 'http://i67.tinypic.com/2wbvuyb.png')
  img.css('position', 'absolute')
  img.css('z-index', 0)
  img.css('display', 'none')

  img.on('load', function () {
    var width = img.css('width').replace('px', '')
    img.css('margin-left', '-' + width + 'px')
    img.css('display', 'block')
  })

  return img
}

function initTimeMargin() {
  setTimeout(increaseMargin, 1000)
}

function increaseMargin() {
  const body = $('body')
  const imgTiu = $('#tiu')

  const marginNowBody = body.css('margin-left').replace('px', '')
  const newMarginBody = parseInt(marginNowBody) + 1

  const marginNowTiu = imgTiu.css('margin-left').replace('px', '')
  const newMarginTiu = parseInt(marginNowTiu) + 1

  if (newMarginTiu === 0) {
    return finish()
  }

  body.css('margin-left', newMarginBody + 'px')
  imgTiu.css('margin-left', newMarginTiu + 'px')

  initTimeMargin()
}

function getTexts() {
  const h1 = $('<h1>O TIU CHEGO MAUHAUHAUHAU BORA PERDE NO DOTA</h1><h2>AH NÃO, FAZ O TERES AÍ</h2><h3>VOU DE EMBER MID - BF EM 30 MIN</h3>')

  h1.css('margin-left', '0')
  h1.css('text-align', 'left')
  h1.css('margin-top', '250px')

  return h1
}

function finish() {
  const body = $('body')
  const texts = getTexts()

  body.html(texts)
}

ga('create', 'UA-XXXXXXX-X', 'auto');
ga('send', 'pageview');
