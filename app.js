// MOBILE NAVIGATION
let mobile = document.querySelector('.mobile-nav')
let open = document.querySelector('.open')
let close = document.querySelector('.close')
let body = document.body
let mobBack = document.querySelector('.mob-back')

open.addEventListener('click', () => {
  mobile.classList.toggle('mobile-nav')
  open.classList.toggle('active')
  close.classList.toggle('active')
})
close.addEventListener('click', () => {
  mobile.classList.add('mobile-nav')
  open.classList.toggle('active')
  close.classList.toggle('active')
})

// END OF MOBILE NAVIGATION

// PRELOADER
let preloader = document.querySelector('.preloader')
window.onload = () => {
  setTimeout(() => {
    preloader.style.opacity = '0'
    preloader.style.visibilty = 'hidden'
    preloader.style.transition = 'all 0.8s'
  }, 10)
  setTimeout(() => {
    preloader.style.display = 'none'
  }, 10)
}

// MEDIA TEMPLATE

/* Initial Variables */
let musicPlayer = document.querySelector('.music-tab')
let mainHeader = document.querySelector('.main-header')
let subHeader = document.querySelector('.sub-header')
let desc = document.querySelector('.desc-text')
let musicCover = document.querySelector('.music-cover__img')
let musicCoverCD = document.querySelector('.music')
let musicID = document.querySelector('.music-container')
let audioSrc = document.querySelector('.audio-src')
let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let table = document.querySelector('.table')

/*Media Buttons */
let media = document.querySelector('.audio')
let play = document.querySelector('.play')
let repeat = document.querySelector('.repeat')
let rwd = document.querySelector('.rwd')
let fwd = document.querySelector('.fwd')
let random = document.querySelector('.random')
let intervalFwd
let intervalRwd

/* MEDIA ARRAY*/
musicTab = [
  {
    id: 0,
    name: 'Rider',
    artist: 'Juice Wlrd',
    desc: `"Rider” is the twenty-first and second to last track from Juice WRLD’s sophomore album Death Racse For Love.
                    On the Power-produced track, Juice raps about drugs, as well as wanting to see if his girlfriend, Ally Lotti’s, love is genuine.
                    The track was previewed on Juice WRLD’s Instagram Live on March 5, 2019, three days before the album’s official release.`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 1,
    name: 'Stay High',
    artist: 'Juice Wlrd',
    desc: `On “Stay High,” Juice WRLD details his substance addiction as he balances his low points in life by outweighing them by getting high. Dropping his usual references to weapons, drugs, and expensive items, he continues the theme of Legends Never Die.`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 2,
    name: 'System',
    artist: 'Dave Ft Wizkid',
    desc: `“System” is the sixth cut from Dave’s sophomore album We’re All Alone In This Together and recruits Nigerian sensation WizKid for a bouncy riddim matching the vibe of the lyrics as the pair go back-to-back flexing about their ladies, their riches and their party lifestyles.`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 3,
    name: 'Physcho',
    artist: 'Santan Dave',
    desc: `“Psycho” serves as the intro to Dave’s debut album, PSYCHODRAMA. The track, which is produced by Kyle Evans, sees Dave speak on the issues surrounding him, varying from pain to insecurities—the song emulates a therapy session and ties in with the overall theme of PSYCHODRAMA being a “year-long course of therapy.”`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 4,
    name: 'Jocelyn Flores',
    artist: 'XXXTENTACION',
    desc: `Jocelyn Flores was a friend of X who suffered from depression and committed suicide in May 2017, while staying with him in Florida for a photoshoot. He posted tweets about the situation, but they were later deleted. In an Instagram Live video, X detailed the events personally.`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 5,
    name: 'The Greatest',
    artist: 'SIA',
    desc: `The Greatest” is an uplifting song of support for the LGBT community in the wake of the 2016 Pulse nightclub mass shooting. The music video features 49 dancers (one for each victim of the shooting), with one of the dancers confirming this was intended to be a show of support`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 6,
    name: `Broken Heart`,
    artist: 'XXXTENTACION',
    desc: `This track is likely about XXXTENTACION’s ex-girlfriend, Geneva Ayala, whom much of his debut album, 17, was about. He even named the outro on the album after her.
In an interview with No Jumper that was uploaded just a day after this song’s release, X revealed that he still loves Geneva.`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 7,
    name: 'Unstoppable',
    artist: 'SIA',
    desc: `“Unstoppable” serves as an empowerment anthem which beat builds as the song progresses. The song was released as the sixth single for Sia’s seventh studio album This Is Acting, which was released on January 29, 2016.`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 8,
    name: 'Starlight',
    artist: 'DAVE',
    desc: `“Starlight” is South London superstar Dave’s first single of 2022 and the first release since the drop of his number one sophomore studio album We’re All Alone In This Together, released in July 2021.

The track samples Canada-based Indonesian duo The Macarons Project’s 2017 rendition of Frank Sinatra’s 1964 classic, “Fly Me To The Moon”`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },

  {
    id: 9,
    name: 'SAD',
    artist: 'XXXTENTACION',
    desc: `On “SAD!” X laments about the struggle of letting go of a loved one and the feeling of depression that follows. He details emotions of uncertainty surrounding a specific relationship. He is insecure and heartbroken due to the fact that his girlfriend had left him, bringing about a melancholy vibe. He also brings up suicide, a subject often discussed throughout his discography. For example, in the song “Jocelyn Flores” from his 2017 album, 17, he raps about a friend who suffered from depression and eventually killed herself.”`,
    img: function () {
      return 'img/cover/cover-' + this.id + '.jpg'
    },
    media: function () {
      return 'media/media-' + this.id + '.mp3'
    },
  },
]

