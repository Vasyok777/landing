document.addEventListener('DOMContentLoaded', function () {
	const buttonMovers = document.getElementById('our-help__tab-private')
	const buttonRecently = document.getElementById('our-help__tab-family')
	const buttonMarket = document.getElementById('our-help__tab-corporates')
	const buttonSpan = document.getElementById('our-help__span-tabs')
	const contentOne = document.getElementById('our-help__content-one')
	const contentTwo = document.getElementById('our-help__content-two')
	const contentThree = document.getElementById('our-help__content-three')

	buttonRecently.addEventListener('click', () => {
		buttonRecently.classList.add('active')
		buttonMovers.classList.remove('active')
		buttonMarket.classList.remove('active')
		buttonSpan.classList.remove('tab-three')
		buttonSpan.classList.add('active')
		buttonSpan.classList.add('active')
		contentOne.classList.remove('d-block')
		contentTwo.classList.add('d-block')
		contentThree.classList.remove('d-block')
	})
	buttonMovers.addEventListener('click', () => {
		buttonRecently.classList.remove('active')
		buttonMovers.classList.add('active')
		buttonMarket.classList.remove('active')
		buttonSpan.classList.remove('tab-three')
		buttonSpan.classList.remove('active')
		contentOne.classList.add('d-block')
		contentTwo.classList.remove('d-block')
		contentThree.classList.remove('d-block')
	})
	buttonMarket.addEventListener('click', () => {
		buttonRecently.classList.remove('active')
		buttonMovers.classList.remove('active')
		buttonMarket.classList.add('active')
		buttonSpan.classList.remove('active')
		buttonSpan.classList.add('tab-three')
		contentOne.classList.remove('d-block')
		contentTwo.classList.remove('d-block')
		contentThree.classList.add('d-block')
	})
})
document.addEventListener('DOMContentLoaded', function () {
	const toggleButtons = document.querySelectorAll('.cater-item__question-ask')

	toggleButtons.forEach((button, index) => {
		button.addEventListener('click', function () {
			const box = this.closest('.cater-item__question')
			const body = box.querySelector('.cater-item__question-text')
			const title = box.querySelector('.cater-item__question-img')

			toggleButtons.forEach((otherButton, otherIndex) => {
				if (otherIndex !== index) {
					const otherBox = otherButton.closest('.cater-item__question')
					const otherBody = otherBox.querySelector('.cater-item__question-text')
					const otherTitle = otherBox.querySelector('.cater-item__question-img')

					otherBody.classList.remove('active')
					otherBody.style.maxHeight = null
					otherTitle.classList.remove('rotate')
				}
			})

			const buttonText = title.textContent

			if (body.style.maxHeight) {
				body.classList.remove('active')
				body.style.maxHeight = null
				title.classList.remove('rotate')
			} else {
				body.style.maxHeight = body.scrollHeight + 'px'
				body.classList.add('active')
				title.classList.add('rotate')
			}
		})
	})
})
const swiper = new Swiper('.partners__swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	slidesPerGroup: 1,
	slidesPerMove: 1,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.partners__swiper-button-next',
		prevEl: '.partners__swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 10,
			slidesPerMove: 2,
			slidesPerGroup: 2,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
			slidesPerMove: 3,
			slidesPerGroup: 3,
		},
	},
	on: {
		init: function () {
			updatePaginationInfo(this)
		},
		slideChange: function () {
			updatePaginationInfo(this)
		},
	},
})

function updatePaginationInfo(swiper) {
	const currentSlide =
		Math.ceil(swiper.realIndex / swiper.params.slidesPerGroup) + 1
	const totalSlides = Math.ceil(
		swiper.slides.length / swiper.params.slidesPerGroup
	)

	const centerElement = document.querySelector(
		'.partners__swiper-button-center'
	)
	if (centerElement) {
		centerElement.innerHTML = `
					<div class="partners__swiper-current">${currentSlide}</div>
					of
					<div class="partners__swiper-allsliders">${totalSlides}</div>
			`
	}
}
