(function () {
	"use strict";

	window.onload = function () {

		// Preloader JS
		const getPreloaderId = document.getElementById('preloader');
		if (getPreloaderId) {
			getPreloaderId.style.display = 'none';
		}

		// Header Sticky
		const getHeaderId = document.getElementById("header-area");
		if (getHeaderId) {
			window.addEventListener('scroll', event => {
				const height = 150;
				const { scrollTop } = event.target.scrollingElement;
				document.querySelector('#header-area').classList.toggle('sticky', scrollTop >= height);
			});
		}

		// Header Sticky
		const getNavbarId = document.getElementById("navbar");
		if (getNavbarId) {
			window.addEventListener('scroll', event => {
				const height = 150;
				const { scrollTop } = event.target.scrollingElement;
				document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
			});
		}
	};

	// Menu JS
	let menu, animate;

	(function () {
		// Initialize menu
		let layoutMenuEl = document.querySelectorAll('#layout-menu');
		layoutMenuEl.forEach(function (element) {
			menu = new Menu(element, {
				orientation: 'vertical',
				closeChildren: false
			});
			// Change parameter to true if you want scroll animation
			window.Helpers.scrollToActive((animate = false));
			window.Helpers.mainMenu = menu;
		});

	})();

	// Sidebar Burger Button
	const getSidebarBurgerMenuId = document.getElementById('sidebar-burger-menu');
	if (getSidebarBurgerMenuId) {
		const switchtoggle = document.querySelector(".sidebar-burger-menu");
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-data-theme") === "sidebar-hide") {
				document.body.setAttribute("sidebar-data-theme", "sidebar-show");
			} else {
				document.body.setAttribute("sidebar-data-theme", "sidebar-hide");
			}
		});
	}

	// Sidebar Burger Close Button
	const getSidebarBurgerMenuCloseId = document.getElementById('sidebar-burger-menu-close');
	if (getSidebarBurgerMenuCloseId) {
		const switchtoggle = document.querySelector(".sidebar-burger-menu-close");
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-data-theme") === "sidebar-hide") {
				document.body.setAttribute("sidebar-data-theme", "sidebar-show");
			} else {
				document.body.setAttribute("sidebar-data-theme", "sidebar-hide");
			}
		});
	}

	// Header Burger Button
	const getHeaderBurgerMenuId = document.getElementById('header-burger-menu');
	if (getHeaderBurgerMenuId) {
		const switchtoggle = document.querySelector(".header-burger-menu");
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-data-theme") === "sidebar-hide") {
				document.body.setAttribute("sidebar-data-theme", "sidebar-show");
			} else {
				document.body.setAttribute("sidebar-data-theme", "sidebar-hide");
			}
		});
	}

	// Init BS Tooltip
	const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	// Simple Calendar JS
	const getCalendarBodyId = document.getElementById('calendarBody');
	if (getCalendarBodyId) {

		const calendarBody = document.getElementById('calendarBody');
		const monthSelect = document.getElementById('monthSelect');
		const yearSelect = document.getElementById('yearSelect');
		const prevMonthBtn = document.getElementById('prevMonth');
		const nextMonthBtn = document.getElementById('nextMonth');

		const currentDate = new Date();
		let selectedMonth = currentDate.getMonth();
		let selectedYear = currentDate.getFullYear();

		const monthNames = [
			"January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];

		function populateMonthAndYearSelectors() {
			// Populate month select
			monthNames.forEach((month, index) => {
				const option = document.createElement('option');
				option.value = index;
				option.textContent = month;
				monthSelect.appendChild(option);
			});

			// Populate year select (20 years before and after current year)
			for (let i = currentDate.getFullYear() - 20; i <= currentDate.getFullYear() + 20; i++) {
				const option = document.createElement('option');
				option.value = i;
				option.textContent = i;
				yearSelect.appendChild(option);
			}
		}

		function generateCalendar(month, year) {
			calendarBody.innerHTML = ''; // Clear previous calendar
			const firstDayOfMonth = new Date(year, month, 1).getDay();
			const daysInMonth = new Date(year, month + 1, 0).getDate();
			const daysInPrevMonth = new Date(year, month, 0).getDate();

			let date = 1;
			let prevMonthDate = daysInPrevMonth - firstDayOfMonth + 1;
			let nextMonthDate = 1;
			const today = new Date();

			for (let i = 0; i < 5; i++) {
				const row = document.createElement('tr');

				for (let j = 0; j < 7; j++) {
				const cell = document.createElement('td');

				if (i === 0 && j < firstDayOfMonth) {
					cell.textContent = prevMonthDate++;
					cell.classList.add('prev-month');
				} else if (date > daysInMonth) {
					cell.textContent = nextMonthDate++;
					cell.classList.add('next-month');
				} else {
					cell.textContent = date;
					if (
					year === today.getFullYear() &&
					month === today.getMonth() &&
					date === today.getDate()
					) {
					cell.classList.add('current-day');
					}
					date++;
				}
				row.appendChild(cell);
				}
				calendarBody.appendChild(row);

				if (date > daysInMonth && nextMonthDate > 7) {
				break;
				}
			}
		}

		function updateCalendar() {
			generateCalendar(selectedMonth, selectedYear);
			monthSelect.value = selectedMonth;
			yearSelect.value = selectedYear;
		}

		monthSelect.addEventListener('change', (e) => {
			selectedMonth = parseInt(e.target.value);
			updateCalendar();
		});

		yearSelect.addEventListener('change', (e) => {
			selectedYear = parseInt(e.target.value);
			updateCalendar();
		});

		prevMonthBtn.addEventListener('click', () => {
			if (selectedMonth === 0) {
				selectedMonth = 11;
				selectedYear--;
			} else {
				selectedMonth--;
			}
			updateCalendar();
		});

		nextMonthBtn.addEventListener('click', () => {
			if (selectedMonth === 11) {
				selectedMonth = 0;
				selectedYear++;
			} else {
				selectedMonth++;
			}
			updateCalendar();
		});

		// Initialize the calendar
		populateMonthAndYearSelectors();
		updateCalendar();
	}

	// Courses Slider JS
	var swiper = new Swiper(".courses-slide", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: true, 
		//effect: "fade",
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
    });

	// Range Price Slide JS
	const getPriceSlidersId = document.querySelectorAll('price-slider');
	if (getPriceSlidersId) {
		const rangeInput = document.querySelectorAll(".range-input input"),
		priceInput = document.querySelectorAll(".price-input input"),
		range = document.querySelector(".slider .progress");
		let priceGap = 1000;

		priceInput.forEach((input) => {
			input.addEventListener("input", (e) => {
				let minPrice = parseInt(priceInput[0].value),
				maxPrice = parseInt(priceInput[1].value);

				if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
					if (e.target.className === "input-min") {
						rangeInput[0].value = minPrice;
						range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
					} else {
						rangeInput[1].value = maxPrice;
						range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
					}
				}
			});
		});

		rangeInput.forEach((input) => {
			input.addEventListener("input", (e) => {
				let minVal = parseInt(rangeInput[0].value),
				maxVal = parseInt(rangeInput[1].value);

				if (maxVal - minVal < priceGap) {
					if (e.target.className === "range-min") {
						rangeInput[0].value = maxVal - priceGap;
					} else {
						rangeInput[1].value = minVal + priceGap;
					}
					} else {
					priceInput[0].value = minVal;
					priceInput[1].value = maxVal;
					range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
					range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
				}
			});
		});
	}
	
	// Add To Cart Js
	const getAddToCartId = document.querySelectorAll('add-to-cart');
	if (getAddToCartId) {
		try {
			const decrementBtn = document.getElementById("decrement");
			const incrementBtn = document.getElementById("increment");
			const countDisplay = document.getElementById("count");

			let count = 1;

			decrementBtn.addEventListener("click", () => {
				if (count > 1) {
					count--;
					countDisplay.textContent = count;
				}
			});
			incrementBtn.addEventListener("click", () => {
				count++;
				countDisplay.textContent = count;
			});
		} catch (err) { }
	}

	// File Uploads JS
	const getFileUploadsId = document.querySelectorAll('file-uploads');
	if (getFileUploadsId) {
		try {
			const multipleEvents = (element, eventNames, listener) => {
				const events = eventNames.split(' ');
			
				events.forEach(event => {
					element.addEventListener(event, listener, false);
				});
			};
			const fileUpload = () => {
				const INPUT_FILE = document.querySelector('#upload-files');
				const INPUT_CONTAINER = document.querySelector('#upload-container');
				const FILES_LIST_CONTAINER = document.querySelector('#files-list-container')
				const FILE_LIST = [];
			
				multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
					INPUT_CONTAINER.classList.add('active');
				});
				
				multipleEvents(INPUT_FILE, 'dragleave dragend drop change', () => {
					INPUT_CONTAINER.classList.remove('active');
				});
				
				INPUT_FILE.addEventListener('change', () => {
				const files = [...INPUT_FILE.files];
				
				files.forEach(file => {
					const fileURL = URL.createObjectURL(file);
					const fileName = file.name;
					const uploadedFiles = {
						name: fileName,
						url: fileURL,
					};
					
					FILE_LIST.push(uploadedFiles);
				});
				FILES_LIST_CONTAINER.innerHTML = '';
				FILE_LIST.forEach(addedFile => {
					const content = `
						<div class="form__files-container">
						<span class="form__text">${addedFile.name}</span>
						<div>
							<a class="form__icon" href="${addedFile.url}" target="_blank" title="Preview">&#128065;</a>
						</div>
						</div>
					`;
			
					FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
					});
				});
			};
			fileUpload();
		} catch { }
	}
	
	// Tags JS
	const getTagsId = document.querySelectorAll('tagContainer');
	if (getTagsId) {
		document.addEventListener('DOMContentLoaded', function () {
			const tagContainer = document.getElementById('tagContainer');
			const tagInput = document.getElementById('tagInput');
			if (tagInput) {
				tagInput.addEventListener('keydown', function (event) {
					if (event.key === 'Enter' && tagInput.value.trim() !== '') {
						createTag(tagInput.value.trim());
						tagInput.value = '';
					}
				});
			}
			function createTag(tagText) {
				const tag = document.createElement('div');
				tag.classList.add('tag');
				tag.innerHTML = `${tagText} <span class="tag-close">&#10006;</span>`;
	
				tag.querySelector('.tag-close').addEventListener('click', function () {
					tag.remove();
				});
	
				tagContainer.appendChild(tag);
			}
		});
	}

	// Quill Editor JS
	try {
		const getEditorId = document.getElementById('editor-container');
		if (getEditorId) {
			let quill = new Quill('#editor-container', {
				modules: {
					syntax: true,
					toolbar: '#toolbar-container'
				},
				placeholder: 'Write your message here',
				theme: 'snow'
			});
		}
	} catch { }

	// Thumb Images Upload JS
	const getImagePreviewId = document.getElementById('imagePreview');
	if (getImagePreviewId) {
		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function(e) {
					var imagePreview = document.getElementById('imagePreview');
					imagePreview.style.backgroundImage = 'url(' + e.target.result + ')';
					imagePreview.style.display = 'none';
					setTimeout(function() {
						imagePreview.style.display = 'block';
						imagePreview.style.transition = 'opacity 0.65s';
						imagePreview.style.opacity = 1;
					}, 0);
				};
				reader.readAsDataURL(input.files[0]);
			}
		}
		
		document.getElementById('imageUpload').addEventListener('change', function() {
			readURL(this);
		});
	}

	// Active And Remove JS
	const getActiveClassId = document.getElementById('active-class');
	if (getActiveClassId) {
		// Select all elements with the class 'menu-item'
		const listItems = document.querySelectorAll('.menu-item');

		// Function to remove the 'active' class from all items
		function removeActiveClass() {
			listItems.forEach(item => item.classList.remove('active'));
		}

		// Add click event listeners to each list item
		listItems.forEach(item => {
			item.addEventListener('click', function () {
				// Remove 'active' class from all items
				removeActiveClass();
				
				// Add 'active' class to the clicked item
				this.classList.add('active');
			});
		});

	}

	// myTable
	const getHeadersBurgerMenuId = document.getElementById('myTable');
	if (getHeadersBurgerMenuId) {
		let x = new RdataTB('myTable');
	}

	// Password Show Hide JS
	const getPasswordShowHideId = document.getElementById('password-show-hide');
	if (getPasswordShowHideId) {
		const passwordContainers = document.querySelectorAll(".password-container");

		passwordContainers.forEach((container) => {
			const passwordInput = container.querySelector(".password");
			const passwordToggleIcon = container.querySelector(".password-toggle-icon");

			if (passwordInput && passwordToggleIcon) {
				passwordToggleIcon.addEventListener("click", function () {
					if (passwordInput.type === "password") {
						passwordInput.type = "text";
						passwordToggleIcon.classList.remove("ri-eye-off-line");
						passwordToggleIcon.classList.add("ri-eye-line");
					} else {
						passwordInput.type = "password";
						passwordToggleIcon.classList.remove("ri-eye-line");
						passwordToggleIcon.classList.add("ri-eye-off-line");
					}
				});
			}
		});
	}

	// Event Calendar JS
	const getEventCalendarId = document.getElementById('calendar');
    if (getEventCalendarId) {
        document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                headerToolbar: {
                    right: 'today,prev,next',
                    left: 'title',
                },
                initialDate: new Date(), // Muestra siempre la fecha actual
                navLinks: true, // can click day/week names to navigate views
                businessHours: true, // display business hours
                editable: true,
                selectable: true,
                events: [
                    {
                        title: 'Consultation with Doctor',
                        start: '2024-12-29',
                        className: 'danger'
                    },
                    {
                        title: 'Consultation with Doctor',
                        start: '2025-01-29',
                        className: 'danger'
                    },
                    {
                        title: '10:00 - 12:30 PM Annual Conference 2023',
                        start: '2025-02-29',
                        className: 'success'
                    },
                    {
                        title: '6:00 - 9:00 PM Product Lunch Webinar',
                        start: '2025-03-29',
                        className: 'primary-div'
                    },
                    {
                        title: '9:00 - 12:00 PM Web Development Seminar',
                        start: '2025-04-29',
                        className: 'danger'
                    },
					{
                        title: 'Consultation with Doctor',
                        start: '2025-05-29',
                        className: 'danger'
                    },
                    {
                        title: '2:30 - 5:00 PM Tech Summit 2025',
                        start: '2025-06-29',
                        className: 'primary'
                    },
                    {
                        title: '6:00 - 9:00 PM Product Lunch Webinar',
                        start: '2025-07-29',
                        className: 'primary-div'
                    },
                    {
                        title: '9:00 - 12:00 PM Web Development Seminar',
                        start: '2025-08-29',
                        className: 'danger'
                    },
					{
                        title: 'Consultation with Doctor',
                        start: '2025-10-29',
                        className: 'danger'
                    },
                    {
                        title: '2:30 - 5:00 PM Tech Summit 2025',
                        start: '2025-11-29',
                        className: 'primary'
                    },
                    {
                        title: '6:00 - 9:00 PM Product Lunch Webinar',
                        start: '2025-07-29',
                        className: 'primary-div'
                    },
                    {
                        title: '9:00 - 12:00 PM Web Development Seminar',
                        start: '2025-12-29',
                        className: 'danger'
                    },
                ],
            }); 
            calendar.render();
        });
    }

	// Days, Hrs, Min, Sec JS 
	const getCountDownId = document.getElementsByClassName('clockdiv');
	if (getCountDownId) {
		document.addEventListener('readystatechange', event => {
			if (event.target.readyState === "complete") {
				var clockdiv = document.getElementsByClassName("clockdiv");
				var countDownDate = new Array();
					for (var i = 0; i < clockdiv.length; i++) {
						countDownDate[i] = new Array();
						countDownDate[i]['el'] = clockdiv[i];
						countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
						countDownDate[i]['days'] = 0;
						countDownDate[i]['hours'] = 0;
						countDownDate[i]['seconds'] = 0;
						countDownDate[i]['minutes'] = 0;
					}
					var countdownfunction = setInterval(function() {
						for (var i = 0; i < countDownDate.length; i++) {
						var now = new Date().getTime();
						var distance = countDownDate[i]['time'] - now;
						countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
						countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
						if (distance < 0) {
							countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
						}
						else {
							countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
							countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
							countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
							countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
						}
					}  
				}, 1000);
			}
		});
	}

	// Clipboard
	new ClipboardJS('.copy-btn');

	// From Validation
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(() => {
		'use strict'

		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll('.needs-validation')

		// Loop over them and prevent submission
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
	})()

	// Select all buttons with the class 'like-button' Favorite Button
	document.querySelectorAll('.wish-btn').forEach(button => {
		// Add click event listener to each button
		button.addEventListener('click', () => {
		// Toggle 'liked' class
			button.classList.toggle('favorite-d');
		});
	});

	// Review Rating
	const ratings = document.querySelectorAll('.rating');
	ratings.forEach(rating => {
		rating.addEventListener('click', () => {
			// reset all ratings to default state
			ratings.forEach(rating => {
				rating.classList.remove('active');
			});

			// add active class to clicked rating and all previous ratings
			rating.classList.add('active');
			let prevRating = rating.previousElementSibling;
			while (prevRating) {
				prevRating.classList.add('active');
				prevRating = prevRating.previousElementSibling;
			}
		});
	});
	
	
	// Theme Settings
	// Dark/Light Toggle
	const getSwitchToggleId = document.getElementById('switch-toggle');
	if (getSwitchToggleId) {
		const switchtoggle = document.querySelector(".switch-toggle");
		const savedTheme = localStorage.getItem("fila_theme");
		if (savedTheme) {
			document.body.setAttribute("data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("data-theme") === "dark") {
				document.body.setAttribute("data-theme", "light");
				localStorage.setItem("fila_theme", "light");
			} else {
				document.body.setAttribute("data-theme", "dark");
				localStorage.setItem("fila_theme", "dark");
			}
		});
	}

	// Only Sidebar Light & Dark
	const getSidebarToggleId = document.getElementById('sidebar-light-dark');
	if (getSidebarToggleId) {
		const switchtoggle = document.querySelector(".sidebar-light-dark");
		const savedTheme = localStorage.getItem("fila_theme");
		if (savedTheme) {
			document.body.setAttribute("sidebar-dark-light-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("sidebar-dark-light-data-theme") === "sidebar-dark") {
				document.body.setAttribute("sidebar-dark-light-data-theme", "sidebar-light");
				localStorage.setItem("fila_theme", "sidebar-light");
			} else {
				document.body.setAttribute("sidebar-dark-light-data-theme", "sidebar-dark");
				localStorage.setItem("fila_theme", "sidebar-dark");
			}
		});
	}

	// Only Header Light & Dark
	const getHeaderToggleId = document.getElementById('header-light-dark');
	if (getHeaderToggleId) {
		const switchtoggle = document.querySelector(".header-light-dark");
		const savedTheme = localStorage.getItem("fila_theme");
		if (savedTheme) {
			document.body.setAttribute("header-dark-light-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("header-dark-light-data-theme") === "header-dark") {
				document.body.setAttribute("header-dark-light-data-theme", "header-light");
				localStorage.setItem("fila_theme", "header-light");
			} else {
				document.body.setAttribute("header-dark-light-data-theme", "header-dark");
				localStorage.setItem("fila_theme", "header-dark");
			}
		});
	}

	// Icon Sidebar
	const getIconSidebarToggleId = document.getElementById('icon-sidebar');
	if (getIconSidebarToggleId) {
		const switchtoggle = document.querySelector(".icon-sidebar");
		const savedTheme = localStorage.getItem("fila_theme");
		if (savedTheme) {
			document.body.setAttribute("icon-sidebar-none-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("icon-sidebar-none-data-theme") === "icon-sidebar-none-switch") {
				document.body.setAttribute("icon-sidebar-none-data-theme", "icon-sidebar-block-switch");
				localStorage.setItem("fila_theme", "icon-sidebar-block-switch");
			} else {
				document.body.setAttribute("icon-sidebar-none-data-theme", "icon-sidebar-none-switch");
				localStorage.setItem("fila_theme", "icon-sidebar-none-switch");
			}
		});
	}

	// Right Sidebar
	const getRightSidebarId = document.getElementById('right-sidebar');
	if (getRightSidebarId) {
		const switchtoggle = document.querySelector(".right-sidebar");
		const savedTheme = localStorage.getItem("fila_theme");
		if (savedTheme) {
			document.body.setAttribute("right-sidebar-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("right-sidebar-data-theme") === "right-sidebar-normal") {
				document.body.setAttribute("right-sidebar-data-theme", "right-sidebar-right");
				localStorage.setItem("fila_theme", "right-sidebar-right");
			} else {
				document.body.setAttribute("right-sidebar-data-theme", "right-sidebar-normal");
				localStorage.setItem("fila_theme", "right-sidebar-normal");
			}
		});
	}

	// Card Radius & Square
	const getRadiusSquaresToggleId = document.getElementById('card-radius-square');
	if (getRadiusSquaresToggleId) {
		const switchtoggle = document.querySelector(".card-radius-square");
		const savedTheme = localStorage.getItem("fila_theme");
		if (savedTheme) {
			document.body.setAttribute("card-radius-square-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("card-radius-square-data-theme") === "card-square") {
				document.body.setAttribute("card-radius-square-data-theme", "card-radius");
				localStorage.setItem("fila_theme", "card-radius");
			} else {
				document.body.setAttribute("card-radius-square-data-theme", "card-square");
				localStorage.setItem("fila_theme", "card-square");
			}
		});
	}

	// Card Border
	const getCardBorderToggleId = document.getElementById('card-border');
	if (getCardBorderToggleId) {
		const switchtoggle = document.querySelector(".card-border");
		const savedTheme = localStorage.getItem("fila_theme");
		if (savedTheme) {
			document.body.setAttribute("card-border-data-theme", savedTheme);
		}
		switchtoggle.addEventListener("click", function () {
			if (document.body.getAttribute("card-border-data-theme") === "card-border-normal") {
				document.body.setAttribute("card-border-data-theme", "card-border-gray");
				localStorage.setItem("fila_theme", "card-border-gray");
			} else {
				document.body.setAttribute("card-border-data-theme", "card-border-normal");
				localStorage.setItem("fila_theme", "card-border-normal");
			}
		});
	}

	// Menu Left Right Slide JS
	const geMenuLeftRightSlideId = document.getElementById('menu');
	if (geMenuLeftRightSlideId) {

		document.addEventListener("DOMContentLoaded", () => {
			const menuItems = document.querySelectorAll("#menu > li");
			const prevBtn = document.getElementById("prev-btn");
			const nextBtn = document.getElementById("next-btn");
			let itemsPerPage = 8; // Default value
			let currentIndex = 0;
		
			// Function to update menu visibility
			function updateMenu() {
				menuItems.forEach((item, index) => {
					item.style.display =
						index >= currentIndex && index < currentIndex + itemsPerPage
							? "block"
							: "none";
				});
		
				prevBtn.disabled = currentIndex === 0;
				nextBtn.disabled = currentIndex + itemsPerPage >= menuItems.length;
			}
		
			// Function to update itemsPerPage based on screen size
			function updateItemsPerPage() {
				if (window.matchMedia("(max-width: 992px)").matches) {
					itemsPerPage = 7; // Show 1 item for small screens
				} else if (window.matchMedia("(max-width: 1024px)").matches) {
					itemsPerPage = 7; // Show 2 items for medium screens
				} else {
					itemsPerPage = 4; // Show 3 items for large screens
				}
				currentIndex = 0; // Reset index when itemsPerPage changes
				updateMenu();
			}
		
			// Event listeners for buttons
			prevBtn.addEventListener("click", () => {
				if (currentIndex > 0) {
					currentIndex -= 1; // Move back by one item
					updateMenu();
				}
			});
		
			nextBtn.addEventListener("click", () => {
				if (currentIndex + itemsPerPage < menuItems.length) {
					currentIndex += 1; // Move forward by one item
					updateMenu();
				}
			});
		
			// Add event listener for screen size changes
			window.addEventListener("resize", updateItemsPerPage);
		
			// Initial setup
			updateItemsPerPage();
		});
	}

})();

try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('fila_rtl', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('fila_rtl') === 'rtl') {
			setTheme('ltr');
		} else {
			setTheme('rtl');
		}
	}
	
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('fila_rtl') === 'rtl') {
			setTheme('rtl');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('ltr');
		document.getElementById('slider').checked = true;
		}
	})();
} catch { }