if (musicID) {
  /*Player Animation */
  function scaleAnimation() {
    musicPlayer.classList.toggle('music-animation')
  }
  function restoreDefaultAni() {
    musicPlayer.classList.remove('music-animation')
  }

  /* Set Initial Default Function*/
  function setDefaultID(mTab, ID) {
    // 1. Get first item in our array
    let Item = mTab[ID]
    return Item
  }

  /* Call Set Default Function */
  let firstItemID = musicID.id
  let item = setDefaultID(musicTab, firstItemID)

  /*Content Setter Function */
  function setContent(id) {
    // Use the object content to populate the Html DOM
    mainHeader.textContent = id.name
    subHeader.textContent = id.artist
    desc.textContent = id.desc
    musicCover.src = id.img()
    musicID.id = id.id
    audioSrc.src = id.media()
    media.load()
    scaleAnimation()
    setTimeout(() => {
      restoreDefaultAni()
    }, 1500)
  }

  /*Call Set Content for default state */
  setContent(item)

  /*Next Media Function */
  function nextMedia() {
    let nextItemID = Number(musicID.id) + 1
    var x = musicTab.length - 1
    if (nextItemID <= x) {
      let nextObj = setDefaultID(musicTab, nextItemID)
      setContent(nextObj)
      restoreMediaPlayer()
    }
  }
  /*Prev Media Function */
  function prevMedia() {
    if (musicID.id > 0) {
      let prevItemID = Number(musicID.id) - 1
      let prevObj = setDefaultID(musicTab, prevItemID)
      setContent(prevObj)
      restoreMediaPlayer()
    }
  }

  /*Event Listener For Next Button */
  nextBtn.addEventListener('click', nextMedia)

  /*Event Listener For Prev Button */
  prevBtn.addEventListener('click', prevMedia)

  /*Media Functions */
  function randomSong() {
    let randID = Math.floor(Math.random() * 11)
    let randObj = setDefaultID(musicTab, randID)
    setContent(randObj)
    restoreMediaPlayer()
  }

  function pausePlayMedia() {
    if (media.paused) {
      media.play()
      play.childNodes[0].classList.toggle('fa-play')
      play.childNodes[0].classList.toggle('fa-pause')
    } else {
      media.pause()
      play.childNodes[0].classList.toggle('fa-play')
      play.childNodes[0].classList.toggle('fa-pause')
    }
  }

  function restoreMediaPlayer() {
    play.childNodes[0].classList.add('fa-play')
    play.childNodes[0].classList.remove('fa-pause')
  }

  function repeatSong() {
    if (media.paused) {
      media.play()
      media.currentTime = 0
      play.childNodes[0].classList.toggle('fa-play')
      play.childNodes[0].classList.toggle('fa-pause')
    } else {
      media.currentTime = 0
      play.childNodes[0].classList.remove('fa-play')
      play.childNodes[0].classList.add('fa-pause')
    }
  }

  /*Add Media Event Listeners */
  play.addEventListener('click', pausePlayMedia)
  fwd.addEventListener('click', nextMedia)
  rwd.addEventListener('click', prevMedia)
  repeat.addEventListener('click', repeatSong)
  random.addEventListener('click', randomSong)

  /*checking if a song is done playing */
  setInterval(() => {
    if (media.currentTime == media.duration) {
      nextMedia()
    }
  }, 5000)
}

/*Library Functions */

//Show music in library
musicTab.forEach((cur) => {
  let libTemplate = `<tr id=${cur.id}>
           <td class="lib-img">
             <img src="img/cover/cover-${cur.id}.jpg" alt="music-cover">
            </td>
             <td class="lib-header"><h3>${cur.name}</h3></td>
             <td class="lib-action-play2 hid-btn"><i class="fa-solid fa-pause"></i></td>
              <td class="lib-action-play"><i class="fa-solid fa-play"></i></td>
              <td class="lib-action-fav"><i class="fa-solid fa-heart"></i></td>
          </tr>
          `
  table.insertAdjacentHTML('afterbegin', libTemplate)
})

//Play Media Event in Library
function libraryPlayEvent() {
  let libPlay = document.querySelectorAll('.lib-action-play')
  let x = Array.prototype.slice.call(libPlay)
  x.forEach((cur) => {
    cur.addEventListener('click', libraryPlayBtn)
  })
}
libraryPlayEvent()

function libraryPlayBtn(event) {
  console.log('touched')
  var xID = event.target.parentNode.parentNode.id
  var xPN = event.target.parentNode.parentNode
  var xEL = event.target
  // Checks if audio is currently in the Dom
  var newAudio = document.querySelector('.audio')
  if (newAudio) {
    var newIcon = newAudio.parentNode.childNodes[6]
    console.log(newIcon)
    newAudio.pause() // Pauses the audio
    newAudio.parentElement.removeChild(newAudio) // Removes the audio from the Dom
    newIcon.nextElementSibling.classList.remove('hid-btn')
    newIcon.nextElementSibling.childNodes[0].classList.toggle('fa-play')
    newIcon.nextElementSibling.childNodes[0].classList.toggle('fa-pause')
    newIcon.classList.add('hid-btn') // Hides the new generated icon
    newIcon.parentNode.classList.toggle('td-active')
    newIcon.previousElementSibling.classList.remove('lib-header-bg')
    // check if it contains 'pause' class
    setInterval(() => {
      if (media.currentTime == media.duration) {
        newIcon.nextElementSibling.childNodes[0].classList.toggle('fa-play')
        newIcon.nextElementSibling.childNodes[0].classList.toggle('fa-pause')
      }
    }, 5000)
  }

  // Create audio element
  var audioTemplate = `<audio class="audio">
            <source src="${musicTab[xID].media()}" type="audio/mp3">
          </audio>`
  xPN.insertAdjacentHTML('afterbegin', audioTemplate)
  var playAud = document.querySelector('.audio')
  playAud.load()

  // Play and Pause Media
  if (playAud.paused) {
    playAud.play()
    xEL.classList.toggle('fa-play')
    xEL.classList.toggle('fa-pause')
  } else {
    playAud.pause()
    xEL.classList.toggle('fa-play')
    xEL.classList.toggle('fa-pause')
  }
  // Switches btn to play and pause second phase
  xEL.parentNode.previousElementSibling.classList.remove('hid-btn')
  xEL.parentNode.classList.add('hid-btn')
  xEL.parentNode.parentNode.classList.toggle('td-active')
  xEL.parentNode.previousElementSibling.previousElementSibling.classList.add(
    'lib-header-bg',
  )
}

// second phase play and pause function
function PlayMedia() {
  let playMedia = document.querySelectorAll('.lib-action-play2')
  let x = Array.prototype.slice.call(playMedia)
  x.forEach((cur) => {
    cur.addEventListener('click', playMediaBtn)
  })
}
PlayMedia()

// second Play and Pause Media event
function playMediaBtn(event) {
  var target = event.target
  var playAud = document.querySelector('.audio')
  if (playAud.paused) {
    playAud.play()
    target.classList.toggle('fa-play')
    target.classList.toggle('fa-pause')
  } else {
    playAud.pause()
    target.classList.toggle('fa-play')
    target.classList.toggle('fa-pause')
  }
}

//Library Media Functions
