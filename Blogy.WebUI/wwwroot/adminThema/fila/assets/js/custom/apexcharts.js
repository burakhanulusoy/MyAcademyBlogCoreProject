(function() {
	"use strict";

	//**<---- Dashboard E-Commerce Charts ---->**//

	/* Top Sales Chart JS*/
	const getTopSalesId = document.getElementById('total_sales_chart');
	if (getTopSalesId) {
		var options = {
			series: [
				{
					type: "rangeArea",
					name: "Orders",
					data: [
						{
							x: "Jan",
							y: [1100, 1900]
						},
						{
							x: "Feb",
							y: [1200, 1800]
						},
						{
							x: "Mar",
							y: [900, 2900]
						},
						{
							x: "Apr",
							y: [1400, 2700]
						},
						{
							x: "May",
							y: [2600, 3900]
						},
						{
							x: "Jun",
							y: [500, 1700]
						},
						{
							x: "Jul",
							y: [1900, 2300]
						},
						{
							x: "Aug",
							y: [1000, 1500]
						}
					]
				},
				{
					type: "rangeArea",
					name: "Sales",
					data: [
						{
							x: "Jan",
							y: [3100, 3400]
						},
						{
							x: "Feb",
							y: [4200, 5200]
						},
						{
							x: "Mar",
							y: [3900, 4900]
						},
						{
							x: "Apr",
							y: [3400, 3900]
						},
						{
							x: "May",
							y: [5100, 5900]
						},
						{
							x: "Jun",
							y: [5400, 6700]
						},
						{
							x: "Jul",
							y: [4300, 4600]
						},
						{
							x: "Aug",
							y: [2100, 2900]
						}
					]
				},
				{
					type: "line",
					name: "Orders",
					data: [
						{
							x: "Jan",
							y: 1500
						},
						{
							x: "Feb",
							y: 1700
						},
						{
							x: "Mar",
							y: 1900
						},
						{
							x: "Apr",
							y: 2200
						},
						{
							x: "May",
							y: 3000
						},
						{
							x: "Jun",
							y: 1000
						},
						{
							x: "Jul",
							y: 2100
						},
						{
							x: "Aug",
							y: 1200
						},
						{
							x: "Sep",
							y: 1800
						},
						{
							x: "Oct",
							y: 2000
						}
					]
				},
				{
					type: "line",
					name: "Sales",
					data: [
						{
							x: "Jan",
							y: 3300
						},
						{
							x: "Feb",
							y: 4900
						},
						{
							x: "Mar",
							y: 4300
						},
						{
							x: "Apr",
							y: 3700
						},
						{
							x: "May",
							y: 5500
						},
						{
							x: "Jun",
							y: 5900
						},
						{
							x: "Jul",
							y: 4500
						},
						{
							x: "Aug",
							y: 2400
						},
						{
							x: "Sep",
							y: 2100
						},
						{
							x: "Oct",
							y: 1500
						}
					]
				}
			],
			chart: {
				height: 282,
				type: "rangeArea",
				animations: {
					speed: 500
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796df6", "#00cae3", "#796df6", "#00cae3"
			],
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: [0.24, 0.24, 1, 1]
			},
			forecastDataPoints: {
				count: 2,
				dashArray: 4
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 3,
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			stroke: {
				curve: "straight",
				width: [0, 0, 2, 2]
			},
			legend: {
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				customLegendItems: ["Orders", "Sales"],
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 0
				}
			},
			markers: {
				hover: {
					sizeOffset: 5
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};
		var chart = new ApexCharts(document.querySelector("#total_sales_chart"), options);
		chart.render();
	}

	/* Profit Chart JS*/
	const getProfitId = document.getElementById('profit_chart');
	if (getProfitId) {

		var options = {
			series: [
				{
					name: "Profit",
					data: [0, 41, 35, 51, 49, 62, 69, 91, 160]
				}
			],
			chart: {
				height: 224,
				type: "line",
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight"
			},
			colors: [
				"#796df6"
			],
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			xaxis: {
				categories: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val + "k";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#profit_chart'), options);
		chart.render();
		
	}

	/* Average Daily Sales Chart JS*/
	const getAverageDailySalesId = document.getElementById('average_daily_sales_chart');
	if (getAverageDailySalesId) {

		var options = {
			series: [
				{
					name: "Daily Sales",
					data: [21, 22, 10, 28, 16, 21, 30]
				}
			],
			chart: {
				height: 214,
				type: "bar",
				toolbar: {
					show: false
				}
			},
			colors: [
				"#00cae3"
			],
			plotOptions: {
				bar: {
					columnWidth: "45%",
					distributed: true
				}
			},
			dataLabels: {
				enabled: false
			},
			legend: {
				show: false
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val;
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#average_daily_sales_chart'), options);
		chart.render();

	}

	/* Order Summary Chart JS*/
	const getOrderSummaryId = document.getElementById('order_summary_chart');
	if (getOrderSummaryId) {

		var options = {
			series: [60, 30, 10],
			chart: {
				height: 431,
				type: "donut"
			},
			labels: [
				"Completed", "New Order", "Pending"
			],
			legend: {
				offsetY: 0,
				fontSize: "14px",
				position: "bottom",
				horizontalAlign: "center",
				fontFamily: 'Outfit',
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 12
				}
			},
			responsive: [{
				breakpoint: 380,
				options: {
					legend: {
						offsetY: -60,
					},
					itemMargin: {
						vertical: 0,
						horizontal: 0,
					}
				},
			}],
			dataLabels: {
				enabled: false,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			colors: [
				"#00cae3", "#0e7aee", "#796df6"
			],
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#order_summary_chart'), options);
		chart.render();

	}

	/* Revenue Chart JS*/
	const getRevenueId = document.getElementById('revenue_chart');
	if (getRevenueId) {

		var options = {
			series: [
				{
					name: "Income",
					data: [31, 40, 28, 51, 42, 109, 100]
				},
				{
					name: "Expenses",
					data: [11, 32, 45, 32, 34, 52, 41]
				}
			],
			chart: {
				height: 205,
				type: "area",
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "smooth"
			},
			colors: [
				"#796DF6", "#00CAE3"
			],
			legend: {
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 0
				}
			},
			xaxis: {
				categories: [
					"Sun",
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 3,
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			fill: {
				gradient: {
					opacityFrom: 0,
					opacityTo: 0.4,
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val;
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#revenue_chart'), options);
		chart.render();

	}

	//**<---- Dashboard CRM Charts ---->**//

	/* New User Chart JS*/
	const getNewUserId = document.getElementById('new_user_chart');
	if (getNewUserId) {

		var options = {
			series: [
				{
					name: "New Users",
					data: [198, 212, 200, 230]
				}
			],
			chart: {
				type: "area",
				height: 100,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#ffb264"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "smooth",
				width: 2
			},
			labels: ['10 Mar 2025', '11 Mar 2025', '12 Mar 2025', '13 Mar 2025'],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#new_user_chart'), options);
		chart.render();

	}

	/* Active User Chart JS*/
	const getActiveUserId = document.getElementById('active_user_chart');
	if (getActiveUserId) {

		var options = {
			series: [
				{
					name: "Active Users",
					data: [2300, 2000, 2122, 1988]
				}
			],
			chart: {
				type: "area",
				height: 100,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#0f79f1"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "smooth",
				width: 2
			},
			labels: ['10 Mar 2025', '11 Mar 2025', '12 Mar 2025', '13 Mar 2025'],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#active_user_chart'), options);
		chart.render();

	}

	/* Lead Conversation Chart JS*/
	const getLeadConversationId = document.getElementById('lead_conversation_chart');
	if (getLeadConversationId) {
		
		var options = {
			series: [
				{
					name: "Lead Conversation",
					data: [23, 20, 21, 19]
				}
			],
			chart: {
				type: "area",
				height: 100,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796df6"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "stepline",
				width: 2
			},
			labels: ['10 Mar 2025', '11 Mar 2025', '12 Mar 2025', '13 Mar 2025'],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#lead_conversation_chart'), options);
		chart.render();

	}

	/* Revenue Growth Chart JS*/
	const getRevenueGrowthId = document.getElementById('revenue_growth_chart');
	if (getRevenueGrowthId) {

		var options = {
			series: [
				{
					name: "Revenue Growth",
					data: [211, 222, 100, 288, 166, 211, 300]
				}
			],
			chart: {
				height: 120,
				type: "bar",
				toolbar: {
					show: false
				}
			},
			colors: [
				"#00cae3"
			],
			plotOptions: {
				bar: {
					columnWidth: "45%",
					distributed: true
				}
			},
			dataLabels: {
				enabled: false
			},
			legend: {
				show: false
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul"
				],
				axisBorder: {
					show: true,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val;
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#revenue_growth_chart'), options);
		chart.render();

	}

	/* Most Leads Chart JS*/
	const getMostLeadsId = document.getElementById('most_leads_chart');
	if (getMostLeadsId) {

		var options = {
			series: [55, 30, 10, 5],
			chart: {
				width: 300,
				type: "pie"
			},
			stroke: {
				width: 2,
				show: true
			},
			labels: [
				"Email", "Social", "Call", "Others"
			],
			legend: {
				show: false
			},
			dataLabels: {
				enabled: false,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			colors: [
				"#00cae3", "#0e7aee", "#796df6", "#ffb264"
			],
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#most_leads_chart'), options);
		chart.render();

	}

	/* Tasks Stats Chart JS*/
	const getTasksStatsId = document.getElementById('tasks_stats_chart');
	if (getTasksStatsId) {

		var options = {
			series: [
				{
					name: "Tasks Created",
					data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
				},
				{
					name: "Tasks Solved",
					data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
				}
			],
			chart: {
				height: 225,
				type: "line",
				toolbar: {
					show: false
				}
			},
			colors: [
				"#00cae3", "#ffb264"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 2,
				curve: "straight",
				dashArray: [0, 8, 5]
			},
			legend: {
				show: false,
				fontSize: '14px',
				fontFamily: 'Outfit',
				labels: {
					colors: "#ffffff"
				}
			},
			markers: {
				size: 0,
				hover: {
					sizeOffset: 6
				}
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec"
				],
				axisBorder: {
					show: true,
					color: '#f1f1f1'
				},
				axisTicks: {
					show: true,
					color: '#f1f1f1'
				},
				labels: {
					trim: false,
					show: true,
					style: {
						colors: "#ffffff",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 4,
				labels: {
					show: true,
					style: {
						colors: "#ffffff",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#7a70eb",
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#tasks_stats_chart'), options);
		chart.render();

	}

	/* Earning Reports Chart JS*/
	const getEarningReportsId = document.getElementById('earning_reports_chart');
	if (getEarningReportsId) {

		var options = {
			series: [
				{
					name: "Orders",
					type: "column",
					data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320]
				},
				{
					name: "Sales",
					type: "line",
					data: [423, 542, 435, 627, 243, 422, 217, 331, 722, 322]
				}
			],
			chart: {
				height: 224,
				type: "line",
				toolbar: {
					show: false
				}
			},
			colors: [
				"#5271f2", "#00cae3"
			],
			stroke: {
				width: [0, 3],
				curve: 'smooth'
			},
			plotOptions: {
				bar: {
					columnWidth: "45%"
				}
			},
			legend: {
				show: false,
				fontSize: '14px',
				fontFamily: 'Outfit',
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 4,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#earning_reports_chart'), options);
		chart.render();

	}

	/* Client Payment Status Chart JS*/
	const getClientPaymentStatusId = document.getElementById('client_payment_status_chart');
	if (getClientPaymentStatusId) {

		var options = {
			series: [35, 25, 15],
			chart: {
				height: 251,
				type: "polarArea"
			},
			stroke: {
				width: 0,
				colors: ["#ffffff"]
			},
			plotOptions: {
				polarArea: {
					rings: {
						strokeWidth: 1,
						strokeColor: '#e0e0e0',
					},
					spokes: {
						strokeWidth: 1,
						connectorColors: '#e0e0e0',
					}
				}
			},
			colors: [
				"#0f79f3", "#00cae3", "#ffb264"
			],
			fill: {
				opacity: 1
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				offsetY: -25,
				offsetX: -30,
				floating: true,
				fontSize: "14px",
				position: "left",
				horizontalAlign: "left",
				fontFamily: 'Outfit',
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 0,
					vertical: 5
				}
			},
			labels: [
				"Paid", "Pending", "Overdue"
			],
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#client_payment_status_chart'), options);
		chart.render();

	}

	/* Total Leads Chart JS*/
	const getTotalLeadsId = document.getElementById('total_leads_chart');
	if (getTotalLeadsId) {
		
		var options = {
			series: [
				{
					name: "Lead",
					data: [8200, 8000, 8100, 8400, 8000, 8423, 8423, 8300, 8481, 8487, 8506, 8626, 8668, 8602, 8607, 8512, 8496, 8600, 8881, 8500]
				}
			],
			chart: {
				type: "area",
				height: 255,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "smooth",
				width: 2
			},
			colors: [
				"#00cae3"
			],
			labels: ['10 Nov 2025', '11 Nov 2025', '12 Nov 2025', '13 Nov 2025', '14 Nov 2025', '15 Nov 2025', '16 Nov 2025', '17 Nov 2025', '18 Nov 2025', '19 Nov 2025', '20 Nov 2025', '21 Nov 2025', '22 Nov 2025', '23 Nov 2025', '24 Nov 2025', '25 Nov 2025', '26 Nov 2025', '27 Nov 2025', '28 Nov 2025', '29 Nov 2025'],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#total_leads_chart'), options);
		chart.render();
	}

	//**<---- Dashboard LMS Charts ---->**//

	/* Projects Roadmap Chart JS*/
	const getProjectsRoadmapId = document.getElementById('projects_roadmap_chart');
	if (getProjectsRoadmapId) {

		var options = {
			series: [
				{
					name: "Projects",
					data: [45, 40, 52, 63, 80, 88]
				}
			],
			chart: {
				type: "bar",
				height: 360,
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796df6"
			],
			plotOptions: {
				bar: {
					horizontal: true
				}
			},
			dataLabels: {
				enabled: true,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				}
			},
			xaxis: {
				categories: [
					"Project Planning",
					"Requirement",
					"Design",
					"Development",
					"Testing and QA",
					"Post-Launch"
				],
				axisBorder: {
					show: true,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: true,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#f4f6fc",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#projects_roadmap_chart'), options);
		chart.render();

	}

	/* Projects Progress Chart JS*/
	const getProjectsProgressId = document.getElementById('projects_progress_chart');
	if (getProjectsProgressId) {

		var options = {
			series: [60, 30, 10],
			chart: {
				height: 450,
				type: "donut"
			},
			labels: [
				"In Progress", "Not Started", "Completed"
			],
			legend: {
				offsetY: -35,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 7
				}
			},
			responsive: [{
				breakpoint: 1850,
				options: {
					legend: {
						offsetY: 11,
						position: "top",
					}
				},
			}],
			dataLabels: {
				enabled: false,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			colors: [
				"#00cae3", "#0e7aee", "#796df6"
			],
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#projects_progress_chart'), options);
		chart.render();

	}

	/* Projects Progress Two Chart JS*/
	const getProjectsProgressTwoId = document.getElementById('projects_progress_chart_two');
	if (getProjectsProgressTwoId) {

		var options = {
			series: [60, 30, 10],
			chart: {
				height: 430,
				type: "donut"
			},
			labels: [
				"In Progress", "Not Started", "Completed"
			],
			legend: {
				offsetY: 0,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 7
				}
			},
			responsive: [{
				breakpoint: 1850,
				options: {
					legend: {
						offsetY: 11,
						position: "top",
					}
				},
			}],
			dataLabels: {
				enabled: false,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			colors: [
				"#00cae3", "#0e7aee", "#796df6"
			],
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#projects_progress_chart_two'), options);
		chart.render();

	}

	/* Projects Analysis Chart JS*/
	const getProjectsAnalysisId = document.getElementById('projects_analysis_chart');
	if (getProjectsAnalysisId) {

		var options = {
			series: [
				{
					name: "Project",
					data: [44, 55, 57, 56, 61, 58, 63]
				},
				{
					name: "Task",
					data: [76, 85, 101, 98, 87, 105, 91]
				},
				{
					name: "Revenue",
					data: [35, 41, 36, 26, 45, 48, 52]
				}
			],
			chart: {
				type: "bar",
				height: 380,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					columnWidth: "65%"
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#00cae3", "#0f79f3", "#796df6"
			],
			stroke: {
				width: 2,
				show: true,
				colors: ["transparent"]
			},
			xaxis: {
				categories: [
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sun"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			fill: {
				opacity: 1
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				offsetY: 0,
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#projects_analysis_chart'), options);
		chart.render();

	}

	/* Welcome Chart JS*/
	const getWelcomeId = document.getElementById('welcome_chart');
	if (getWelcomeId) {
		 
		var options = {
			series: [75],
			chart: {
				type: "radialBar",
				height: 260
			},
			plotOptions: {
				radialBar: {
					startAngle: -90,
					endAngle: 90,
					track: {
						background: "#958df4",
						strokeWidth: "100%",
						margin: 3, // margin is in pixels
						dropShadow: {
							enabled: false
						}
					},
					dataLabels: {
						name: {
							show: false
						},
						value: {
							offsetY: -2,
							fontSize: "25px",
							fontFamily: 'Outfit',
							fontWeight: 500,
							color: "#ffffff"
						}
					}
				}
			},
			colors: [
				"#00cae3"
			]
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#welcome_chart'), options);
		chart.render();
	}

	/* Active Students Chart JS*/
	const getActiveStudentsId = document.getElementById('active_students_chart');
	if (getActiveStudentsId) {

		var options = {
			series: [
				{
					name: "Monthly",
					type: "column",
					data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
				},
				{
					name: "Weekly",
					type: "area",
					data: [44, 55, 41, 65, 22, 43, 21, 41, 56, 27, 43]
				},
				{
					name: "Daily",
					type: "line",
					data: [30, 25, 36, 30, 45, 35, 65, 52, 59, 36, 39]
				}
			],
			chart: {
				height: 460,
				type: "line",
				stacked: false,
				toolbar: {
					show: false
				}
			},
			stroke: {
				width: [0, 2, 5],
				curve: "smooth"
			},
			plotOptions: {
				bar: {
					columnWidth: "45%"
				}
			},
			colors:[
				'#00cae3', '#d2d2e4', '#796df6'
			],
			fill: {
				opacity: [0.85, 0.25, 1],
				gradient: {
					inverseColors: false,
					shade: "light",
					type: "vertical",
					opacityFrom: 0.85,
					opacityTo: 0.55,
					// stops: [0, 100, 100, 100]
				}
			},
			legend: {
				show: true,
				offsetY: 6,
				fontSize: '14px',
				fontFamily: 'Outfit',
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			},
			markers: {
				size: 0
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#active_students_chart'), options);
		chart.render();

	}

	/* Total Courses Sales Chart JS*/
	const getTotalCoursesSalesId = document.getElementById('total_courses_sales_chart');
	if (getTotalCoursesSalesId) {
		
		var options = {
			series: [
				{
					name: "Sales",
					data: [8200, 8000, 8100, 8400, 8000, 8423, 8423, 8300, 8481, 8487, 8506, 8626, 8668, 8602, 8607, 8512, 8496, 8600, 8881, 8500]
				}
			],
			chart: {
				type: "area",
				height: 255,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 2
			},
			colors: [
				"#796df6"
			],
			labels: ['10 Nov 2025', '11 Nov 2025', '12 Nov 2025', '13 Nov 2025', '14 Nov 2025', '15 Nov 2025', '16 Nov 2025', '17 Nov 2025', '18 Nov 2025', '19 Nov 2025', '20 Nov 2025', '21 Nov 2025', '22 Nov 2025', '23 Nov 2025', '24 Nov 2025', '25 Nov 2025', '26 Nov 2025', '27 Nov 2025', '28 Nov 2025', '29 Nov 2025'],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#total_courses_sales_chart'), options);
		chart.render();

	}

	/* Time Spending's Chart JS*/
	const getTimeSpendingId = document.getElementById('time_spending_chart');
	if (getTimeSpendingId) {

		var options = {
			series: [65, 55, 45, 35, 25, 15, 5],
			chart: {
				type: "donut",
				height: 229
			},
			labels: [
				"Team A", "Team B", "Team C", "Team D", "Team E", "Team F", "Team G"
			],
			dataLabels: {
				enabled: false,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			colors: [
				"#796df6", "#8d83f7", "#a199f9", "#b5affa", "#c9c5fb", "#dddbfd", "#f2f0fe"
			],
			stroke: {
				width: 1
			},
			legend: {
				offsetY: 0,
				show: false,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 7
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + " hrs";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#time_spending_chart'), options);
		chart.render();

	}

	/* Average Enrollment Rate Chart JS*/
	const getAverageEnrollmentRateId = document.getElementById('average_enrollment_rate_chart');
	if (getAverageEnrollmentRateId) {

		var options = {
			series: [
				{
					type: "rangeArea",
					name: "On sale course",
					data: [
						{
							x: "Jan",
							y: [1100, 1900]
						},
						{
							x: "Feb",
							y: [1200, 1800]
						},
						{
							x: "Mar",
							y: [900, 2900]
						},
						{
							x: "Apr",
							y: [1400, 2700]
						},
						{
							x: "May",
							y: [2600, 3900]
						},
						{
							x: "Jun",
							y: [500, 1700]
						},
						{
							x: "Jul",
							y: [1900, 2300]
						},
						{
							x: "Aug",
							y: [1000, 1500]
						}
					]
				},
				{
					type: "rangeArea",
					name: "Regular paid course",
					data: [
						{
							x: "Jan",
							y: [3100, 3400]
						},
						{
							x: "Feb",
							y: [4200, 5200]
						},
						{
							x: "Mar",
							y: [3900, 4900]
						},
						{
							x: "Apr",
							y: [3400, 3900]
						},
						{
							x: "May",
							y: [5100, 5900]
						},
						{
							x: "Jun",
							y: [5400, 6700]
						},
						{
							x: "Jul",
							y: [4300, 4600]
						},
						{
							x: "Aug",
							y: [2100, 2900]
						}
					]
				},
				{
					type: "line",
					name: "On sale course",
					data: [
						{
							x: "Jan",
							y: 1500
						},
						{
							x: "Feb",
							y: 1700
						},
						{
							x: "Mar",
							y: 1900
						},
						{
							x: "Apr",
							y: 2200
						},
						{
							x: "May",
							y: 3000
						},
						{
							x: "Jun",
							y: 1000
						},
						{
							x: "Jul",
							y: 2100
						},
						{
							x: "Aug",
							y: 1200
						},
						{
							x: "Sep",
							y: 1800
						},
						{
							x: "Oct",
							y: 2000
						}
					]
				},
				{
					type: "line",
					name: "Regular paid course",
					data: [
						{
							x: "Jan",
							y: 3300
						},
						{
							x: "Feb",
							y: 4900
						},
						{
							x: "Mar",
							y: 4300
						},
						{
							x: "Apr",
							y: 3700
						},
						{
							x: "May",
							y: 5500
						},
						{
							x: "Jun",
							y: 5900
						},
						{
							x: "Jul",
							y: 4500
						},
						{
							x: "Aug",
							y: 2400
						},
						{
							x: "Sep",
							y: 2100
						},
						{
							x: "Oct",
							y: 1500
						}
					]
				}
			],
			chart: {
				height: 282,
				type: "rangeArea",
				animations: {
					speed: 500
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796df6", "#00cae3", "#796df6", "#00cae3"
			],
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: [0.24, 0.24, 1, 1]
			},
			forecastDataPoints: {
				count: 2,
				dashArray: 4
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 3,
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			stroke: {
				curve: "straight",
				width: [0, 0, 2, 2]
			},
			legend: {
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				customLegendItems: ["On sale course", "Regular paid course"],
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 0
				}
			},
			markers: {
				hover: {
					sizeOffset: 5
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#average_enrollment_rate_chart'), options);
		chart.render();

	}

	//**<---- Dashboard Help Desk Charts ---->**//

	/* Tickets Open Chart JS*/
	const getTicketsOpenId = document.getElementById('tickets_open_chart');
	if (getTicketsOpenId) {

		var options = {
			series: [
				{
					name: "Tickets Open",
					data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
				}
			],
			chart: {
				type: "area",
				height: 115,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796df6"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 3
			},
			fill: {
				type: "gradient",
				gradient: {
					opacityFrom: 0,
					opacityTo: 0.5
				}
			},
			labels: [
				"10 Mar 2025",
				"11 Mar 2025",
				"12 Mar 2025",
				"13 Mar 2025",
				"14 Mar 2025",
				"15 Mar 2025",
				"16 Mar 2025",
				"17 Mar 2025",
				"18 Mar 2025",
				"19 Mar 2025"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#tickets_open_chart'), options);
		chart.render();

	}

	/* Tickets In Progress Chart JS*/
	const getTicketsInProgressId = document.getElementById('tickets_in_progress_chart');
	if (getTicketsInProgressId) {

		var options = {
			series: [
				{
					name: "Tickets Open",
					data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
				}
			],
			chart: {
				type: "area",
				height: 115,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#00cae3"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 3
			},
			fill: {
				type: "gradient",
				gradient: {
					opacityFrom: 0,
					opacityTo: 0.5
				}
			},
			labels: [
				"10 Mar 2025",
				"11 Mar 2025",
				"12 Mar 2025",
				"13 Mar 2025",
				"14 Mar 2025",
				"15 Mar 2025",
				"16 Mar 2025",
				"17 Mar 2025",
				"18 Mar 2025",
				"19 Mar 2025"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#tickets_in_progress_chart'), options);
		chart.render();

	}

	/* Tickets Resolved Chart JS*/
	const getTicketsResolvedId = document.getElementById('tickets_resolved_chart');
	if (getTicketsResolvedId) {

		var options = {
			series: [
				{
					name: "Tickets Open",
					data: [
						25, 66, 41, 59, 25, 44, 12, 36, 9, 21
					]
				}
			],
			chart: {
				type: "area",
				height: 115,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#0f79f3"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 3
			},
			fill: {
				type: "gradient",
				gradient: {
					opacityFrom: 0,
					opacityTo: 0.5
				}
			},
			labels: [
				"10 Mar 2025",
				"11 Mar 2025",
				"12 Mar 2025",
				"13 Mar 2025",
				"14 Mar 2025",
				"15 Mar 2025",
				"16 Mar 2025",
				"17 Mar 2025",
				"18 Mar 2025",
				"19 Mar 2025"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#tickets_resolved_chart'), options);
		chart.render();

	}

	/* Tickets Closed Chart JS*/
	const getTicketsClosedId = document.getElementById('tickets_closed_chart');
	if (getTicketsClosedId) {

		var options = {
			series: [
				{
					name: "Tickets Open",
					data: [
						12, 14, 2, 47, 32, 44, 14, 55, 41, 69
					]
				}
			],
			chart: {
				type: "area",
				height: 115,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#ffb264"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 3
			},
			fill: {
				type: "gradient",
				gradient: {
					opacityFrom: 0,
					opacityTo: 0.5
				}
			},
			labels: [
				"10 Mar 2025",
				"11 Mar 2025",
				"12 Mar 2025",
				"13 Mar 2025",
				"14 Mar 2025",
				"15 Mar 2025",
				"16 Mar 2025",
				"17 Mar 2025",
				"18 Mar 2025",
				"19 Mar 2025"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#tickets_closed_chart'), options);
		chart.render();

	}

	/* New Tickets Created Chart JS*/
	const getNewTicketsCreatedId = document.getElementById('new_tickets_created_chart');
	if (getNewTicketsCreatedId) {

		var options = {
			series: [
				{
					name: "Low",
					data: [320, 332, 301, 334, 390, 300, 280]
				},
				{
					name: "Medium",
					data: [220, 182, 191, 234, 290, 200, 180]
				},
				{
					name: "High",
					data: [150, 232, 201, 154, 190, 140, 120]
				},
				{
					name: "Urgent",
					data: [98, 77, 101, 99, 40, 88, 62]
				}
			],
			chart: {
				type: "bar",
				height: 396,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					columnWidth: "65%"
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#00cae3", "#0f79f3", "#ffb264", "#ee6666"
			],
			stroke: {
				width: 5,
				show: true,
				colors: ["transparent"]
			},
			xaxis: {
				categories: [
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sun"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			fill: {
				opacity: 1
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				offsetY: 0,
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#new_tickets_created_chart'), options);
		chart.render();

	}

	/* First Response Time Chart JS*/
	const getFirstResponseTimeId = document.getElementById('first_response_time_chart');
	if (getFirstResponseTimeId) {

		var options = {
			series: [
				{
					name: "Response Time",
					data: [
						51,
						65,
						54,
						56,
						37,
						53,
						62,
						24,
						35,
						46,
						39,
						27,
						38,
						61,
						45,
						27,
						54,
						93,
						41,
						31
					]
				}
			],
			chart: {
				type: "area",
				height: 200,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 2
			},
			colors: [
				"#ffb264"
			],
			labels: [
				"13 Nov 2025",
				"14 Nov 2025",
				"15 Nov 2025",
				"16 Nov 2025",
				"17 Nov 2025",
				"20 Nov 2025",
				"21 Nov 2025",
				"22 Nov 2025",
				"23 Nov 2025",
				"24 Nov 2025",
				"27 Nov 2025",
				"28 Nov 2025",
				"29 Nov 2025",
				"30 Nov 2025",
				"01 Dec 2025",
				"04 Dec 2025",
				"05 Dec 2025",
				"06 Dec 2025",
				"07 Dec 2025",
				"08 Dec 2025"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "mins";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#first_response_time_chart'), options);
		chart.render();

	}

	/* Ave Resolution Time Chart JS*/
	const getAveResolutionTimeId = document.getElementById('ave_resolution_time_chart');
	if (getAveResolutionTimeId) {

		var options = {
			series: [
				{
					name: "Response Time",
					data: [
						41,
						31,
						35,
						61,
						46,
						27,
						47,
						51,
						54,
						42,
						24,
						45,
						55,
						27,
						39,
						35,
						56,
						62,
						53,
						52
					]
				}
			],
			chart: {
				type: "area",
				height: 200,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 2
			},
			colors: [
				"#796df6"
			],
			labels: [
				"13 Nov 2025",
				"14 Nov 2025",
				"15 Nov 2025",
				"16 Nov 2025",
				"17 Nov 2025",
				"20 Nov 2025",
				"21 Nov 2025",
				"22 Nov 2025",
				"23 Nov 2025",
				"24 Nov 2025",
				"27 Nov 2025",
				"28 Nov 2025",
				"29 Nov 2025",
				"30 Nov 2025",
				"01 Dec 2025",
				"04 Dec 2025",
				"05 Dec 2025",
				"06 Dec 2025",
				"07 Dec 2025",
				"08 Dec 2025"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				show: false,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "mins";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#ave_resolution_time_chart'), options);
		chart.render();

	}

	/* Customer Satisfaction Chart JS*/
	const getCustomerSatisfactionId = document.getElementById('customer_satisfaction_chart');
	if (getCustomerSatisfactionId) {

		var options = {
			series: [55, 45, 35],
			chart: {
				height: 394,
				type: 'polarArea'
			},
			labels: [
				'Highly Satisfied', 'Satisfied', 'Unsatisfied'
			],
			fill: {
				opacity: 1
			},
			stroke: {
				width: 1,
				colors: undefined
			},
			colors: [
				"#00cae3", "#0f79f3", "#796df6"
			],
			yaxis: {
				show: false
			},
			legend: {
				offsetY: -10,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 7
				}
			},
			responsive: [{
				breakpoint: 360,
				options: {
					legend: {
						offsetY: -50,
					}
				},
			}],
			plotOptions: {
				polarArea: {
					rings: {
						strokeWidth: 0
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#customer_satisfaction_chart'), options);
		chart.render();

	}

	/* Tickets Solved and Created Chart JS*/
	const getTicketsSolvedAndCreatedId = document.getElementById('tickets_solved_and_created_chart');
	if (getTicketsSolvedAndCreatedId) {

		var options = {
			series: [
				{
					name: "Tickets Created",
					data: [250, 710, 450, 780, 390, 600, 350]
				},
				{
					name: "Ticket Solved",
					data: [200, 500, 300, 640, 250, 450, 150]
				}
			],
			chart: {
				type: "area",
				height: 350,
				stacked: true,
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796df6", "#00cae3"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: [4, 4]
			},
			fill: {
				type: "gradient",
				gradient: {
					opacityFrom: 0.1,
					opacityTo: 0.6
				}
			},
			legend: {
				offsetY: 0,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 12
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			xaxis: {
				categories: [
					"January 7",
					"January 8",
					"January 9",
					"January 10",
					"January 11",
					"January 12",
					"January 13"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 5,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#tickets_solved_and_created_chart'), options);
		chart.render();

	}

	/* Tickets By Channel Chart JS*/
	const getTicketsByChannelId = document.getElementById('tickets_by_channel_chart');
	if (getTicketsByChannelId) {
		
		var options = {
			series: [50, 35, 25, 15],
			chart: {
				height: 361,
				type: 'polarArea'
			},
			labels: [
				'Email', 'App', 'Web', 'Chat'
			],
			fill: {
				opacity: 1
			},
			stroke: {
				width: 1,
				colors: undefined
			},
			colors: [
				"#00cae3", "#796df6", "#0f79f3", "#ffb264"
			],
			yaxis: {
				show: false
			},
			legend: {
				offsetY: -10,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 7
				}
			},
			plotOptions: {
				polarArea: {
					rings: {
						strokeWidth: 0
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#tickets_by_channel_chart'), options);
		chart.render();

	}

	/* Tickets by Type Chart JS*/
	const getTicketsByTypeId = document.getElementById('tickets_by_type_chart');
	if (getTicketsByTypeId) {

		var options = {
			series: [40, 30, 20, 10],
			chart: {
				height: 362,
				type: "donut"
			},
			labels: [
				"Technical Issue", "Product Support", "General Inquiry", "Billing Inquiry"
			],
			legend: {
				offsetY: 11,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 7
				}
			},
			dataLabels: {
				enabled: false,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			colors: [
				"#00cae3", "#0e7aee", "#796df6", "#ee6666"
			],
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#tickets_by_type_chart'), options);
		chart.render();

	}

	//**<---- Seller Details Charts ---->**//

	/* Seller Details Revenue Chart JS*/
	const getSellerDetailsRevenueId = document.getElementById('seller_details_revenue_chart');
	if (getSellerDetailsRevenueId) {

		var options = {
			series: [
				{
					name: "Orders",
					data: [320, 332, 301, 334, 390, 300, 280]
				},
				{
					name: "Earnings",
					data: [220, 182, 191, 234, 290, 200, 180]
				},
				{
					name: "Refunds",
					data: [150, 232, 201, 154, 190, 140, 120]
				},
				{
					name: "Conversion Rate",
					data: [98, 77, 101, 99, 40, 88, 62]
				}
			],
			chart: {
				type: "bar",
				height: 478,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					columnWidth: "50%"
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#00cae3", "#0f79f3", "#ffb264", "#ee6666"
			],
			stroke: {
				width: 5,
				show: true,
				colors: ["transparent"]
			},
			xaxis: {
				categories: [
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sun"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			fill: {
				opacity: 1
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				offsetY: 0,
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#seller_details_revenue_chart'), options);
		chart.render();

	}

	/* Overview Chart JS*/
	const geOverviewId = document.getElementById('overview_chart');
	if (geOverviewId) {

		var options = {
			series: [
				{
					name: "Total Projects",
					data: [320, 332, 301, 334, 390, 300, 280]
				},
				{
					name: "Total Orders",
					data: [220, 182, 191, 234, 290, 200, 180]
				},
				{
					name: "Total Revenue",
					data: [150, 232, 201, 154, 190, 140, 120]
				}
			],
			chart: {
				type: "bar",
				height: 396,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					columnWidth: "38%"
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#0f79f3", "#ffb264", "#e74c3c"
			],
			stroke: {
				width: 6,
				show: true,
				colors: ["transparent"]
			},
			xaxis: {
				categories: [
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sun"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			fill: {
				opacity: 1
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				offsetY: 0,
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#overview_chart'), options);
		chart.render();

	}

	/* Complaints Chart JS*/
	const getComplaintsId = document.getElementById('complaints_chart');
	if (getComplaintsId) {
		
		var options = {
			series: [
				{
					name: "Complain",
					data: [10, 41, 35, 60, 35, 55, 10]
				}
			],
			chart: {
				height: 179,
				type: "line",
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: true
			},
			colors: [
				"#796dF6"
			],
			stroke: {
				width: 2,
				curve: "smooth"
			},
			title: {
				text: "Most complaints were received on Sunday.",
				align: "center",
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
					color: '#919aa3',
					fontWeight: 'normal'
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			yaxis: {
				tickAmount: 2,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			xaxis: {
				categories: [
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sun"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			}
		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#complaints_chart'), options);
		chart.render();

	}

	//**<---- Others Charts ---->**//

	/* Basic Line Chart JS*/
	const getBasicLineId = document.getElementById('basic_line_chart');
	if (getBasicLineId) {

		var options = {
			series: [
				{
					name: "Desktops",
					data: [0, 41, 35, 51, 49, 62, 69, 91, 148]
				}
			],
			chart: {
				height: 350,
				type: "line",
				zoom: {
					enabled: false
				},
				toolbar: {
					show: true
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#0f79f3"
			],
			stroke: {
				curve: "straight"
			},
			title: {
				text: "Product Trends by Month",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			}
		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_line_chart'), options);
		chart.render();
	}

	/* Gradient Line Chart JS*/
	const getGradientLineId = document.getElementById('gradient_line_chart');
	if (getGradientLineId) {
		var options = {

			series: [
				{
					name: "Likes",
					data: [0, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
				}
			],
			chart: {
				height: 350,
				type: "line",
				toolbar: {
					show: true
				}
			},
			stroke: {
				width: 7,
				curve: "smooth"
			},
			xaxis: {
				type: "datetime",
				categories: [
					"1/11/2000",
					"2/11/2000",
					"3/11/2000",
					"4/11/2000",
					"5/11/2000",
					"6/11/2000",
					"7/11/2000",
					"8/11/2000",
					"9/11/2000",
					"10/11/2000",
					"11/11/2000",
					"12/11/2000",
					"1/11/2001",
					"2/11/2001",
					"3/11/2001",
					"4/11/2001",
					"5/11/2001",
					"6/11/2001"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			title: {
				text: "Social Media",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			fill: {
				type: "gradient",
				gradient: {
					shade: "dark",
					gradientToColors: ["#FDD835"],
					shadeIntensity: 1,
					type: "horizontal",
					opacityFrom: 1,
					opacityTo: 1,
					// stops: [0, 100, 100, 100]
				}
			},
			markers: {
				size: 4,
				colors: ["#FFA41B"],
				strokeColors: "#fff",
				strokeWidth: 2,
				hover: {
					size: 7
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#gradient_line_chart'), options);
		chart.render();

	}

	/* Dashed Line Chart JS*/
	const DashedLine = document.getElementById('dashed_line_chart');
	if (DashedLine) {
		var options = {

			series: [
				{
					name: "Session Duration",
					data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
				},
				{
					name: "Page Views",
					data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
				},
				{
					name: "Total Visits",
					data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
				}
			],
			chart: {
				height: 350,
				type: "line",
				toolbar: {
					show: true
				}
			},
			colors: [
				"#796df6", "#00cae3", "#0f79f3"
			],
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 5,
				curve: "straight",
				dashArray: [0, 8, 5]
			},
			title: {
				text: "Page Statistics",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			legend: {
				show: true,
				fontSize: '14px',
				fontFamily: 'Outfit',
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				},
				tooltipHoverFormatter: function(val, opts) {
					return (
						val +
						" - <strong>" +
						opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
						"</strong>"
					);
				}
			},
			markers: {
				size: 0,
				hover: {
					sizeOffset: 6
				}
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				categories: [
					"01 Jan",
					"02 Jan",
					"03 Jan",
					"04 Jan",
					"05 Jan",
					"06 Jan",
					"07 Jan",
					"08 Jan",
					"09 Jan",
					"10 Jan",
					"11 Jan",
					"12 Jan"
				]
			},
			tooltip: {
				y: [
					{
						title: {
							formatter: function(val) {
								return val + " (mins)";
							}
						}
					},
					{
						title: {
							formatter: function(val) {
								return val + " per session";
							}
						}
					},
					{
						title: {
							formatter: function(val) {
								return val;
							}
						}
					}
				]
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#dashed_line_chart'), options);
		chart.render();

	}

	/* Stepline Line Chart JS*/
	const getSteplineLinId = document.getElementById('stepline_line_chart');
	if (getSteplineLinId) {
		var options = {

			series: [
				{
					name: "Stepline Series",
					data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
				}
			],
			chart: {
				type: "line",
				height: 350
			},
			stroke: {
				curve: "stepline"
			},
			colors: [
				"#0f79f3"
			],
			dataLabels: {
				enabled: false
			},
			title: {
				text: "Stepline Chart",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			markers: {
				hover: {
					sizeOffset: 4
				}
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#stepline_line_chart'), options);
		chart.render();

	}

	/* Basic Area Chart JS*/
	const getBasicAreaId = document.getElementById('basic_area_chart');
	if (getBasicAreaId) {
		var options = {

			series: [
				{
					name: "STOCK ABC",
					data: [
						8107.85,
						8128.0,
						8122.9,
						8165.5,
						8340.7,
						8423.7,
						8423.5,
						8514.3,
						8481.85,
						8487.7,
						8506.9,
						8626.2,
						8668.95,
						8602.3,
						8607.55,
						8512.9,
						8496.25,
						8600.65,
						8881.1,
						9340.85
					]
				}
			],
			chart: {
				type: "area",
				height: 350,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: true
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#0f79f3"
			],
			stroke: {
				curve: "straight"
			},
			title: {
				text: "Fundamental Analysis of Stocks",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			subtitle: {
				text: "Price Movements",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: 'normal',
					fontSize: '14px',
					fontFamily: 'Outfit',
					color: '#919aa3'
				}
			},
			labels: [
				"13 Nov 2025",
				"14 Nov 2025",
				"15 Nov 2025",
				"16 Nov 2025",
				"17 Nov 2025",
				"20 Nov 2025",
				"21 Nov 2025",
				"22 Nov 2025",
				"23 Nov 2025",
				"24 Nov 2025",
				"27 Nov 2025",
				"28 Nov 2025",
				"29 Nov 2025",
				"30 Nov 2025",
				"01 Dec 2025",
				"04 Dec 2025",
				"05 Dec 2025",
				"06 Dec 2025",
				"07 Dec 2025",
				"08 Dec 2025"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			yaxis: {
				opposite: true,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_area_chart'), options);
		chart.render();

	}

	/* Spline Area Chart JS*/
	const getSplineAreaId = document.getElementById('spline_area_chart');
	if (getSplineAreaId) {
		var options = {

			series: [
				{
					name: "Daxa",
					data: [31, 40, 28, 51, 42, 109, 100]
				},
				{
					name: "Social",
					data: [11, 32, 45, 32, 34, 52, 41]
				}
			],
			chart: {
				height: 350,
				type: "area",
				toolbar: {
					show: true
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "smooth"
			},
			colors: [
				"#796df6", "#0f79f3"
			],
			xaxis: {
				type: "datetime",
				categories: [
					"2018-09-19T00:00:00.000Z",
					"2018-09-19T01:30:00.000Z",
					"2018-09-19T02:30:00.000Z",
					"2018-09-19T03:30:00.000Z",
					"2018-09-19T04:30:00.000Z",
					"2018-09-19T05:30:00.000Z",
					"2018-09-19T06:30:00.000Z"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			tooltip: {
				x: {
					format: "dd/MM/yy HH:mm"
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			legend: {
				show: true,
				fontSize: '14px',
				fontFamily: 'Outfit',
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#spline_area_chart'), options);
		chart.render();

	}

	/* Negative Values Area Chart JS*/
	const getNegativeValuesAreaId = document.getElementById('negative_values_area_chart');
	if (getNegativeValuesAreaId) {
		var options = {

			series: [
				{
					name: "North",
					data: [
						{
							x: 1996,
							y: 322
						},
						{
							x: 1997,
							y: 324
						},
						{
							x: 1998,
							y: 329
						},
						{
							x: 1999,
							y: 342
						},
						{
							x: 2000,
							y: 348
						},
						{
							x: 2001,
							y: 334
						},
						{
							x: 2002,
							y: 325
						},
						{
							x: 2003,
							y: 316
						},
						{
							x: 2004,
							y: 318
						},
						{
							x: 2005,
							y: 330
						},
						{
							x: 2006,
							y: 355
						},
						{
							x: 2007,
							y: 366
						},
						{
							x: 2008,
							y: 337
						},
						{
							x: 2009,
							y: 352
						},
						{
							x: 2010,
							y: 377
						},
						{
							x: 2011,
							y: 383
						},
						{
							x: 2012,
							y: 344
						},
						{
							x: 2013,
							y: 366
						},
						{
							x: 2014,
							y: 389
						},
						{
							x: 2015,
							y: 334
						}
					]
				},
				{
					name: "South",
					data: [
						{
							x: 1996,
							y: 162
						},
						{
							x: 1997,
							y: 90
						},
						{
							x: 1998,
							y: 50
						},
						{
							x: 1999,
							y: 77
						},
						{
							x: 2000,
							y: 35
						},
						{
							x: 2001,
							y: -45
						},
						{
							x: 2002,
							y: -88
						},
						{
							x: 2003,
							y: -120
						},
						{
							x: 2004,
							y: -156
						},
						{
							x: 2005,
							y: -123
						},
						{
							x: 2006,
							y: -88
						},
						{
							x: 2007,
							y: -66
						},
						{
							x: 2008,
							y: -45
						},
						{
							x: 2009,
							y: -29
						},
						{
							x: 2010,
							y: -45
						},
						{
							x: 2011,
							y: -88
						},
						{
							x: 2012,
							y: -132
						},
						{
							x: 2013,
							y: -146
						},
						{
							x: 2014,
							y: -169
						},
						{
							x: 2015,
							y: -184
						}
					]
				}
			],
			chart: {
				type: "area",
				height: 375
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight"
			},
			title: {
				text: "Area with Negative Values",
				align: "left",
				offsetX: -9,
				offsetY: -6,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			colors: [
				"#00cae3", "#0f79f3"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 4,
				floating: false,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					offsetY: -7,
					offsetX: 0
				},
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				}
			},
			fill: {
				opacity: 0.5
			},
			tooltip: {
				x: {
					format: "yyyy"
				},
				fixed: {
					enabled: false,
					position: "topRight"
				}
			},
			grid: {
				yaxis: {
					lines: {
						offsetX: -30
					}
				},
				padding: {
					left: 20
				},
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				offsetY: 5,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#negative_values_area_chart'), options);
		chart.render();

	}

	/* Stacked Area Chart JS*/
	const getStackedAreaId = document.getElementById('stacked_area_chart');
	if (getStackedAreaId) {
		var options = {

			series: [
				{
					name: "South",
					data: [31, 40, 28, 51, 42, 109, 100]
				},
				{
					name: "North",
					data: [31, 40, 28, 51, 42, 109, 100]
				},
				{
					name: "Central",
					data: [31, 40, 28, 51, 42, 109, 100]
				}
			],
			chart: {
				type: "area",
				height: 350,
				stacked: true,
				events: {
					selection: function(chart , e ) {
						console.log(new Date(e.xaxis.min));
					}
				},
				toolbar: {
					show: true
				}
			},
			colors: [
				"#796df6", "#0f79f3", "#00cae3"
			],
			dataLabels: {
				enabled: false
			},
			fill: {
				type: "gradient",
				gradient: {
					opacityFrom: 0.6,
					opacityTo: 0.8
				}
			},
			legend: {
				show: true,
				position: "top",
				fontSize: "14px",
				horizontalAlign: "left",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			},
			labels: [
				"13 Nov 2025",
				"14 Nov 2025",
				"15 Nov 2025",
				"16 Nov 2025",
				"17 Nov 2025",
				"20 Nov 2025",
				"21 Nov 2025"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px"
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px"
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#stacked_area_chart'), options);
		chart.render();

	}

	/* Missing Null Values Area JS*/
	const getMissingNullValuesAreaId = document.getElementById('missing_null_values_area_chart');
	if (getMissingNullValuesAreaId) {
		var options = {

			series: [
				{
					name: "Network",
					data: [
						{
							x: "Dec 23 2017",
							y: null
						},
						{
							x: "Dec 24 2017",
							y: 44
						},
						{
							x: "Dec 25 2017",
							y: 31
						},
						{
							x: "Dec 26 2017",
							y: 38
						},
						{
							x: "Dec 27 2017",
							y: null
						},
						{
							x: "Dec 28 2017",
							y: 32
						},
						{
							x: "Dec 29 2017",
							y: 55
						},
						{
							x: "Dec 30 2017",
							y: 51
						},
						{
							x: "Dec 31 2017",
							y: 67
						},
						{
							x: "Jan 01 2018",
							y: 22
						},
						{
							x: "Jan 02 2018",
							y: 34
						},
						{
							x: "Jan 03 2018",
							y: null
						},
						{
							x: "Jan 04 2018",
							y: null
						},
						{
							x: "Jan 05 2018",
							y: 11
						},
						{
							x: "Jan 06 2018",
							y: 4
						},
						{
							x: "Jan 07 2018",
							y: 15
						},
						{
							x: "Jan 08 2018",
							y: null
						},
						{
							x: "Jan 09 2018",
							y: 9
						},
						{
							x: "Jan 10 2018",
							y: 34
						},
						{
							x: "Jan 11 2018",
							y: null
						},
						{
							x: "Jan 12 2018",
							y: null
						},
						{
							x: "Jan 13 2018",
							y: 13
						},
						{
							x: "Jan 14 2018",
							y: null
						}
					]
				}
			],
			chart: {
				type: "area",
				height: 350,
				animations: {
					enabled: false
				},
				zoom: {
					enabled: false
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#0f79f3"
			],
			stroke: {
				curve: "straight"
			},
			fill: {
				opacity: 0.8,
				type: "pattern",
				pattern: {
					style: "horizontalLines",
					width: 5,
					height: 5,
					strokeWidth: 3
				}
			},
			markers: {
				size: 5,
				hover: {
					size: 9
				}
			},
			title: {
				text: "Network Monitoring",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			tooltip: {
				intersect: true,
				shared: false
			},
			theme: {
				palette: "palette1"
			},
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				title: {
					text: "Bytes Received",
					style: {
						color: "#475569",
						fontSize: "14px",
						fontFamily: 'Outfit',
						fontWeight: 500
					}
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#missing_null_values_area_chart'), options);
		chart.render();

	}

	/* Github Style Years Area Chart JS*/
	const getGithubStyleYearsAreaId = document.getElementById('github_style_years_area_chart');
	if (getGithubStyleYearsAreaId) {
		var options = {

			series: [
				{
					name: "commits",
					data: [
						{
							x: 1352592000000,
							a: 306,
							d: 33,
							y: 13
						},
						{
							x: 1353196800000,
							a: 77,
							d: 41,
							y: 11
						},
						{
							x: 1353801600000,
							a: 97,
							d: 52,
							y: 13
						},
						{
							x: 1354406400000,
							a: 349,
							d: 231,
							y: 27
						},
						{
							x: 1355011200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1355616000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1356220800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1356825600000,
							a: 93,
							d: 16,
							y: 12
						},
						{
							x: 1357430400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1358035200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1358640000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1359244800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1359849600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1360454400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1361059200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1361664000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1362268800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1362873600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1363478400000,
							a: 47,
							d: 20,
							y: 6
						},
						{
							x: 1364083200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1364688000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1365292800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1365897600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1366502400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1367107200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1367712000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1368316800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1368921600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1369526400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1370131200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1370736000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1371340800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1371945600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1372550400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1373155200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1373760000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1374364800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1374969600000,
							a: 22,
							d: 16,
							y: 9
						},
						{
							x: 1375574400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1376179200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1376784000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1377388800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1377993600000,
							a: 104,
							d: 79,
							y: 12
						},
						{
							x: 1378598400000,
							a: 60,
							d: 17,
							y: 9
						},
						{
							x: 1379203200000,
							a: 27,
							d: 36,
							y: 3
						},
						{
							x: 1379808000000,
							a: 283,
							d: 199,
							y: 20
						},
						{
							x: 1380412800000,
							a: 1,
							d: 1,
							y: 1
						},
						{
							x: 1381017600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1381622400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1382227200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1382832000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1383436800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1384041600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1384646400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1385251200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1385856000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1386460800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1387065600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1387670400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1388275200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1388880000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1389484800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1390089600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1390694400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1391299200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1391904000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1392508800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1393113600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1393718400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1394323200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1394928000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1395532800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1396137600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1396742400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1397347200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1397952000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1398556800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1399161600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1399766400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1400371200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1400976000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1401580800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1402185600000,
							a: 115,
							d: 38,
							y: 11
						},
						{
							x: 1402790400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1403395200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1404000000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1404604800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1405209600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1405814400000,
							a: 598,
							d: 209,
							y: 34
						},
						{
							x: 1406419200000,
							a: 195,
							d: 119,
							y: 18
						},
						{
							x: 1407024000000,
							a: 174,
							d: 54,
							y: 13
						},
						{
							x: 1407628800000,
							a: 1,
							d: 1,
							y: 1
						},
						{
							x: 1408233600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1408838400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1409443200000,
							a: 2,
							d: 2,
							y: 1
						},
						{
							x: 1410048000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1410652800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1411257600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1411862400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1412467200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1413072000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1413676800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1414281600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1414886400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1415491200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1416096000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1416700800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1417305600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1417910400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1418515200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1419120000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1419724800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1420329600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1420934400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1421539200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1422144000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1422748800000,
							a: 46,
							d: 43,
							y: 8
						},
						{
							x: 1423353600000,
							a: 20,
							d: 4,
							y: 1
						},
						{
							x: 1423958400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1424563200000,
							a: 18,
							d: 11,
							y: 4
						},
						{
							x: 1425168000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1425772800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1426377600000,
							a: 54,
							d: 63,
							y: 4
						},
						{
							x: 1426982400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1427587200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1428192000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1428796800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1429401600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1430006400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1430611200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1431216000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1431820800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1432425600000,
							a: 10,
							d: 11,
							y: 1
						},
						{
							x: 1433030400000,
							a: 296,
							d: 172,
							y: 18
						},
						{
							x: 1433635200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1434240000000,
							a: 10,
							d: 13,
							y: 2
						},
						{
							x: 1434844800000,
							a: 20,
							d: 16,
							y: 3
						},
						{
							x: 1435449600000,
							a: 24,
							d: 10,
							y: 3
						},
						{
							x: 1436054400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1436659200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1437264000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1437868800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1438473600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1439078400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1439683200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1440288000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1440892800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1441497600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1442102400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1442707200000,
							a: 275,
							d: 129,
							y: 12
						},
						{
							x: 1443312000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1443916800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1444521600000,
							a: 1213,
							d: 837,
							y: 5
						},
						{
							x: 1445126400000,
							a: 299,
							d: 54,
							y: 3
						},
						{
							x: 1445731200000,
							a: 30,
							d: 33,
							y: 1
						},
						{
							x: 1446336000000,
							a: 202,
							d: 185,
							y: 18
						},
						{
							x: 1446940800000,
							a: 554,
							d: 292,
							y: 39
						},
						{
							x: 1447545600000,
							a: 9030,
							d: 44,
							y: 7
						},
						{
							x: 1448150400000,
							a: 8,
							d: 1,
							y: 1
						},
						{
							x: 1448755200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1449360000000,
							a: 18,
							d: 12,
							y: 5
						},
						{
							x: 1449964800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1450569600000,
							a: 4,
							d: 3,
							y: 2
						},
						{
							x: 1451174400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1451779200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1452384000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1452988800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1453593600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1454198400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1454803200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1455408000000,
							a: 2,
							d: 2,
							y: 1
						},
						{
							x: 1456012800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1456617600000,
							a: 32,
							d: 43,
							y: 1
						},
						{
							x: 1457222400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1457827200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1458432000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1459036800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1459641600000,
							a: 23,
							d: 13,
							y: 3
						},
						{
							x: 1460246400000,
							a: 421,
							d: 335,
							y: 9
						},
						{
							x: 1460851200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1461456000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1462060800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1462665600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1463270400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1463875200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1464480000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1465084800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1465689600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1466294400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1466899200000,
							a: 6,
							d: 1,
							y: 1
						},
						{
							x: 1467504000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1468108800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1468713600000,
							a: 886,
							d: 49,
							y: 15
						},
						{
							x: 1469318400000,
							a: 38,
							d: 26,
							y: 4
						},
						{
							x: 1469923200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1470528000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1471132800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1471737600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1472342400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1472947200000,
							a: 2,
							d: 2,
							y: 1
						},
						{
							x: 1473552000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1474156800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1474761600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1475366400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1475971200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1476576000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1477180800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1477785600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1478390400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1478995200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1479600000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1480204800000,
							a: 8,
							d: 0,
							y: 1
						},
						{
							x: 1480809600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1481414400000,
							a: 1,
							d: 1,
							y: 1
						},
						{
							x: 1482019200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1482624000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1483228800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1483833600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1484438400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1485043200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1485648000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1486252800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1486857600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1487462400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1488067200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1488672000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1489276800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1489881600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1490486400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1491091200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1491696000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1492300800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1492905600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1493510400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1494115200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1494720000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1495324800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1495929600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1496534400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1497139200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1497744000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1498348800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1498953600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1499558400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1500163200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1500768000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1501372800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1501977600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1502582400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1503187200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1503792000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1504396800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1505001600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1505606400000,
							a: 2,
							d: 2,
							y: 2
						},
						{
							x: 1506211200000,
							a: 49,
							d: 10,
							y: 4
						},
						{
							x: 1506816000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1507420800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1508025600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1508630400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1509235200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1509840000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1510444800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1511049600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1511654400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1512259200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1512864000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1513468800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1514073600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1514678400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1515283200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1515888000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1516492800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1517097600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1517702400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1518307200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1518912000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1519516800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1520121600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1520726400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1521331200000,
							a: 768,
							d: 2125,
							y: 12
						},
						{
							x: 1521936000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1522540800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1523145600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1523750400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1524355200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1524960000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1525564800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1526169600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1526774400000,
							a: 1,
							d: 0,
							y: 1
						}
					]
				}
			],
			chart: {
				id: "chartyear",
				type: "area",
				height: 160,
				toolbar: {
					show: false,
					autoSelected: "pan"
				}
			},
			colors: [
				"#0f79f3"
			],
			yaxis: {
				show: false,
				tickAmount: 3,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: 1,
				type: "solid"
			},
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			stroke: {
				width: 0,
				curve: "smooth"
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#github_style_years_area_chart'), options);
		chart.render();

	}

	/* Github Style Months Area Chart JS*/
	const getGithubStyleMonthsAreaId = document.getElementById('github_style_months_area_chart');
	if (getGithubStyleMonthsAreaId) {
		var options = {

			series: [
				{
					name: "commits",
					data: [
						{
							x: 1352592000000,
							a: 306,
							d: 33,
							y: 13
						},
						{
							x: 1353196800000,
							a: 77,
							d: 41,
							y: 11
						},
						{
							x: 1353801600000,
							a: 97,
							d: 52,
							y: 13
						},
						{
							x: 1354406400000,
							a: 349,
							d: 231,
							y: 27
						},
						{
							x: 1355011200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1355616000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1356220800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1356825600000,
							a: 93,
							d: 16,
							y: 12
						},
						{
							x: 1357430400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1358035200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1358640000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1359244800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1359849600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1360454400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1361059200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1361664000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1362268800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1362873600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1363478400000,
							a: 47,
							d: 20,
							y: 6
						},
						{
							x: 1364083200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1364688000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1365292800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1365897600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1366502400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1367107200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1367712000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1368316800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1368921600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1369526400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1370131200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1370736000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1371340800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1371945600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1372550400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1373155200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1373760000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1374364800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1374969600000,
							a: 22,
							d: 16,
							y: 9
						},
						{
							x: 1375574400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1376179200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1376784000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1377388800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1377993600000,
							a: 104,
							d: 79,
							y: 12
						},
						{
							x: 1378598400000,
							a: 60,
							d: 17,
							y: 9
						},
						{
							x: 1379203200000,
							a: 27,
							d: 36,
							y: 3
						},
						{
							x: 1379808000000,
							a: 283,
							d: 199,
							y: 20
						},
						{
							x: 1380412800000,
							a: 1,
							d: 1,
							y: 1
						},
						{
							x: 1381017600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1381622400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1382227200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1382832000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1383436800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1384041600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1384646400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1385251200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1385856000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1386460800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1387065600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1387670400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1388275200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1388880000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1389484800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1390089600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1390694400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1391299200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1391904000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1392508800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1393113600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1393718400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1394323200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1394928000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1395532800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1396137600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1396742400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1397347200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1397952000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1398556800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1399161600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1399766400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1400371200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1400976000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1401580800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1402185600000,
							a: 115,
							d: 38,
							y: 11
						},
						{
							x: 1402790400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1403395200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1404000000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1404604800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1405209600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1405814400000,
							a: 598,
							d: 209,
							y: 34
						},
						{
							x: 1406419200000,
							a: 195,
							d: 119,
							y: 18
						},
						{
							x: 1407024000000,
							a: 174,
							d: 54,
							y: 13
						},
						{
							x: 1407628800000,
							a: 1,
							d: 1,
							y: 1
						},
						{
							x: 1408233600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1408838400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1409443200000,
							a: 2,
							d: 2,
							y: 1
						},
						{
							x: 1410048000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1410652800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1411257600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1411862400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1412467200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1413072000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1413676800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1414281600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1414886400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1415491200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1416096000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1416700800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1417305600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1417910400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1418515200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1419120000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1419724800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1420329600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1420934400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1421539200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1422144000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1422748800000,
							a: 46,
							d: 43,
							y: 8
						},
						{
							x: 1423353600000,
							a: 20,
							d: 4,
							y: 1
						},
						{
							x: 1423958400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1424563200000,
							a: 18,
							d: 11,
							y: 4
						},
						{
							x: 1425168000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1425772800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1426377600000,
							a: 54,
							d: 63,
							y: 4
						},
						{
							x: 1426982400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1427587200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1428192000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1428796800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1429401600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1430006400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1430611200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1431216000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1431820800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1432425600000,
							a: 10,
							d: 11,
							y: 1
						},
						{
							x: 1433030400000,
							a: 296,
							d: 172,
							y: 18
						},
						{
							x: 1433635200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1434240000000,
							a: 10,
							d: 13,
							y: 2
						},
						{
							x: 1434844800000,
							a: 20,
							d: 16,
							y: 3
						},
						{
							x: 1435449600000,
							a: 24,
							d: 10,
							y: 3
						},
						{
							x: 1436054400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1436659200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1437264000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1437868800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1438473600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1439078400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1439683200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1440288000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1440892800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1441497600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1442102400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1442707200000,
							a: 275,
							d: 129,
							y: 12
						},
						{
							x: 1443312000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1443916800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1444521600000,
							a: 1213,
							d: 837,
							y: 5
						},
						{
							x: 1445126400000,
							a: 299,
							d: 54,
							y: 3
						},
						{
							x: 1445731200000,
							a: 30,
							d: 33,
							y: 1
						},
						{
							x: 1446336000000,
							a: 202,
							d: 185,
							y: 18
						},
						{
							x: 1446940800000,
							a: 554,
							d: 292,
							y: 39
						},
						{
							x: 1447545600000,
							a: 9030,
							d: 44,
							y: 7
						},
						{
							x: 1448150400000,
							a: 8,
							d: 1,
							y: 1
						},
						{
							x: 1448755200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1449360000000,
							a: 18,
							d: 12,
							y: 5
						},
						{
							x: 1449964800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1450569600000,
							a: 4,
							d: 3,
							y: 2
						},
						{
							x: 1451174400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1451779200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1452384000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1452988800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1453593600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1454198400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1454803200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1455408000000,
							a: 2,
							d: 2,
							y: 1
						},
						{
							x: 1456012800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1456617600000,
							a: 32,
							d: 43,
							y: 1
						},
						{
							x: 1457222400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1457827200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1458432000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1459036800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1459641600000,
							a: 23,
							d: 13,
							y: 3
						},
						{
							x: 1460246400000,
							a: 421,
							d: 335,
							y: 9
						},
						{
							x: 1460851200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1461456000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1462060800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1462665600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1463270400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1463875200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1464480000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1465084800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1465689600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1466294400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1466899200000,
							a: 6,
							d: 1,
							y: 1
						},
						{
							x: 1467504000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1468108800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1468713600000,
							a: 886,
							d: 49,
							y: 15
						},
						{
							x: 1469318400000,
							a: 38,
							d: 26,
							y: 4
						},
						{
							x: 1469923200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1470528000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1471132800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1471737600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1472342400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1472947200000,
							a: 2,
							d: 2,
							y: 1
						},
						{
							x: 1473552000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1474156800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1474761600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1475366400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1475971200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1476576000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1477180800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1477785600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1478390400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1478995200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1479600000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1480204800000,
							a: 8,
							d: 0,
							y: 1
						},
						{
							x: 1480809600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1481414400000,
							a: 1,
							d: 1,
							y: 1
						},
						{
							x: 1482019200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1482624000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1483228800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1483833600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1484438400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1485043200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1485648000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1486252800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1486857600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1487462400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1488067200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1488672000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1489276800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1489881600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1490486400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1491091200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1491696000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1492300800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1492905600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1493510400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1494115200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1494720000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1495324800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1495929600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1496534400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1497139200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1497744000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1498348800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1498953600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1499558400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1500163200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1500768000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1501372800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1501977600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1502582400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1503187200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1503792000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1504396800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1505001600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1505606400000,
							a: 2,
							d: 2,
							y: 2
						},
						{
							x: 1506211200000,
							a: 49,
							d: 10,
							y: 4
						},
						{
							x: 1506816000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1507420800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1508025600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1508630400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1509235200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1509840000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1510444800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1511049600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1511654400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1512259200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1512864000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1513468800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1514073600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1514678400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1515283200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1515888000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1516492800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1517097600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1517702400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1518307200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1518912000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1519516800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1520121600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1520726400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1521331200000,
							a: 768,
							d: 2125,
							y: 12
						},
						{
							x: 1521936000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1522540800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1523145600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1523750400000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1524355200000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1524960000000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1525564800000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1526169600000,
							a: 0,
							d: 0,
							y: 0
						},
						{
							x: 1526774400000,
							a: 1,
							d: 0,
							y: 1
						}
					]
				}
			],
			chart: {
				id: "chartyear",
				type: "area",
				height: 160,
				toolbar: {
					show: false,
					autoSelected: "pan"
				}
			},
			colors: [
				"#0f79f3"
			],
			yaxis: {
				show: false,
				tickAmount: 3,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: 1,
				type: "solid"
			},
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			stroke: {
				width: 0,
				curve: "smooth"
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#github_style_months_area_chart'), options);
		chart.render();

	}

	/* Basic Column Chart JS*/
	const getBasicColumnId = document.getElementById('basic_column_chart');
	if (getBasicColumnId) {
		var options = {

			series: [
				{
					name: "Net Profit",
					data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
				},
				{
					name: "Revenue",
					data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
				},
				{
					name: "Free Cash Flow",
					data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
				}
			],
			chart: {
				type: "bar",
				height: 350,
				toolbar: {
					show: false
				}
			},
			colors: [
				"#00cae3", "#0f79f3", "#ffb264"
			],
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "55%",
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 3,
				colors: ["transparent"]
			},
			xaxis: {
				categories: [
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				title: {
					text: "$ (thousands)",
					style: {
						color: "#475569",
						fontSize: "14px",
						fontFamily: 'Outfit',
						fontWeight: 500
					}
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val;
					}
				}
			},
			legend: {
				show: true,
				offsetY: 5,
				fontSize: '14px',
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 5
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_column_chart'), options);
		chart.render();

	}

	/* Data Labels Column Chart JS*/ 
	const getDataLabelsColumnId = document.getElementById('data_labels_column_chart');
	if (getDataLabelsColumnId) {
		var options = {

			series: [
				{
					name: "Inflation",
					data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
				}
			],
			chart: {
				height: 350,
				type: "bar",
				toolbar: {
					show: true
				}
			},
			plotOptions: {
				bar: {
					dataLabels: {
						position: "top" // top, center, bottom
					}
				}
			},
			dataLabels: {
				enabled: true,
				formatter: function(val) {
					return val + "%";
				},
				offsetY: -25,
				style: {
					fontSize: "12px",
					fontFamily: 'Outfit',
					colors: ["#304758"]
				}
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec"
				],
				position: "bottom",
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				crosshairs: {
					fill: {
						type: "gradient",
						gradient: {
							colorFrom: "#D8E3F0",
							colorTo: "#BED1E6",
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5
						}
					}
				},
				tooltip: {
					enabled: true,
					offsetY: -35
				}
			},
			colors: [
				"#0f79f3"
			],
			yaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				labels: {
					show: false,
					formatter: function(val) {
						return val + "%";
					},
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			title: {
				text: "Monthly Inflation in Brazil, 2025",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#data_labels_column_chart'), options);
		chart.render();

	}

	/* Stacked Column Chart JS*/
	const getStackedColumnId = document.getElementById('stacked_column_chart');
	if (getStackedColumnId) {
		var options = {

			series: [
				{
					name: "Product A",
					data: [44, 55, 41, 67, 22, 43]
				},
				{
					name: "Product B",
					data: [13, 23, 20, 8, 13, 27]
				},
				{
					name: "Product C",
					data: [11, 17, 15, 15, 21, 14]
				},
				{
					name: "Product D",
					data: [21, 7, 25, 13, 22, 8]
				}
			],
			chart: {
				type: "bar",
				height: 350,
				stacked: true,
				toolbar: {
					show: true
				},
				zoom: {
					enabled: true
				}
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						legend: {
							position: "bottom",
							offsetX: -10,
							offsetY: 0
						}
					}
				}
			],
			plotOptions: {
				bar: {
					horizontal: false
				}
			},
			colors: [
				"#0f79f3", "#00cae3", "#ffb264", "#e74c3c"
			],
			xaxis: {
				type: "category",
				categories: [
					"01/2025",
					"02/2025",
					"03/2025",
					"04/2025",
					"05/2025",
					"06/2025"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				position: "right",
				fontSize: "14px",
				fontFamily: 'Outfit',
				offsetY: 40,
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 0,
					vertical: 5
				}
			},
			fill: {
				opacity: 1
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#stacked_column_chart'), options);
		chart.render();

	}

	/* Range Column Chart JS*/
	const getRangeColumnId = document.getElementById('range_column_chart');
	if (getRangeColumnId) {
		var options = {

			series: [
				{
					name: "Blue",
					data: [
						{
							x: "Team A",
							y: [1, 5]
						},
						{
							x: "Team B",
							y: [4, 6]
						},
						{
							x: "Team C",
							y: [5, 8]
						},
						{
							x: "Team D",
							y: [3, 11]
						}
					]
				},
				{
					name: "Green",
					data: [
						{
							x: "Team A",
							y: [2, 6]
						},
						{
							x: "Team B",
							y: [1, 3]
						},
						{
							x: "Team C",
							y: [7, 8]
						},
						{
							x: "Team D",
							y: [5, 9]
						}
					]
				}
			],
			chart: {
				type: "rangeBar",
				height: 350,
				toolbar: {
					show: true
				}
			},
			colors: [
				"#0f79f3", "#e74c3c"
			],
			plotOptions: {
				bar: {
					horizontal: false
				}
			},
			dataLabels: {
				enabled: true
			},
			legend: {
				show: true,
				offsetY: 5,
				fontSize: '14px',
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 5
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#range_column_chart'), options);
		chart.render();

	}

	/* Rotated Labels Column Chart JS*/
	const getRotatedLabelsColumnId = document.getElementById('rotated_labels_column_chart');
	if (getRotatedLabelsColumnId) {
		var options = {

			series: [
				{
					name: "Servings",
					data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
				}
			],
			annotations: {
				points: [
					{
						x: "Bananas",
						seriesIndex: 0,
						label: {
							borderColor: "#0f79f3",
							offsetY: 0,
							style: {
								fontSize: '14px',
								fontFamily: 'Outfit',
								color: "#ffffff",
								background: "#0f79f3"
							},
							text: "Bananas are good"
						}
					}
				]
			},
			chart: {
				height: 350,
				type: "bar",
				toolbar: {
					show: true
				}
			},
			plotOptions: {
				bar: {
					columnWidth: "50%",
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: 2
			},
			grid: {
				row: {
					colors: ["#ffffff", "#f4f6fc"]
				},
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					rotate: -45,
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				categories: [
					"Apples",
					"Oranges",
					"Strawberries",
					"Pineapples",
					"Mangoes",
					"Bananas",
					"Blackberries",
					"Pears",
					"Watermelons",
					"Cherries",
					"Pomegranates",
					"Tangerines",
					"Papayas"
				],
				tickPlacement: "on"
			},
			yaxis: {
				title: {
					text: "Servings",
					style: {
						color: "#475569",
						fontSize: "14px",
						fontFamily: 'Outfit',
						fontWeight: 500
					}
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			fill: {
				type: "gradient",
				gradient: {
					shade: "light",
					type: "horizontal",
					shadeIntensity: 0.25,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 0.85,
					opacityTo: 0.85,
					// stops: [50, 0, 100]
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#rotated_labels_column_chart'), options);
		chart.render();

	}

	/* Distributed Column Chart JS*/
	const getDistributedColumnId = document.getElementById('distributed_column_chart');
	if (getDistributedColumnId) {
		var options = {

			series: [
				{
					name: "distibuted",
					data: [21, 22, 10, 28, 16, 21, 13, 30]
				}
			],
			chart: {
				height: 350,
				type: "bar",
				events: {
					click: function(chart, w, e) {
						// console.log(chart, w, e)
					}
				}
			},
			colors: [
				"#0f79f3",
				"#796df6",
				"#00cae3",
				"#ffb264",
				"#2ed47e",
				"#e74c3c",
				"#26a69a",
				"#d10ce8"
			],
			plotOptions: {
				bar: {
					columnWidth: "45%",
					distributed: true
				}
			},
			dataLabels: {
				enabled: false
			},
			legend: {
				offsetY: 5,
				show: false,
				fontSize: '14px',
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 5
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0",
				row: {
					colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			xaxis: {
				categories: [
					["John", "Doe"],
					["Joe", "Smith"],
					["Jake", "Williams"],
					"Amber",
					["Peter", "Brown"],
					["Mary", "Evans"],
					["David", "Wilson"],
					["Lily", "Roberts"]
				],
				labels: {
					show: true,
					style: {
						colors: [
							"#0f79f3",
							"#796df6",
							"#00cae3",
							"#ffb264",
							"#2ed47e",
							"#e74c3c",
							"#26a69a",
							"#d10ce8"
						],
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#distributed_column_chart'), options);
		chart.render();

	}

	/* Line Column Chart JS*/
	const getLineColumnId = document.getElementById('line_column_chart');
	if (getLineColumnId) {
		var options = {

			series: [
				{
					name: "Website Blog",
					type: "column",
					data: [440, 505, 414, 671, 227, 413, 201, 352, 752]
				},
				{
					name: "Social Media",
					type: "line",
					data: [23, 42, 35, 27, 43, 22, 17, 31, 22]
				}
			],
			chart: {
				height: 350,
				type: "line",
				toolbar: {
					show: true
				}
			},
			stroke: {
				width: [0, 4]
			},
			title: {
				text: "Traffic Sources",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					color: '#475569'
				}
			},
			dataLabels: {
				enabled: true,
				enabledOnSeries: [1],
				style: {
					fontSize: '12px'
				}
			},
			labels: [
				"01 Jan",
				"02 Jan",
				"03 Jan",
				"04 Jan",
				"05 Jan",
				"06 Jan",
				"07 Jan",
				"08 Jan",
				"09 Jan"
			],
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px"
					}
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			colors: [
				"#0f79f3"
			],
			legend: {
				show: true,
				offsetY: 10,
				fontSize: '14px',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 10
				}
			},
			yaxis: [
				{
					title: {
						text: "Website Blog",
						style: {
							color: 'transparent'
						}
					},
					labels: {
						show: true,
						style: {
							colors: "#919aa3",
							fontSize: "14px"
						}
					},
					axisBorder: {
						show: false
					}
				},
				{
					opposite: true,
					title: {
						text: "Social Media",
						style: {
							color: 'transparent'
						}
					},
					labels: {
						show: true,
						style: {
							colors: "#919aa3",
							fontSize: "14px"
						}
					},
					axisBorder: {
						show: false
					}
				}
			]
		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#line_column_chart'), options);
		chart.render();

	}

	/* Multiple YAxis Chart JS*/
	const getMultipleYAxisId = document.getElementById('multiple_yAxis_chart');
	if (getMultipleYAxisId) {
		var options = {

			series: [
				{
					name: "Income",
					type: "column",
					data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
				},
				{
					name: "Cashflow",
					type: "column",
					data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
				},
				{
					name: "Revenue",
					type: "line",
					data: [20, 29, 37, 36, 44, 45, 50, 58]
				}
			],
			chart: {
				height: 350,
				type: "line",
				stacked: false
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				width: [1, 1, 4]
			},
			title: {
				text: "XYZ - Stock Analysis (2009 - 2016)",
				align: "left",
				offsetX: 110,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			xaxis: {
				categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: [
				{
					axisTicks: {
						show: true
					},
					axisBorder: {
						show: true,
						color: "#e0e0e0"
					},
					labels: {
						style: {
							colors: "#919aa3",
							fontSize: "14px",
							fontFamily: 'Outfit',
						}
					},
					title: {
						text: "Income (thousand crores)",
						style: {
							color: "#e74c3c",
							fontWeight: 400
						}
					},
					tooltip: {
						enabled: true
					}
				},
				{
					seriesName: "Income",
					opposite: true,
					axisTicks: {
						show: true
					},
					axisBorder: {
						show: true,
						color: "#e0e0e0"
					},
					labels: {
						style: {
							colors: "#919aa3",
							fontSize: "14px",
							fontFamily: 'Outfit',
						}
					},
					title: {
						text: "Operating Cashflow (thousand crores)",
						style: {
							color: "#0f79f3",
							fontWeight: 400,
							fontFamily: 'Outfit',
						}
					}
				},
				{
					seriesName: "Revenue",
					opposite: true,
					axisTicks: {
						show: true
					},
					axisBorder: {
						show: true,
						color: "#e0e0e0"
					},
					labels: {
						style: {
							colors: "#919aa3",
							fontSize: "14px",
							fontFamily: 'Outfit',
						}
					},
					title: {
						text: "Revenue (thousand crores)",
						style: {
							color: "#796df6",
							fontWeight: 400,
							fontFamily: 'Outfit',
						}
					}
				}
			],
			tooltip: {
				fixed: {
					enabled: true,
					position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
					offsetY: 30,
					offsetX: 60
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				horizontalAlign: "left",
				fontSize: "14px",
				fontFamily: 'Outfit',
				offsetX: 40,
				offsetY: 5,
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 5
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#multiple_yAxis_chart'), options);
		chart.render();

	}

	/* Line Area Chart JS*/
	const getLineArea2Id = document.getElementById('line_area_chart2');
	if (getLineArea2Id) {
		var options = {

			series: [
				{
					name: "Team A",
					type: "area",
					data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47]
				},
				{
					name: "Team B",
					type: "line",
					data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61]
				}
			],
			chart: {
				height: 350,
				type: "line",
				toolbar: {
					show: false
				}
			},
			stroke: {
				curve: "smooth"
			},
			colors: [
				"#0f79f3", "#ffb264"
			],
			fill: {
				type: "solid",
				opacity: [0.35, 1]
			},
			labels: [
				"Dec 01",
				"Dec 02",
				"Dec 03",
				"Dec 04",
				"Dec 05",
				"Dec 06",
				"Dec 07",
				"Dec 08",
				"Dec 09 ",
				"Dec 10"
			],
			markers: {
				size: 0
			},
			yaxis: [
				{
					title: {
						text: "Series A",
						style: {
							color: "#475569",
							fontSize: "14px",
							fontFamily: 'Outfit',
							fontWeight: 500
						}
					},
					labels: {
						style: {
							colors: "#919aa3",
							fontSize: "14px",
							fontFamily: 'Outfit',
						}
					},
					axisBorder: {
						show: false
					}
				},
				{
					opposite: true,
					title: {
						text: "Series B",
						style: {
							color: "#475569",
							fontSize: "14px",
							fontFamily: 'Outfit',
							fontWeight: 500
						}
					},
					labels: {
						style: {
							colors: "#919aa3",
							fontSize: "14px",
							fontFamily: 'Outfit',
						}
					},
					axisBorder: {
						show: false
					}
				}
			],
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			tooltip: {
				shared: true,
				intersect: false,
				y: {
					formatter: function(y) {
						if (typeof y !== "undefined") {
							return y.toFixed(0) + " points";
						}
						return y;
					}
				}
			},
			legend: {
				horizontalAlign: "center",
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				offsetY: 5,
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 5
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#line_area_chart2'), options);
		chart.render();

	}

	/* Line Column Area Chart JS*/
	const getLineColumnAreaChartId = document.getElementById('line_column_area_chart');
	if (getLineColumnAreaChartId) {
		var options = {

			series: [
				{
					name: "Team A",
					type: "column",
					data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
				},
				{
					name: "Team B",
					type: "area",
					data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
				},
				{
					name: "Team C",
					type: "line",
					data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
				}
			],
			chart: {
				height: 350,
				type: "line",
				stacked: false,
				toolbar: {
					show: false
				}
			},
			colors: [
				"#0f79f3", "#00cae3", "#e74c3c"
			],
			stroke: {
				width: [0, 2, 5],
				curve: "smooth"
			},
			plotOptions: {
				bar: {
					columnWidth: "50%"
				}
			},
			fill: {
				opacity: [0.85, 0.25, 1],
				gradient: {
					inverseColors: false,
					shade: "light",
					type: "vertical",
					opacityFrom: 0.85,
					opacityTo: 0.55,
					// stops: [0, 100, 100, 100]
				}
			},
			labels: [
				"01/01/2025",
				"02/01/2025",
				"03/01/2025",
				"04/01/2025",
				"05/01/2025",
				"06/01/2025",
				"07/01/2025",
				"08/01/2025",
				"09/01/2025",
				"10/01/2025",
				"11/01/2025"
			],
			markers: {
				size: 0
			},
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				title: {
					text: "Points",
					style: {
						color: "#475569",
						fontSize: "14px",
						fontFamily: 'Outfit',
						fontWeight: 500
					}
				},
				min: 0,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			tooltip: {
				shared: true,
				intersect: false,
				y: {
					formatter: function(y) {
						if (typeof y !== "undefined") {
							return y.toFixed(0) + " points";
						}
						return y;
					}
				}
			},
			legend: {
				horizontalAlign: "left",
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				offsetY: 0,
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#line_column_area_chart'), options);
		chart.render();

	}

	/* Basic Radial Bar Chart JS*/
	const getbBasicRadialbarId = document.getElementById('basic_radialbar_chart');
	if (getbBasicRadialbarId) {
		var options = {

			series: [70],
			chart: {
				height: 350,
				type: "radialBar"
			},
			plotOptions: {
				radialBar: {
					hollow: {
						size: "70%"
					}
				}
			},
			labels: ["Cricket"],
			colors: ["#0f79f3"]

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_radialbar_chart'), options);
		chart.render();

	}

	/* Multiple Radialbar Chart JS*/
	const getMultipleRadialbarId = document.getElementById('multiple_radialbar_chart');
	if (getMultipleRadialbarId) {
		var options = {

			series: [44, 55, 67, 83],
			chart: {
				height: 350,
				type: "radialBar"
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: "22px",
							fontFamily: 'Outfit',
						},
						value: {
							fontSize: "16px",
							fontFamily: 'Outfit',
						},
						total: {
							show: true,
							label: "Total",
							fontFamily: 'Outfit',
							formatter: function(w) {
								return "249";
							}
						}
					}
				}
			},
			labels: ["Apples", "Oranges", "Bananas", "Berries"],
			colors: [
				"#0f79f3", "#ffb264", "#e74c3c", "#00cae3"
			]

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#multiple_radialbar_chart'), options);
		chart.render();

	}

	/* Strocked Circular Gauge Radial Bar Chart JS*/
	const getStrockedCircularGaugeRadialBarId = document.getElementById('strocked_circular_gauge_radialbar_chart');
	if (getStrockedCircularGaugeRadialBarId) {
		var options = {

			series: [67],
			chart: {
				height: 370,
				type: "radialBar",
				offsetY: -10
			},
			plotOptions: {
				radialBar: {
					startAngle: -135,
					endAngle: 135,
					dataLabels: {
						name: {
							fontSize: "16px",
							fontFamily: 'Outfit',
							color: undefined,
							offsetY: 120
						},
						value: {
							offsetY: 76,
							fontSize: "22px",
							fontFamily: 'Outfit',
							color: undefined,
							formatter: function(val) {
								return val + "%";
							}
						}
					}
				}
			},
			fill: {
				type: "gradient",
				gradient: {
					shade: "dark",
					shadeIntensity: 0.15,
					inverseColors: false,
					opacityFrom: 1,
					opacityTo: 1,
					// stops: [0, 50, 65, 91]
				}
			},
			stroke: {
				dashArray: 4
			},
			labels: ["Median Ratio"],
			colors: ["#0f79f3"]

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#strocked_circular_gauge_radialbar_chart'), options);
		chart.render();

	}

	/* Semi Circular Gauge Radial Bar Chart JS*/
	const getSemiCircularGaugeRadialBarId = document.getElementById('semi_circular_gauge_radialbar_chart');
	if (getSemiCircularGaugeRadialBarId) {
		var options = {

			series: [76],
			chart: {
				type: "radialBar",
				offsetY: -20
			},
			plotOptions: {
				radialBar: {
					startAngle: -90,
					endAngle: 90,
					track: {
						background: "#e7e7e7",
						strokeWidth: "97%",
						margin: 5, // margin is in pixels
						dropShadow: {
							enabled: true,
							top: 2,
							left: 0,
							opacity: 0.31,
							blur: 2
						}
					},
					dataLabels: {
						name: {
							show: false
						},
						value: {
							offsetY: -2,
							fontSize: "22px",
							fontFamily: 'Outfit',
						}
					}
				}
			},
			fill: {
				type: "gradient",
				gradient: {
					shade: "light",
					shadeIntensity: 0.4,
					inverseColors: false,
					opacityFrom: 1,
					opacityTo: 1,
					// stops: [0, 50, 53, 91]
				}
			},
			labels: ["Average Results"],
			colors: ["#0f79f3"]

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#semi_circular_gauge_radialbar_chart'), options);
		chart.render();

	}

	/* Custom Angle Circle Radial Bar Chart JS*/
	const getCustomAngleCircleRadialBarId = document.getElementById('custom_angle_circle_radialbar_chart');
	if (getCustomAngleCircleRadialBarId) {
		var options = {

			series: [100, 90, 80, 70],
			chart: {
				height: 350,
				type: "radialBar"
			},
			plotOptions: {
				radialBar: {
					offsetY: 0,
					startAngle: 0,
					endAngle: 270,
					hollow: {
						margin: 10,
						size: "30%",
						image: undefined,
						background: "transparent"
					},
					dataLabels: {
						name: {
							show: false
						},
						value: {
							show: false
						}
					}
				}
			},
			colors: [
				"#757FEF", "#9EA5F4", "#C8CCF9", "#F1F2FD"
			],
			labels: [
				"Completed", "Active", "Assigned", "Pending"
			],
			legend: {
				show: true,
				offsetY: 0,
				offsetX: -20,
				floating: true,
				position: "left",
				fontSize: "14px",
				fontFamily: 'Outfit',
				labels: {
					colors: '#5B5B98'
				},
				formatter: function(seriesName, opts) {
					return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#custom_angle_circle_radialbar_chart'), options);
		chart.render();

	}

	/* Gradient Radial Bar Chart JS*/
	const getGradientRadialBarId = document.getElementById('gradient_radialbar_chart');
	if (getGradientRadialBarId) {
		var options = {

			series: [75],
			chart: {
				height: 350,
				type: "radialBar",
				toolbar: {
					show: true
				}
			},
			plotOptions: {
				radialBar: {
					startAngle: -135,
					endAngle: 225,
					hollow: {
						margin: 0,
						size: "70%",
						background: "#fff",
						image: undefined,
						position: "front",
						dropShadow: {
							enabled: true,
							top: 3,
							left: 0,
							blur: 4,
							opacity: 0.24
						}
					},
					track: {
						background: "#fff",
						strokeWidth: "67%",
						margin: 0, // margin is in pixels
						dropShadow: {
							enabled: true,
							top: -3,
							left: 0,
							blur: 4,
							opacity: 0.35
						}
					},
					dataLabels: {
						show: true,
						name: {
							offsetY: -10,
							show: true,
							color: "#888",
							fontSize: "17px",
							fontFamily: 'Outfit',
						},
						value: {
							formatter: function(val) {
								return parseInt(val.toString(), 10).toString();
							},
							color: "#111",
							fontSize: "36px",
							fontFamily: 'Outfit',
							show: true
						}
					}
				}
			},
			fill: {
				type: "gradient",
				gradient: {
					shade: "dark",
					type: "horizontal",
					shadeIntensity: 0.5,
					gradientToColors: ["#ABE5A1"],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					// stops: [0, 100]
				}
			},
			stroke: {
				lineCap: "round"
			},
			labels: ["Percent"]

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#gradient_radialbar_chart'), options);
		chart.render();

	}

	/* Basic Radar Chart JS*/ 
	const getBasicRadarId = document.getElementById('basic_radar_chart');
	if (getBasicRadarId) {
		var options = {

			series: [
				{
					name: "Fila",
					data: [80, 50, 30, 40, 100, 20]
				}
			],
			chart: {
				height: 350,
				type: "radar",
				toolbar: {
					show: true
				}
			},
			title: {
				text: "Basic Radar Chart",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			xaxis: {
				categories: ["January", "February", "March", "April", "May", "June"]
			},
			colors: ["#0f79f3"]

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_radar_chart'), options);
		chart.render();

	}

	/* Multiple Radar Chart JS*/ 
	const getMultipleRadarId = document.getElementById('multiple_radar_chart');
	if (getMultipleRadarId) {
		var options = {

			series: [
				{
					name: "Series Blue",
					data: [80, 50, 30, 40, 100, 20]
				},
				{
					name: "Series Green",
					data: [20, 30, 40, 80, 20, 80]
				},
				{
					name: "Series Orange",
					data: [44, 76, 78, 13, 43, 10]
				}
			],
			chart: {
				height: 350,
				type: "radar",
				dropShadow: {
					enabled: true,
					blur: 1,
					left: 1,
					top: 1
				}
			},
			title: {
				text: "Radar Chart - Multi Series",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			stroke: {
				width: 0
			},
			fill: {
				opacity: 0.4
			},
			markers: {
				size: 0
			},
			xaxis: {
				categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				offsetY: 0,
				fontSize: "14px",
				fontFamily: 'Outfit',
				position: "bottom",
				horizontalAlign: "center",
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#multiple_radar_chart'), options);
		chart.render();

	}

	/* Polygon Radar Chart JS*/ 
	const getPolygonRadarId = document.getElementById('polygon_radar_chart');
	if (getPolygonRadarId) {
		var options = {

			series: [
				{
					name: "Series 1",
					data: [20, 100, 40, 30, 50, 80, 33]
				}
			],
			chart: {
				height: 350,
				type: "radar"
			},
			dataLabels: {
				enabled: true
			},
			plotOptions: {
				radar: {
					size: 140,
					polygons: {
						fill: {
							colors: ["#f8f8f8", "#ffffff"]
						}
					}
				}
			},
			title: {
				text: "Radar with Polygon Fill",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			colors: [
				"#0f79f3"
			],
			markers: {
				size: 4,
				colors: ["#ffffff"],
				strokeColors: ["#0f79f3"],
				strokeWidth: 2
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val;
					}
				}
			},
			xaxis: {
				categories: [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday"
				]
			},
			yaxis: {
				tickAmount: 7
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#polygon_radar_chart'), options);
		chart.render();

	}

	/* Basic Pie Chart JS*/ 
	const getBasicPieId = document.getElementById('basic_pie_chart');
	if (getBasicPieId) {
		var options = {

			series: [44, 55, 13, 43, 22],
			chart: {
				width: 380,
				type: "pie"
			},
			labels: [
				"Team A", "Team B", "Team C", "Team D", "Team E"
			],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							position: "bottom"
						}
					}
				}
			],
			legend: {
				offsetY: 0,
				fontSize: "14px",
				fontFamily: 'Outfit',
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 0,
					vertical: 5
				}
			},
			stroke: {
				width: 0,
				show: true
			},
			colors: [
				// "#0f79f3", "#796df6", "#e74c3c", "#00cae3", "#ffb264"
			],
			dataLabels: {
				enabled: true,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_pie_chart'), options);
		chart.render();

	}

	/* Pie Donut Chart JS*/ 
	const getPieDonutId = document.getElementById('pie_donut_chart');
	if (getPieDonutId) {
		var options = {

			series: [44, 55, 13, 43, 22],
			chart: {
				type: "donut"
			},
			labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							position: "bottom"
						}
					}
				}
			],
			legend: {
				offsetY: 0,
				fontSize: "14px",
				fontFamily: 'Outfit',
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 0,
					vertical: 5
				}
			},
			stroke: {
				width: 0,
				show: true
			},
			colors: [
				// "#0f79f3", "#796df6", "#e74c3c", "#00cae3", "#ffb264"
			],
			dataLabels: {
				enabled: true,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#pie_donut_chart'), options);
		chart.render();

	}

	/* Pie Monochrome Chart JS*/ 
	const getPieMonochromeId = document.getElementById('pie_monochrome_chart');
	if (getPieMonochromeId) {
		var options = {

			series: [25, 15, 44, 55, 41, 17],
			chart: {
				width: "100%",
				type: "pie"
			},
			labels: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			],
			theme: {
				monochrome: {
					enabled: true
				}
			},
			title: {
				text: "Number of leads",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							position: "bottom"
						}
					}
				}
			],
			legend: {
				offsetY: 0,
				fontSize: "14px",
				fontFamily: 'Outfit',
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 0,
					vertical: 5
				}
			},
			stroke: {
				width: 0,
				show: true
			},
			dataLabels: {
				enabled: true,
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				},
				dropShadow: {
					enabled: false
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val + "%";
					}
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#pie_monochrome_chart'), options);
		chart.render();

	}

	/* Basic Polar Chart JS*/ 
	const getBasicPolarId = document.getElementById('basic_polar_chart');
	if (getBasicPolarId) {
		var options = {

			series: [
				14, 23, 21, 17, 15, 10, 12, 17, 21
			],
			chart: {
				type: "polarArea"
			},
			stroke: {
				colors: ["#ffffff"]
			},
			fill: {
				opacity: 0.8
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							position: "bottom"
						}
					}
				}
			],
			labels: [
				'Bananas', 'Apples', 'Grapes', 'Papayas', 'Mangos', 'Blueberrys', 'Cherrys', 'Oranges', 'Pineapples'
			],
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				offsetY: 0,
				fontSize: "14px",
				fontFamily: 'Outfit',
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 0,
					vertical: 5
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_polar_chart'), options);
		chart.render();

	}

	/* Polar Monochrome Chart JS*/ 
	const getPolarMonochromeId = document.getElementById('polar_monochrome_chart');
	if (getPolarMonochromeId) {
		var options = {

			series: [
				42, 39, 35, 29, 26
			],
			chart: {
				type: 'polarArea'
			},
			labels: [
				'Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'
			],
			fill: {
				opacity: 1
			},
			stroke: {
				width: 1,
				colors: undefined
			},
			yaxis: {
				show: false
			},
			legend: {
				position: 'bottom',
				fontSize: "14px",
				fontFamily: 'Outfit',
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			},
			plotOptions: {
				polarArea: {
					rings: {
						strokeWidth: 0
					}
				}
			},
			theme: {
				monochrome: {
					// enabled: true,
					shadeTo: 'light',
					shadeIntensity: 0.6
				}
			}

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#polar_monochrome_chart'), options);
		chart.render();

	}
	
	/* Basic Range Area Chart JS*/ 
	const getBasicRangeAreaId = document.getElementById('basic_range_area_chart');
	if (getBasicRangeAreaId) {
		var options = {

			series: [
				{
					name: "New York Temperature",
					data: [
						{
							x: "Jan",
							y: [-2, 4]
						},
						{
							x: "Feb",
							y: [-1, 6]
						},
						{
							x: "Mar",
							y: [3, 10]
						},
						{
							x: "Apr",
							y: [8, 16]
						},
						{
							x: "May",
							y: [13, 22]
						},
						{
							x: "Jun",
							y: [18, 26]
						},
						{
							x: "Jul",
							y: [21, 29]
						},
						{
							x: "Aug",
							y: [21, 28]
						},
						{
							x: "Sep",
							y: [17, 24]
						},
						{
							x: "Oct",
							y: [11, 18]
						},
						{
							x: "Nov",
							y: [6, 12]
						},
						{
							x: "Dec",
							y: [1, 7]
						}
					]
				}
			],
			chart: {
				height: 350,
				type: "rangeArea",
				toolbar: {
					show: true
				}
			},
			stroke: {
				curve: "straight"
			},
			title: {
				text: "New York Temperature (all year round)",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			colors: [
				"#0f79f3"
			],
			markers: {
				hover: {
					sizeOffset: 5
				}
			},
			dataLabels: {
				enabled: false
			},
			yaxis: {
				labels: {
					show: true,
					formatter: (val) => {
						return val + "°C";
					},
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_range_area_chart'), options);
		chart.render();

	}

	/* Basic Timeline Area Chart JS*/ 
	const getBasicTimelineId = document.getElementById('basic_timeline_chart');
	if (getBasicTimelineId) {
		var options = {

			series: [
				{
					data: [
						{
							x: "Code",
							y: [
								new Date("2019-03-02").getTime(),
								new Date("2019-03-04").getTime()
							]
						},
						{
							x: "Test",
							y: [
								new Date("2019-03-04").getTime(),
								new Date("2019-03-08").getTime()
							]
						},
						{
							x: "Validation",
							y: [
								new Date("2019-03-08").getTime(),
								new Date("2019-03-12").getTime()
							]
						},
						{
							x: "Deployment",
							y: [
								new Date("2019-03-12").getTime(),
								new Date("2019-03-18").getTime()
							]
						}
					]
				}
			],
			chart: {
				height: 350,
				type: "rangeBar"
			},
			plotOptions: {
				bar: {
					horizontal: true
				}
			},
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			colors: [
				"#0f79f3"
			],
			
		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_timeline_chart'), options);
		chart.render();

	}

	/* Basic Candlestick Area Chart JS*/ 
	const getBasicCandlestickId = document.getElementById('basic_candlestick_chart');
	if (getBasicCandlestickId) {
		var options = {

			series: [
				{
					name: "candle",
					data: [
						{
							x: new Date(1538778600000),
							y: [6629.81, 6650.5, 6623.04, 6633.33]
						},
						{
							x: new Date(1538780400000),
							y: [6632.01, 6643.59, 6620, 6630.11]
						},
						{
							x: new Date(1538782200000),
							y: [6630.71, 6648.95, 6623.34, 6635.65]
						},
						{
							x: new Date(1538784000000),
							y: [6635.65, 6651, 6629.67, 6638.24]
						},
						{
							x: new Date(1538785800000),
							y: [6638.24, 6640, 6620, 6624.47]
						},
						{
							x: new Date(1538787600000),
							y: [6624.53, 6636.03, 6621.68, 6624.31]
						},
						{
							x: new Date(1538789400000),
							y: [6624.61, 6632.2, 6617, 6626.02]
						},
						{
							x: new Date(1538791200000),
							y: [6627, 6627.62, 6584.22, 6603.02]
						},
						{
							x: new Date(1538793000000),
							y: [6605, 6608.03, 6598.95, 6604.01]
						},
						{
							x: new Date(1538794800000),
							y: [6604.5, 6614.4, 6602.26, 6608.02]
						},
						{
							x: new Date(1538796600000),
							y: [6608.02, 6610.68, 6601.99, 6608.91]
						},
						{
							x: new Date(1538798400000),
							y: [6608.91, 6618.99, 6608.01, 6612]
						},
						{
							x: new Date(1538800200000),
							y: [6612, 6615.13, 6605.09, 6612]
						},
						{
							x: new Date(1538802000000),
							y: [6612, 6624.12, 6608.43, 6622.95]
						},
						{
							x: new Date(1538803800000),
							y: [6623.91, 6623.91, 6615, 6615.67]
						},
						{
							x: new Date(1538805600000),
							y: [6618.69, 6618.74, 6610, 6610.4]
						},
						{
							x: new Date(1538807400000),
							y: [6611, 6622.78, 6610.4, 6614.9]
						},
						{
							x: new Date(1538809200000),
							y: [6614.9, 6626.2, 6613.33, 6623.45]
						},
						{
							x: new Date(1538811000000),
							y: [6623.48, 6627, 6618.38, 6620.35]
						},
						{
							x: new Date(1538812800000),
							y: [6619.43, 6620.35, 6610.05, 6615.53]
						},
						{
							x: new Date(1538814600000),
							y: [6615.53, 6617.93, 6610, 6615.19]
						},
						{
							x: new Date(1538816400000),
							y: [6615.19, 6621.6, 6608.2, 6620]
						},
						{
							x: new Date(1538818200000),
							y: [6619.54, 6625.17, 6614.15, 6620]
						},
						{
							x: new Date(1538820000000),
							y: [6620.33, 6634.15, 6617.24, 6624.61]
						},
						{
							x: new Date(1538821800000),
							y: [6625.95, 6626, 6611.66, 6617.58]
						},
						{
							x: new Date(1538823600000),
							y: [6619, 6625.97, 6595.27, 6598.86]
						},
						{
							x: new Date(1538825400000),
							y: [6598.86, 6598.88, 6570, 6587.16]
						},
						{
							x: new Date(1538827200000),
							y: [6588.86, 6600, 6580, 6593.4]
						},
						{
							x: new Date(1538829000000),
							y: [6593.99, 6598.89, 6585, 6587.81]
						},
						{
							x: new Date(1538830800000),
							y: [6587.81, 6592.73, 6567.14, 6578]
						},
						{
							x: new Date(1538832600000),
							y: [6578.35, 6581.72, 6567.39, 6579]
						},
						{
							x: new Date(1538834400000),
							y: [6579.38, 6580.92, 6566.77, 6575.96]
						},
						{
							x: new Date(1538836200000),
							y: [6575.96, 6589, 6571.77, 6588.92]
						},
						{
							x: new Date(1538838000000),
							y: [6588.92, 6594, 6577.55, 6589.22]
						},
						{
							x: new Date(1538839800000),
							y: [6589.3, 6598.89, 6589.1, 6596.08]
						},
						{
							x: new Date(1538841600000),
							y: [6597.5, 6600, 6588.39, 6596.25]
						},
						{
							x: new Date(1538843400000),
							y: [6598.03, 6600, 6588.73, 6595.97]
						},
						{
							x: new Date(1538845200000),
							y: [6595.97, 6602.01, 6588.17, 6602]
						},
						{
							x: new Date(1538847000000),
							y: [6602, 6607, 6596.51, 6599.95]
						},
						{
							x: new Date(1538848800000),
							y: [6600.63, 6601.21, 6590.39, 6591.02]
						},
						{
							x: new Date(1538850600000),
							y: [6591.02, 6603.08, 6591, 6591]
						},
						{
							x: new Date(1538852400000),
							y: [6591, 6601.32, 6585, 6592]
						},
						{
							x: new Date(1538854200000),
							y: [6593.13, 6596.01, 6590, 6593.34]
						},
						{
							x: new Date(1538856000000),
							y: [6593.34, 6604.76, 6582.63, 6593.86]
						},
						{
							x: new Date(1538857800000),
							y: [6593.86, 6604.28, 6586.57, 6600.01]
						},
						{
							x: new Date(1538859600000),
							y: [6601.81, 6603.21, 6592.78, 6596.25]
						},
						{
							x: new Date(1538861400000),
							y: [6596.25, 6604.2, 6590, 6602.99]
						},
						{
							x: new Date(1538863200000),
							y: [6602.99, 6606, 6584.99, 6587.81]
						},
						{
							x: new Date(1538865000000),
							y: [6587.81, 6595, 6583.27, 6591.96]
						},
						{
							x: new Date(1538866800000),
							y: [6591.97, 6596.07, 6585, 6588.39]
						},
						{
							x: new Date(1538868600000),
							y: [6587.6, 6598.21, 6587.6, 6594.27]
						},
						{
							x: new Date(1538870400000),
							y: [6596.44, 6601, 6590, 6596.55]
						},
						{
							x: new Date(1538872200000),
							y: [6598.91, 6605, 6596.61, 6600.02]
						},
						{
							x: new Date(1538874000000),
							y: [6600.55, 6605, 6589.14, 6593.01]
						},
						{
							x: new Date(1538875800000),
							y: [6593.15, 6605, 6592, 6603.06]
						},
						{
							x: new Date(1538877600000),
							y: [6603.07, 6604.5, 6599.09, 6603.89]
						},
						{
							x: new Date(1538879400000),
							y: [6604.44, 6604.44, 6600, 6603.5]
						},
						{
							x: new Date(1538881200000),
							y: [6603.5, 6603.99, 6597.5, 6603.86]
						},
						{
							x: new Date(1538883000000),
							y: [6603.85, 6605, 6600, 6604.07]
						},
						{
							x: new Date(1538884800000),
							y: [6604.98, 6606, 6604.07, 6606]
						}
					]
				}
			],
			chart: {
				type: "candlestick",
				height: 350,
				toolbar: {
					show: true
				}
			},
			title: {
				text: "CandleStick Chart",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			xaxis: {
				type: "datetime",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tooltip: {
					enabled: true
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			}
			
		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_candlestick_chart'), options);
		chart.render();

	}

	/* Basic Boxplot Chart JS*/ 
	const getBasicBoxplotId = document.getElementById('basic_boxplot_chart');
	if (getBasicBoxplotId) {
		var options = {

			series: [
				{
					name: 'Box',
					type: 'boxPlot',
					data: [
						{
							x: new Date('2017-01-01').getTime(),
							y: [54, 66, 69, 75, 88]
						},
						{
							x: new Date('2018-01-01').getTime(),
							y: [43, 65, 69, 76, 81]
						},
						{
							x: new Date('2019-01-01').getTime(),
							y: [31, 39, 45, 51, 59]
						},
						{
							x: new Date('2020-01-01').getTime(),
							y: [39, 46, 55, 65, 71]
						},
						{
							x: new Date('2021-01-01').getTime(),
							y: [29, 31, 35, 39, 44]
						}
					]
				},
				{
					name: 'Outliers',
					type: 'scatter',
					data: [
						{
							x: new Date('2017-01-01').getTime(),
							y: 32
						},
						{
							x: new Date('2018-01-01').getTime(),
							y: 25
						},
						{
							x: new Date('2019-01-01').getTime(),
							y: 64
						},
						{
							x: new Date('2020-01-01').getTime(),
							y: 27
						},
						{
							x: new Date('2020-01-01').getTime(),
							y: 78
						},
						{
							x: new Date('2021-01-01').getTime(),
							y: 15
						}
					]
				}
			],
			chart: {
				height: 350,
				type: "boxPlot",
				toolbar: {
					show: true
				}
			},
			colors: [
				'#0f79f3', '#e74c3c'
			],
			title: {
				text: 'BoxPlot - Scatter Chart',
				align: 'left',
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			xaxis: {
				type: 'datetime',
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			tooltip: {
				shared: false,
				intersect: true
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				offsetY: -5,
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}
			
		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#basic_boxplot_chart'), options);
		chart.render();

	}

	/* Basic Bubble Chart JS*/
	const getBasicBubbleId = document.getElementById('basic_bubble_chart');
	if (getBasicBubbleId) {

		function generateData(baseval, count, yrange) {
			var i = 0;
			var series = [];
			while (i < count) {
				var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
				var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
				var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
			
				series.push([x, y, z]);
				baseval += 86400000;
				i++;
			}
			return series;
		}
		var options = {
			series: [
				{
				  name: 'Bubble 1',
					data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
						min: 10,
						max: 60
					})
				},
				{
					name: 'Bubble 2',
					data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
						min: 10,
						max: 60
					})
				},
				{
					name: 'Bubble 3',
					data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
						min: 10,
						max: 60
					})
				},
				{
					name: 'Bubble 4',
					data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
						min: 10,
						max: 60
					})
				},
			],
			chart: {
				height: 350,
				type: "bubble",
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: 0.8
			},
			title: {
				text: undefined
			},
			grid: {
				borderColor: "#ECEEF2"
			},
			xaxis: {
				tickAmount: 12,
				type: "category",
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px"
					}
				}
			},
			yaxis: {
				max: 70,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px"
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				position: 'bottom',
				fontSize: "14px",
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
					return "$" + val + "k";
					}
				}
			},
		};
		var chart = new ApexCharts(document.querySelector("#basic_bubble_chart"), options);
		chart.render();

	}

	/* Basic Scatter Chart JS*/
	const getBasicScatterId = document.getElementById('basic_scatter_chart');
	if (getBasicScatterId) {
		var options = {
			
			series: [{
				name: "Sample A",
				data: [
				[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
			},{
				name: "Sample B",
				data: [
				[36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
			},{
				name: "Sample C",
				data: [
				[21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
			}],
			chart: {
				height: 350,
				type: 'scatter',
				zoom: {
					enabled: true,
					type: 'xy'
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#ffb264", "#e74c3c", "#00cae3"
			],
			xaxis: {
				tickAmount: 10,
				labels: {
					formatter: function(val) {
						return parseFloat(val).toFixed(1)
					},
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				}
			},
			yaxis: {
				tickAmount: 7,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			legend: {
				position: 'bottom',
				fontSize: "14px",
				fontFamily: 'Outfit',
				labels: {
					colors: '#919aa3'
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}

		};
		var chart = new ApexCharts(document.querySelector("#basic_scatter_chart"), options);
		chart.render();

	}

	/* Basic Scatter Chart JS*/
	const getBasicHeatmapId = document.getElementById('basic_heatmap_chart');
	if (getBasicHeatmapId) {
		// Define the generateData function
		function generateData(count, range) {
			let data = [];
			for (let i = 0; i < count; i++) {
				data.push({
					x: `Category ${i + 1}`,
					y: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
				});
			}
			return data;
		}

		var options = {
			series: [
				{
					name: "Metric 1",
					data: generateData(18, { min: 0, max: 90 })
				},
				{
					name: "Metric 2",
					data: generateData(18, { min: 0, max: 90 })
				},
				{
					name: "Metric 3",
					data: generateData(18, { min: 0, max: 90 })
				},
				{
					name: "Metric 4",
					data: generateData(18, { min: 0, max: 90 })
				},
				{
					name: "Metric 5",
					data: generateData(18, { min: 0, max: 90 })
				},
				{
					name: "Metric 6",
					data: generateData(18, { min: 0, max: 90 })
				},
				{
					name: "Metric 7",
					data: generateData(18, { min: 0, max: 90 })
				},
				{
					name: "Metric 8",
					data: generateData(18, { min: 0, max: 90 })
				},
				{
					name: "Metric 9",
					data: generateData(18, { min: 0, max: 90 })
				}
			],
			chart: {
				height: 350,
				type: "heatmap",
				toolbar: {
					show: true
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: ["#0f79f3"],
			title: {
				text: "HeatMap Chart (Single color)",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			},
			grid: {
				show: true,
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: false
				}
			}
		};

		var chart = new ApexCharts(document.querySelector("#basic_heatmap_chart"), options);
		chart.render();
	}

	/* Basic Treemap Chart JS*/
	const getBasicTreemapId = document.getElementById('basic_treemap_chart');
	if (getBasicTreemapId) {

		var options = {
			series: [
				{
					data: [
						{
							x: "London",
							y: 218
						},
						{
							x: "New York",
							y: 149
						},
						{
							x: "Tokyo",
							y: 184
						},
						{
							x: "Beijing",
							y: 55
						},
						{
							x: "Paris",
							y: 84
						},
						{
							x: "Chicago",
							y: 31
						},
						{
							x: "Osaka",
							y: 70
						},
						{
							x: "İstanbul",
							y: 30
						},
						{
							x: "Bangkok",
							y: 44
						},
						{
							x: "Madrid",
							y: 68
						},
						{
							x: "Barcelona",
							y: 28
						},
						{
							x: "Toronto",
							y: 19
						},
						{
							x: "Shanghai",
							y: 29
						}
					]
				}
			],
			chart: {
				height: 350,
				type: "treemap",
				toolbar: {
					show: true
				}
			},
			title: {
				text: "Basic Treemap",
				align: "left",
				offsetX: -9,
				style: {
					fontWeight: '500',
					fontSize: '15px',
					fontFamily: 'Outfit',
					color: '#475569'
				}
			}
		};

		var chart = new ApexCharts(document.querySelector("#basic_treemap_chart"), options);
		chart.render();
	}

	//**<---- HR Charts ---->**//

	/* Employee Performance Chart JS*/
	const getEmployeePerformanceId = document.getElementById('employee_performance_chart');
	if (getEmployeePerformanceId) {
		var options = {
			series: [
				{
					type: "rangeArea",
					name: "Task Done",
					data: [
						{
							x: "Jan",
							y: [11, 19]
						},
						{
							x: "Feb",
							y: [12, 18]
						},
						{
							x: "Mar",
							y: [20, 29]
						},
						{
							x: "Apr",
							y: [14, 27]
						},
						{
							x: "May",
							y: [26, 39]
						},
						{
							x: "Jun",
							y: [20, 17]
						},
						{
							x: "Jul",
							y: [10, 23]
						},
						{
							x: "Aug",
							y: [10, 15]
						}
					]
				},
				{
					type: "rangeArea",
					name: "On Progress",
					data: [
						{
							x: "Jan",
							y: [31, 34]
						},
						{
							x: "Feb",
							y: [42, 52]
						},
						{
							x: "Mar",
							y: [39, 49]
						},
						{
							x: "Apr",
							y: [34, 39]
						},
						{
							x: "May",
							y: [51, 59]
						},
						{
							x: "Jun",
							y: [54, 67]
						},
						{
							x: "Jul",
							y: [43, 46]
						},
						{
							x: "Aug",
							y: [21, 29]
						}
					]
				},
				{
					type: "line",
					name: "Task Done",
					data: [
						{
							x: "Jan",
							y: 15
						},
						{
							x: "Feb",
							y: 17
						},
						{
							x: "Mar",
							y: 19
						},
						{
							x: "Apr",
							y: 22
						},
						{
							x: "May",
							y: 30
						},
						{
							x: "Jun",
							y: 10
						},
						{
							x: "Jul",
							y: 21
						},
						{
							x: "Aug",
							y: 12
						},
						{
							x: "Sep",
							y: 18
						},
						{
							x: "Oct",
							y: 20
						},
						{
							x: "Nov",
							y: 20
						},
						{
							x: "Dec",
							y: 20
						},
					]
				},
				{
					type: "line",
					name: "On Progress",
					data: [
						{
							x: "Jan",
							y: 33
						},
						{
							x: "Feb",
							y: 49
						},
						{
							x: "Mar",
							y: 43
						},
						{
							x: "Apr",
							y: 37
						},
						{
							x: "May",
							y: 55
						},
						{
							x: "Jun",
							y: 59
						},
						{
							x: "Jul",
							y: 45
						},
						{
							x: "Aug",
							y: 24
						},
						{
							x: "Sep",
							y: 21
						},
						{
							x: "Oct",
							y: 15
						},
						{
							x: "Nov",
							y: 15
						},
						{
							x: "Dec",
							y: 15
						},
					]
				}
			],
			chart: {
				height: 282,
				type: "rangeArea",
				animations: {
					speed: 500
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#63F0FD", "#FFB264", "#63F0FD", "#FFB264"
			],
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: [0.24, 0.24, 1, 1]
			},
			forecastDataPoints: {
				count: 2,
				dashArray: 4
			},
			xaxis: {
				axisBorder: {
					show: true,
					color: '#fff'
				},
				axisTicks: {
					show: true,
					color: '#fff'
				},
				labels: {
					style: {
						colors: "#fff",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
				}
			},
			yaxis: {
				max: 100,
				tickAmount: 4,
				labels: {
					style: {
						colors: "#fff",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					formatter: (val) => {
						return '' + val / 1 + '%'
					},
				}
			},
			stroke: {
				curve: "straight",
				width: [0, 0, 2, 2]
			},
			legend: {
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				customLegendItems: ["Task Done", "On Progress"],
				labels: {
					colors: "#F6F7F9",
				},
				offsetY: 8,
				itemMargin: {
					horizontal: 29,
					vertical: 0
				},
				markers: {
					width: 10,
					height: 10,
					strokeWidth: 0,
					shape: "square",
				}
			},
			markers: {
				hover: {
					sizeOffset: 5
				}
			},
			grid: {
				strokeDashArray: 0,
				borderColor: "#705ae0",
				opacity: 0
			}
		};
		var chart = new ApexCharts(document.querySelector("#employee_performance_chart"), options);
		chart.render();
	}

	/* Total Applications JS*/
	const getTotalApplicationsId = document.getElementById('total_applications_chart');
	if (getTotalApplicationsId) {

		var options = {
			series: [
				{
					name: "Total Applications",
					data: [0, 41, 35, 51, 49, 62, 69, 91, 160]
				}
			],
			chart: {
				height: 164,
				type: "line",
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 2
			},
			colors: [
				"#1CDFF4"
			],
			grid: {
				strokeDashArray: 0,
				borderColor: "#ECEFF2",
				row: {
					colors: ["#F2F4F5", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					style: {
						colors: "#919AA3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				max: 150,
				tickAmount: 3,
				labels: {
					style: {
						colors: "#919AA3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#total_applications_chart'), options);
		chart.render();
		
	}

	/* Employee Structure JS*/
	const getEmployeeStructureId = document.getElementById('employee_structure_chart');
	if (getEmployeeStructureId) {
		var options = {
			series: [1000, 705],
			chart: {
				height: 210,
				type: "donut"
			},
			labels: [
				"Male", "Female"
			],
			colors: [
				"#796DF6", "#FFB264"
			],
			stroke: {
				width: 1,
				show: true,
				colors: ["#ffffff"]
			},
			legend: {
				position: 'bottom',
				fontSize: '14px',
				fontFamily: 'Outfit',
				horizontalAlign: 'center',
				itemMargin: {
					horizontal: 8,
					vertical: 0
				},
				labels: {
					colors: '#919AA3'
				},
				markers: {
					width: 9,
					height: 9,
					offsetX: -2,
					offsetY: -.5,
					shape: "square",
				},
				itemMargin: {
					horizontal: 14.5,
					vertical: 0
				},
			},
			plotOptions: {
				pie: {
					expandOnClick: false,
					donut: {
						labels: {
							show: true,
							name: {
								color: '#64748B'
							},
							value: {
								show: true,
								color: '#475569',
								fontSize: '26px',
								fontFamily: 'Outfit',
								fontWeight: '700'
							},
							total: {
								show: true,
								color: '#475569',
								fontSize: '16px',
								fontFamily: 'Outfit',
							}
						}
					}
				}
			},
			dataLabels: {
				enabled: false
			},
		}
		var chart = new ApexCharts(document.querySelector("#employee_structure_chart"), options);
		chart.render();
	}

	/* Attendance Rate Chart JS*/
	const getAttendanceRateId = document.getElementById('attendance_rate_chart');
	if (getAttendanceRateId) {

		var options = {
			series: [
				{
					name: "On-time",
					data: [20, 19, 22, 38, 19, 24, 19, 5, 18]
				},
				{
					name: "Late attend",
					data: [80, 83, 85, 87, 83, 87, 81, 90, 81]
				},
				{
					name: "Absent",
					data: [5, 6, 4, 4, 18, 17, 16, 6, 12]
				}
			],
			chart: {
				type: "bar",
				height: 228,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					columnWidth: "65%"
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#796DF6", "#2ECC71", "#E74C3C"
			],
			stroke: {
				width: 2,
				show: true,
				colors: ["transparent"]
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				max: 100,
				tickAmount: 5,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					formatter: (val) => {
						return '' + val / 1 + '%'
					},
				}
			},
			fill: {
				opacity: 1
			},
			grid: {
				strokeDashArray: 0,
				borderColor: "#F8F9FA"
			},
			legend: {
				offsetY: 7,
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 14.5,
					vertical: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#attendance_rate_chart'), options);
		chart.render();
	}

	//**<---- School Charts ---->**//

	/* Welcome Chart JS*/
	const getWelcome2Id = document.getElementById('welcome_chart_2');
	if (getWelcome2Id) {
		 
		var options = {
			series: [98],
			chart: {
				type: "radialBar",
				height: 260
			},
			plotOptions: {
				radialBar: {
					startAngle: -90,
					endAngle: 90,
					track: {
						background: "#958df4",
						strokeWidth: "100%",
						margin: 3, // margin is in pixels
						dropShadow: {
							enabled: false
						}
					},
					dataLabels: {
						name: {
							show: false
						},
						value: {
							offsetY: -2,
							fontSize: "25px",
							fontFamily: 'Outfit',
							fontWeight: 500,
							color: "#ffffff"
						}
					}
				}
			},
			colors: [
				"#00cae3"
			]
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#welcome_chart_2'), options);
		chart.render();
	}

	/* Student Performance by Subject Chart JS*/
	const getStudentPerformanceBySubjectId = document.getElementById('student_performance_by_subject_chart');
	if (getStudentPerformanceBySubjectId) {

		var options = {
			series: [
				{
					name: "Student Performance by Subject",
					data: [82, 98, 85, 75, 85, 95, 85,]
				}
			],
			chart: {
				height: 503,
				type: "bar",
				toolbar: {
					show: false
				}
			},
			colors: [
				"#00cae3"
			],
			plotOptions: {
				bar: {
					columnWidth: "42%",
					distributed: true,
					borderRadius: 25,
				}
			},
			responsive: [{
				breakpoint: 992,
				options: {
					plotOptions: {
						bar: {
							columnWidth: "30%",
							distributed: true,
							borderRadius: 8,
						}
					},
				},
			}],
			dataLabels: {
				enabled: false
			},
			legend: {
				show: false
			},
			grid: {
				strokeDashArray: 0,
				borderColor: "#E0E0E0",
			},
			xaxis: {
				categories: [
					"Mathematics",
					"Science",
					"English",
					"Art",
					"Physic",
					"History",
					"Geography"
				],
				axisBorder: {
					show: true,
					color: '#E0E0E0'
				},
				axisTicks: {
					show: true,
					color: '#E0E0E0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				max: 100,
				tickAmount: 5,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					formatter: (val) => {
						return '' + val / 1 + '%'
					},
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return '' + val / 1 + '%'
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#student_performance_by_subject_chart'), options);
		chart.render();

	}

	/* Student Structure JS*/
	const getStudentStructureId = document.getElementById('student_structure_chart');
	if (getStudentStructureId) {
		var options = {
			series: [1800, 1000],
			chart: {
				height: 457,
				type: "donut"
			},
			labels: [
				"Boys", "Girls"
			],
			colors: [
				"#138BFD", "#FFB264"
			],
			stroke: {
				width: 1,
				show: true,
				colors: ["#ffffff"]
			},
			legend: {
				position: 'bottom',
				fontSize: '14px',
				fontFamily: 'Outfit',
				horizontalAlign: 'center',
				itemMargin: {
					horizontal: 8,
					vertical: 0
				},
				labels: {
					colors: '#919AA3'
				},
				markers: {
					width: 9,
					height: 9,
					offsetX: -2,
					offsetY: -.5,
					shape: "square",
				},
				itemMargin: {
					horizontal: 14.5,
					vertical: 0
				},
			},
			responsive: [{
				breakpoint: 482,
				options: {
					legend: {
						position: 'top',
					},
				},
			}],
			plotOptions: {
				pie: {
					expandOnClick: false,
					donut: {
						labels: {
							show: true,
							name: {
								color: '#64748B'
							},
							value: {
								show: true,
								color: '#475569',
								fontSize: '26px',
								fontFamily: 'Outfit',
								fontWeight: '700'
							},
							total: {
								show: true,
								color: '#475569',
								fontSize: '16px',
								fontFamily: 'Outfit',
								label: 'Total Students',
							}
						}
					}
				}
			},
			dataLabels: {
				enabled: false
			},
		}
		var chart = new ApexCharts(document.querySelector("#student_structure_chart"), options);
		chart.render();
	}

	//**<---- Marketing Charts ---->**//

	/* Lead Generation JS*/
	const getLeadGenerationId = document.getElementById('lead_generation_chart');
	if (getLeadGenerationId) {

		var options = {
			series: [
				{
					name: 'Social Media Marketing',
					data: [0, 1500, 2000, 800, 1200, 800, 1500, 2000, 1200, 700 ,1400]
					
				},
				{
					name: 'Email Marketing',
					data: [0, 1200, 1700, 500, 900, 500, 1200, 1700, 900, 400 ,1100]
				},
			],
			colors: ["#FFB264", "#796DF6",],
			chart: {
				height: 237,
				type: 'area',
				toolbar: {
					show: false,
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth'
			},
			grid: {
				borderColor: '#F4F6FC', 
				strokeDashArray: 0,
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: true
					}
				}
			},
			xaxis: {
				show: false,
				axisBorder: {
					show: true,
					color: '#E0E0E0'
				},
				axisTicks: {
					show: false,
					color: '#E0E0E0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				max: 2500,
				tickAmount: 5,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
				}
			},
			legend: {
				offsetY: 7,
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 14.5,
					vertical: 0
				},
				markers: {
					shape: 'square',
					offsetY: 1
				}
			}
		};
		var chart = new ApexCharts(document.querySelector("#lead_generation_chart"), options);
		chart.render();

    }

	/* Facebook Campaign Chart JS*/
	const getFacebookCampaignId = document.getElementById('facebook_campaign_chart');
	if (getFacebookCampaignId) {
		var options = {
			series: [
				{
					type: "rangeArea",
					name: "Camping Budget",
					data: [
						{
							x: "Jan",
							y: [1100, 1900]
						},
						{
							x: "Feb",
							y: [1200, 1800]
						},
						{
							x: "Mar",
							y: [900, 2900]
						},
						{
							x: "Apr",
							y: [1400, 2700]
						},
						{
							x: "May",
							y: [2600, 3900]
						},
						{
							x: "Jun",
							y: [500, 1700]
						},
						{
							x: "Jul",
							y: [1900, 2300]
						},
						{
							x: "Aug",
							y: [1000, 1500]
						}
					]
				},
				{
					type: "rangeArea",
					name: "Followers Goal",
					data: [
						{
							x: "Jan",
							y: [3100, 3400]
						},
						{
							x: "Feb",
							y: [4200, 5200]
						},
						{
							x: "Mar",
							y: [3900, 4900]
						},
						{
							x: "Apr",
							y: [3400, 3900]
						},
						{
							x: "May",
							y: [5100, 5900]
						},
						{
							x: "Jun",
							y: [5400, 6700]
						},
						{
							x: "Jul",
							y: [4300, 4600]
						},
						{
							x: "Aug",
							y: [2100, 2900]
						}
					]
				},
				{
					type: "line",
					name: "Camping Budget",
					data: [
						{
							x: "Jan",
							y: 1500
						},
						{
							x: "Feb",
							y: 1700
						},
						{
							x: "Mar",
							y: 1900
						},
						{
							x: "Apr",
							y: 2200
						},
						{
							x: "May",
							y: 3000
						},
						{
							x: "Jun",
							y: 1000
						},
						{
							x: "Jul",
							y: 2100
						},
						{
							x: "Aug",
							y: 1200
						},
						{
							x: "Sep",
							y: 1800
						},
						{
							x: "Oct",
							y: 2000
						}
					]
				},
				{
					type: "line",
					name: "Followers Goal",
					data: [
						{
							x: "Jan",
							y: 3300
						},
						{
							x: "Feb",
							y: 4900
						},
						{
							x: "Mar",
							y: 4300
						},
						{
							x: "Apr",
							y: 3700
						},
						{
							x: "May",
							y: 5500
						},
						{
							x: "Jun",
							y: 5900
						},
						{
							x: "Jul",
							y: 4500
						},
						{
							x: "Aug",
							y: 2400
						},
						{
							x: "Sep",
							y: 2100
						},
						{
							x: "Oct",
							y: 1500
						}
					]
				}
			],
			chart: {
				height: 191,
				type: "rangeArea",
				animations: {
					speed: 500
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796df6", "#00cae3", "#796df6", "#00cae3"
			],
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: [0.24, 0.24, 1, 1]
			},
			forecastDataPoints: {
				count: 2,
				dashArray: 4
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				max: 6000,
				tickAmount: 3,
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					formatter: (val) => {
						return '$' + val / 1 + ''
					},
				}
			},
			stroke: {
				curve: "straight",
				width: [0, 0, 2, 2]
			},
			legend: {
				show: false,
				position: "top",
				fontSize: "14px",
				fontFamily: 'Outfit',
				customLegendItems: ["Orders", "Sales"],
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 0
				}
			},
			markers: {
				hover: {
					sizeOffset: 5
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#e0e0e0"
			},
		};
		var chart = new ApexCharts(document.querySelector("#facebook_campaign_chart"), options);
		chart.render();
	}

	/* SEO Performance Chart JS*/
	const geSeoPerformanceId = document.getElementById('seo_performance_chart');
	if (geSeoPerformanceId) {
		
		var options = {
			series: [{
				name: 'Organic Traffic',
				type: 'column',
				data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
			},  {
				name: 'Keyword Ranking',
				type: 'line',
				data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
			}],
			chart: {
				height: 264,
				type: 'line',
				stacked: false,
				toolbar: {
					show: false,
				},
			},
			stroke: {
				width: [0, 3, 5],
				curve: 'smooth'
			},
			colors: [
				"#FFB264", "#138BFD"
			],
			plotOptions: {
				bar: {
					columnWidth: '50%'
				}
			},
			markers: {
				size: 0
			},
			grid: {
				borderColor: '#F4F6FC', 
				strokeDashArray: 0,
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: true
					}
				}
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					style: {
						colors: "#919AA3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				// max: 5,
				// tickAmount: 6,
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					formatter: (val) => {
						return '' + val / 1 + 'K'
					},
				}
			},
			legend: {
				show: true,
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				offsetY: 8,
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 0
				},
				markers: {
					shape: 'square',
				}
			},
			tooltip: {
				shared: true,
				intersect: false,
				y: {
					formatter: function (y) {
						if (typeof y !== "undefined") {
							return y.toFixed(0) + " points";
						}
						return y;
		
					}
				}
			}
		};
		
		var chart = new ApexCharts(document.querySelector("#seo_performance_chart"), options);
		chart.render();

	}

	/* Channel Performance Chart JS*/
	const getChannelPerformanceId = document.getElementById('channel_performance_chart');
	if (getChannelPerformanceId) {

		var options = {
			series: [
				{
					name: "Projects",
					data: [81, 95, 87, 70, 72, 78]
				}
			],
			chart: {
				type: "bar",
				height: 326, // height: 317,
				toolbar: {
					show: false
				}
			},
			colors: [
				"#FFB264", "#2ECC71", "#796DF6", "#138BFD", "#E74C3C", "#00CAE3"
			],
			plotOptions: {
				bar: {
					horizontal: true,
					distributed: true // Add this line to enable separate colors for each bar
				}
			},
			dataLabels: {
				enabled: true,
				formatter: (val) => {
					return '' + val / 1 + '%'
				},
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				}
			},
			legend: {
				show: false
			},
			xaxis: {
				categories: [
					"Organic",
					"Paid",
					"Direct",
					"Referral",
					"Social Media",
					"Email"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					formatter: (val) => {
						return '' + val / 1 + '%'
					},
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: true,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				}
			},
			grid: {
				borderColor: '#EAECF2', 
				strokeDashArray: 0,
				xaxis: {
					lines: {
						show: true
					}
				},
				yaxis: {
					lines: {
						show: false
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "" + val + "%";
					}
				}
			}	
		};
		
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#channel_performance_chart'), options);
		chart.render();

	}

	//**<---- Finance Charts ---->**//

	/* Profit & Loss JS*/
	const getProfitLossId = document.getElementById('profit_loss_chart');
	if (getProfitLossId) {
		var options = {
			series: [30, 70],
			chart: {
				height: 110,
				type: "donut"
			},
			labels: [
				"Profit", "Loss"
			],
			colors: [
				"#FC7013", "#2ED47E"
			],
			legend: {
				show: false,
			},
			dataLabels: {
				enabled: false
			},
			plotOptions: {
				pie: {
					donut: {
					  size: '40%'
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val + "K";
					}
				}
			}	
		};
		var chart = new ApexCharts(document.querySelector("#profit_loss_chart"), options);
		chart.render();
	}

	/* Cash Flow JS*/
	const getStudentsOverviewId = document.getElementById('cash_flow_chart');
	if (getStudentsOverviewId) {
		var options = {
			series: [
				{
					name: "Cash Flow",
					data: [70, 42, 70, 120, 40, 70, 90],
				},
				{
					name: "Cash Flow",
					data: [-70, -44, -70, -120, -40, -70, -90],
				},
			],
			colors: ['#796DF6', '#52C7FF'],
			chart: {
				type: 'bar',
				height: 200,
				stacked: true,
				toolbar: {
					show: false,
				}
			},
			plotOptions: {
				bar: {
					columnWidth: '40%',
					borderRadius: 3,
					borderRadiusApplication: "end",
					borderRadiusWhenStacked: "all",
					borderRadiusApplication: 'around',
				},
			},
			stroke: {
				width: 1,
				show: true,
				colors: ["transparent"]
			},
			dataLabels: {
				enabled: false,
			},
			grid: {
				show: false,
				borderColor: '#EDEFF5', 
				strokeDashArray: 0,
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: false
					}
				},
			},
			legend: {
				show: false,
			},
			xaxis: {
				categories: [
					"Sun",
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
				],
				axisTicks: {
					show: false,
					color: '#8695AA'
				},
				axisBorder: {
					show: false,
					color: '#D5D9E2'
				},
				labels: {
					show: false,
					style: {
						colors: "#64748B",
						fontSize: "12px"
					}
				}
			},
			yaxis: {
				show: false,
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val + "K";
					}
				}
			}
		};
		var chart = new ApexCharts(document.querySelector("#cash_flow_chart"), options);
		chart.render();
	}

	/* Sales JS*/
	const getSalesId = document.getElementById('sales_chart');
	if (getSalesId) {

		var options = {
			series: [
				{
					name: "Profit",
					data: [0, 40, 20, 60, 30, 70]
				}
			],
			chart: {
				height: 130,
				type: "line",
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			markers: {
				size: 6,
				strokeWidth: 0,
				colors: '#0F79F3',
				hover: {
				  size: 7
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "straight",
				width: 2,
			},
			colors: [
				"#52C7FF"
			],
			grid: {
				strokeDashArray: 0,
				borderColor: "#F5F5F5",
				row: {
					colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			xaxis: {
				categories: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				tickAmount: 4,
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val + "k";
					}
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#sales_chart'), options);
		chart.render();
		
	}

	/* Payment JS*/
	const getPaymentId = document.getElementById('payment_profit_chart');
	if (getPaymentId) {
		var options = { 
			series: [
				{
					name: "Payment",
					data: [3, 12, 7, 14, 14, 7]
				}
			],
			chart: {
				type: "area",
				height: 140,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796DF6"
			],
			dataLabels: {
				enabled: false
			},
			grid: {
				strokeDashArray: 0,
				borderColor: "#F5F5F5",
				row: {
					colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
					opacity: 0.5
				}
			},
			stroke: {
				curve: "smooth",
				width: 1
			},
			xaxis: {
				categories: [
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sun"
				],
				axisTicks: {
					show: false,
					color: '#B1BBC8'
				},
				axisBorder: {
					show: false,
					color: '#B1BBC8'
				},
				labels: {
					show: false,
					style: {
						colors: "#8695AA",
						fontSize: "12px"
					}
				}
			},
			yaxis: {
				tickAmount: 4,
				show: false,
			},
			legend: {
				show: false,
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val + "k";
					}
				}
			}
		};
		var chart = new ApexCharts(document.querySelector("#payment_profit_chart"), options);
		chart.render();
	}

	/* Revenue Vs Operating Margin JS*/
	const getRevenueVsOperatingMarginId = document.getElementById('revenue_vs_operating_margin_chart');
	if (getRevenueVsOperatingMarginId) {

		var options = {
			series: [{
				name: 'Revenue',
				type: 'column',
				data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
			}, {
				name: 'Operating Margin',
				type: 'line',
				data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
			}],
			chart: {
				height: 439,
				type: 'line',
				toolbar: {
					show: false,
				}
			},
			plotOptions: {
				bar: {
					columnWidth: '60%',
				}
			},
			stroke: {
				width: [0, 4]
			},
			grid: {
				borderColor: '#F5F5F5',
				strokeDashArray: 0,
			},
			legend: {
				show: true,
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				offsetY: 8,
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 14.5,
					vertical: 0
				},
				markers: {
					shape: 'square',
				}
			},
			dataLabels: {
				enabled: true,
				enabledOnSeries: [1],
				formatter: function(val) {
					return "" + val + "K";
				},
				style: {
					fontSize: '12px',
					fontFamily: 'Outfit',
					fontWeight: '400',
					colors: ['#2ED47E']
				},
				background: {
					enabled: true,
					foreColor: '#fff',
					padding: 4,
					borderRadius: 2,
					borderWidth: 1,
					borderColor: '#2ED47E',
					opacity: 0.9,
					dropShadow: {
					  enabled: false,
					  top: 1,
					  left: 1,
					  blur: 1,
					  color: '#000',
					  opacity: 0.45
					}
				  },
			},
			xaxis: {
				categories: [
					"JAN",
					"FEB",
					"MAR",
					"APR",
					"MAY",
					"JUN",
					"JUL",
					"AUG",
					"SEP",
					"OCT",
					"NOV",
					"DEC",
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "12px",
						fontFamily: 'Outfit',
					}
				},
				tooltip: {
					enabled: false
				}
			},
			yaxis: [{
				show: false,
			}, {
				opposite: false,
				title: {
					show: false,
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "12px",
						fontFamily: 'Outfit',
					},
					formatter: function(val) {
						return "" + val + "K";
					}
				}
			}],
			colors: ['#796DF6', '#2ED47E'],
		};
		var chart = new ApexCharts(document.querySelector("#revenue_vs_operating_margin_chart"), options);
		chart.render();
		
	}

	/* Revenue By Division JS */ 
	const getRevenueByDivisionId = document.getElementById('revenue_by_division_chart');
	if (getRevenueByDivisionId) {

		var options = {
			series: [30, 10, 50, 40],
			labels: [
				"Capital Solution", "Capital Opportunities", "Fund Strategies", "Credit Strategies"
			],
			chart: {
				type: 'polarArea',
				height: 435,
			},
			stroke: {
				colors: ['#fff']
			},
			colors: ['#2ED47E', '#796DF6', '#FC7013', '#52C7FF'],
			fill: {
				opacity: 0.9
			},
			legend: {
				show: true,
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: 'left',
				offsetY: -35,
				itemMargin: {
					horizontal: 10,
					vertical: 5
				},
				markers: {
					shape: 'square',
				},
				labels: {
					colors: '#919AA3'
				},
				markers: {
					width: 10,
					height: 10,
					shape: 'square',
				}
			},
			responsive: [{
				breakpoint: 768,
				options: {
					legend: {
						horizontalAlign: 'center',
					}
				}
			}],
			yaxis: {
				tickAmount: 5,
				max: 50,
				min: 0,
				labels: {
					show: true,
					style: {
						colors: "#919AA3",
						fontSize: "12px",
						fontFamily: 'Outfit',
					},
					formatter: function(val) {
						return "" + val + "K";
					}
				},
			},
		};
		var chart = new ApexCharts(document.querySelector("#revenue_by_division_chart"), options);
		chart.render();

	}

	/* Total Receivables Vs Total Payable JS */ 
	const getTotalReceivablesVsTotalPayableId = document.getElementById('total_receivables_vs_total_payable_chart');
	if (getTotalReceivablesVsTotalPayableId) {
		var options = {
			series: [
				{
					type: "rangeArea",
					name: "Payables",
					data: [
						{
							x: "JAN",
							y: [11, 19]
						},
						{
							x: "FEB",
							y: [12, 18]
						},
						{
							x: "MAR",
							y: [9, 29]
						},
						{
							x: "APR",
							y: [14, 27]
						},
						{
							x: "MAY",
							y: [26, 39]
						},
						{
							x: "JUN",
							y: [5, 17]
						},
						{
							x: "JUL",
							y: [19, 23]
						},
						{
							x: "AUG",
							y: [10, 15]
						},
					]
				},
				{
					type: "rangeArea",
					name: "Receivables",
					data: [
						{
							x: "JAN",
							y: [31, 34]
						},
						{
							x: "FEB",
							y: [42, 52]
						},
						{
							x: "MAR",
							y: [39, 49]
						},
						{
							x: "APR",
							y: [34, 39]
						},
						{
							x: "MAY",
							y: [51, 59]
						},
						{
							x: "JUN",
							y: [54, 67]
						},
						{
							x: "JUL",
							y: [43, 46]
						},
						{
							x: "AUG",
							y: [21, 29]
						}
					]
				},
				{
					type: "line",
					name: "Payables",
					data: [
						{
							x: "JAN",
							y: 15
						},
						{
							x: "FEB",
							y: 17
						},
						{
							x: "MAR",
							y: 19
						},
						{
							x: "APR",
							y: 22
						},
						{
							x: "MAY",
							y: 30
						},
						{
							x: "JUN",
							y: 10
						},
						{
							x: "JUL",
							y: 21
						},
						{
							x: "AUG",
							y: 12
						},
						{
							x: "SEP",
							y: 18
						},
						{
							x: "OCT",
							y: 20
						},
						{
							x: "NOV",
							y: 20
						}
					]
				},
				{
					type: "line",
					name: "Receivables",
					data: [
						{
							x: "JAN",
							y: 33
						},
						{
							x: "FEB",
							y: 49
						},
						{
							x: "MAR",
							y: 43
						},
						{
							x: "APR",
							y: 37
						},
						{
							x: "MAY",
							y: 55
						},
						{
							x: "JUN",
							y: 59
						},
						{
							x: "JUL",
							y: 45
						},
						{
							x: "AUG",
							y: 24
						},
						{
							x: "SEP",
							y: 21
						},
						{
							x: "OCT",
							y: 15
						},
						{
							x: "NOV",
							y: 15
						}
					]
				}
			],
			chart: {
				height: 412,
				type: "rangeArea",
				animations: {
					speed: 500
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#796df6", "#00cae3", "#796df6", "#00cae3"
			],
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: [0.24, 0.24, 1, 1]
			},
			forecastDataPoints: {
				count: 2,
				dashArray: 4
			},
			xaxis: {
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: true,
					color: '#e0e0e0'
				},
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "12px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 5,
				max: 80,
				labels: {
					style: {
						colors: "#919aa3",
						fontSize: "12px",
						fontFamily: 'Outfit',
					},
					formatter: function(val) {
						return "" + val + "K";
					}
				}
			},
			stroke: {
				curve: "straight",
				width: [0, 0, 2, 2]
			},
			legend: {
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				customLegendItems: ["Payables", "Receivables"],
				offsetY: 8,
				labels: {
					colors: "#919aa3",
				},
				itemMargin: {
					horizontal: 12,
					vertical: 0
				},
				markers: {
					shape: 'square',
				},
			},
			markers: {
				hover: {
					sizeOffset: 5
				}
			},
			grid: {
				strokeDashArray: 5,
				borderColor: "#E7EFFD"
			}
		};
		var chart = new ApexCharts(document.querySelector("#total_receivables_vs_total_payable_chart"), options);
		chart.render();
	}

	//**<---- Hospital Charts ---->**//

	/* Student Structure JS*/
	const getPatientsSummaryId = document.getElementById('patients_summary_chart');
	if (getPatientsSummaryId) {
		var options = {
			series: [34, 36.1,  26.8],
			chart: {
				height: 392,
				type: "donut"
			},
			labels: [
				"New", "Surgery", "Recovered"
			],
			colors: [
				"#796DF6", "#2ECC71", "#0E7AEE"
			],
			stroke: {
				width: 6,
				show: true,
				colors: ["#ffffff"]
			},
			legend: {
				position: 'bottom',
				fontSize: '14px',
				fontFamily: 'Outfit',
				horizontalAlign: 'center',
				offsetY: -5,
				itemMargin: {
					horizontal: 8,
					vertical: 0
				},
				labels: {
					colors: '#919AA3'
				},
				markers: {
					width: 10,
					height: 10,
					shape: "square",
				},
				itemMargin: {
					horizontal: 14.5,
					vertical: 0
				},
			},
			responsive: [{
				breakpoint: 482,
				options: {
					legend: {
						position: 'top',
					},
				},
			}],
			plotOptions: {
				pie: {
					expandOnClick: false,
					donut: {
						labels: {
							show: false,
							name: {
								color: '#64748B'
							},
							value: {
								show: false,
								color: '#475569',
								fontSize: '26px',
								fontFamily: 'Outfit',
								fontWeight: '700'
							},
							total: {
								show: false,
								color: '#475569',
								fontSize: '16px',
								fontFamily: 'Outfit',
								label: 'Total Students',
							}
						}
					}
				}
			},
			dataLabels: {
				enabled: false
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "" + val + "%";
					}
				}
			}
		}
		var chart = new ApexCharts(document.querySelector("#patients_summary_chart"), options);
		chart.render();
	}

	/* Patients Statistics Chart JS*/
	const getPatientsStatisticsId = document.getElementById('patients_statistics_chart');
	if (getPatientsStatisticsId) {

		var options = {
			series: [
				{
					name: "Female",
					data: [80, 250, 150, 334, 150, 250, 80]
				},
				{
					name: "Children",
					data: [150, 182, 240, 234, 290, 200, 180]
				},
				{
					name: "Male",
					data: [300, 90, 201, 300, 190, 140, 120]
				},
			],
			chart: {
				type: "bar",
				height: 394,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					columnWidth: "50%",
					borderRadius: 4,
					borderRadiusApplication: 'around',
          			borderRadiusWhenStacked: 'last',
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#00CAE3", "#2ED47E", "#796DF6"
			],
			stroke: {
				width: 5,
				show: true,
				colors: ["transparent"]
			},
			xaxis: {
				categories: [
					"Sun",
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 6,
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			fill: {
				opacity: 1
			},
			grid: {
				borderColor: '#F5F5F5',
				xaxis: {
					lines: {
						show: true
					}
				},   
				yaxis: {
					lines: {
						show: true
					}
				},
			},
			legend: {
				offsetY: 0,
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				offsetY: 8,
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#patients_statistics_chart'), options);
		chart.render();

	}

	/* Revenue Chart 2 Chart JS*/
	const getRevenueChart2Id = document.getElementById('revenue_chart_2');
	if (getRevenueChart2Id) {

		var options = {
			series: [{
				name: 'Income',
				data: [20, 30, 40, 30, 20, 30, 40, 35, 25, 40]
		  	}, {
				name: 'Expense',
				data: [10, 20, 30, 40, 30, 20, 20, 20, 30, 20]
		  	}],
			chart: {
				height: 350,
				type: 'area',
				toolbar: {
					show: false,
				}
		  	},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth'
			},
			colors: ['#0F79F3', '#796DF6'],
			xaxis: {
				categories: [
					"Oct 01",
					"Oct 02",
					"Oct 03",
					"Oct 04",
					"Oct 05",
					"Oct 06",
					"Oct 07",
					"Oct 08",
					"Oct 09",
					"Oct 10",
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 5,
				max: 50,
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					formatter: function(val) {
						return "" + val + "K";
					}
				}
			},
			grid: {
				borderColor: '#F5F5F5',
				xaxis: {
					lines: {
						show: true
					}
				},   
				yaxis: {
					lines: {
						show: true
					}
				},
			},
			legend: {
				offsetY: 0,
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				offsetY: 8,
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				},
				markers: {
					shape: 'square',
				},
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "" + val + "%";
					}
				}
			},
			
		};
		var chart = new ApexCharts(document.querySelector("#revenue_chart_2"), options);
		chart.render();
	}

	//**<---- Analytics Charts ---->**//

	/* Visit By Day Chart JS*/
	const getVisitByDayId = document.getElementById('visit_by_day_chart');
	if (getVisitByDayId) {

		var options = {
			series: [{
				name: 'Visit By Day',
				data: [21, 40, 30, 70, 20, 40, 40]
			}],
			chart: {
				height: 160,
				type: 'bar',
				events: {
					click: function (chart, w, e) {
						// console.log(chart, w, e)
					}
				},
				toolbar: {
					show: false,
				}
			},
			colors: ["#796DF6", "#FE9039"],
			plotOptions: {
				bar: {
					columnWidth: '30%',
					distributed: true,
				}
			},
			dataLabels: {
				enabled: false
			},
			legend: {
				show: false
			},
			xaxis: {
				labels: {
					show: false,
				},
				axisBorder: {
					show: true,
				},
				axisTicks: {
					show: false,
				},
			},
			yaxis: {
				labels: {
					show: false,
				}
			},
			grid: {
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: false
					}
				},
			},

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#visit_by_day_chart'), options);
		chart.render();

	}

	/* Net Income JS*/
	const getNetIncomeId = document.getElementById('net_income_chart');
	if (getNetIncomeId) {
		var options = { 
			series: [
				{
					name: "Net Income",
					data: [12, 6, 18, 9, 24, 12, 30]
				}
			],
			chart: {
				type: "area",
				height: 150,
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			colors: [
				"#52C7FF"
			],
			dataLabels: {
				enabled: false
			},
			grid: {
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: false
					}
				},
			},
			stroke: {
				curve: "straight",
				width: 4
			},
			xaxis: {
				categories: [
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sun"
				],
				axisTicks: {
					show: false,
					color: '#B1BBC8'
				},
				axisBorder: {
					show: false,
					color: '#B1BBC8'
				},
				labels: {
					show: false,
					style: {
						colors: "#8695AA",
						fontSize: "12px"
					}
				}
			},
			yaxis: {
				tickAmount: 4,
				show: false,
			},
			legend: {
				show: false,
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "$" + val + "K";
					}
				}
			}
		};
		var chart = new ApexCharts(document.querySelector("#net_income_chart"), options);
		chart.render();
	}

	/* Daily Visit Insights Chart JS*/
	const getDailyVisitInsightsId = document.getElementById('daily_visit_insights_chart');
	if (getDailyVisitInsightsId) {

		var options = {
			series: [
				{
					name: "Male",
					data: [80, 300, 100, 100, 150, 250, 120]
				},
				{
					name: "Female",
					data: [120, 150, 201, 150, 190, 140, 80]
				},
			],
			chart: {
				type: "bar",
				height: 402,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					columnWidth: "30%",
					borderRadius: 4,
					borderRadiusApplication: 'around',
          			borderRadiusWhenStacked: 'last',
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#796DF6", "#6FD3F7",
			],
			stroke: {
				width: 5,
				show: true,
				colors: ["transparent"]
			},
			xaxis: {
				categories: [
					"Sun",
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: true,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 6,
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			fill: {
				opacity: 1
			},
			grid: {
				borderColor: '#F5F5F5',
				xaxis: {
					lines: {
						show: true
					}
				},   
				yaxis: {
					lines: {
						show: true
					}
				},
			},
			legend: {
				offsetY: 0,
				position: "bottom",
				fontSize: "14px",
				fontFamily: 'Outfit',
				horizontalAlign: "center",
				offsetY: 8,
				labels: {
					colors: "#919aa3"
				},
				itemMargin: {
					horizontal: 10,
					vertical: 0
				}
			}
		};

		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#daily_visit_insights_chart'), options);
		chart.render();

	}

	/* User By Device JS */
	const getUserByDeviceId = document.getElementById('user_by_device_chart');
	if (getUserByDeviceId) {
		var options = {
			series: [
				{
					name: 'Desktop',
					data: [100, 10, 60, 10, 60, 20, 60],
				}, 
				{
					name: 'Mobile',
					data: [20, 30, 20, 60, 55, 90, 45],
				},
				{
					name: 'Others',
					data: [60, 50, 35, 30, 90, 60, 35],
				},
			],
			chart: {
				height: 403,
				type: 'radar',
				toolbar: {
					show: false,
				}
			},
			dataLabels: {
				enabled: false
			},
			legend: {
				position: 'bottom',
				horizontalAlign: 'center', 
				fontWeight: 400,
				fontFamily: 'Outfit',
				fontSize: '14',
				offsetY: 12,
				labels: {
					colors: '#919AA3',
				},
				itemMargin: {
					horizontal: 10,
					vertical: 5,
				},
				markers: {
					width: 10,
					height: 10,
					shape: 'square',
				}
			},
			plotOptions: {
				radar: {
					size: 120,
					polygons: {
						strokeColors: '#DCD9EF',
					},
				}
			},
			colors: ['#6560F0', '#06B48A', '#FE9039'],
			tooltip: {
				y: {
					formatter: function(val) {
						return val
					}
				}
			},
			xaxis: {
				categories: ['Jul', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				labels: {
					style: {
						colors: ['#919AA3'],
						fontSize: '14px',
						fontFamily: 'Outfit',
						fontWeight: 400,
						cssClass: 'apexcharts-xaxis-label',
					},
				}
			},
			yaxis: {
				tickAmount: 5,
				labels: {
					show: false,
					formatter: function(val, i) {
						if (i % 1 === 0) {
						return val
						} else {
							return ''
						}
					},
					style: {
						how: false,
						colors: ['#7A799B'],
						fontSize: '0',
						fontFamily: 'Montserrat',
						fontWeight: 500,
						cssClass: 'apexcharts-xaxis-label',
					},
				}
			},
		};
		var chart = new ApexCharts(document.querySelector("#user_by_device_chart"), options);
		chart.render();
	}

	/* Audience Overview Chart JS*/
	const getAudienceOverviewId = document.getElementById('audience_overview_chart');
	if (getAudienceOverviewId) {
		var options = {
			series: [
				{
					name: "New Visitors",
					data: [4, 7, 6, 6, 7, 5, 3, 8, 4, 7]
				},
				{
					name: "Previous Visitors",
					data: [2, 5, 2, 5, 4, 7, 5, 6, 4, 3]
				},
				{
					name: "Unique Visitors",
					data: [5, 2, 5, 8, 4, 3, 4, 5, 8, 7]
				}
			],
			chart: {
				height: 399,
				type: "line",
				zoom: {
					enabled: false
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			colors: [
				"#796DF6", "#00CAE3", "#FF3471"
			],
			stroke: {
				curve: "smooth",
				width: 3
			},
			grid: {
				borderColor: '#F5F5F5', 
				strokeDashArray: 0,
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: true
					}
				},
			},
			markers: {
				size: 0,
				strokeWidth: 0,
				shape: ["circle", "square"],
				hover: {
					size: 5
				}
			},
			xaxis: {
				categories: [
					"Oct 01",
					"Oct 02",
					"Oct 03",
					"Oct 04",
					"Oct 05",
					"Oct 06",
					"Oct 07",
					"Oct 08",
					"Oct 09",
					"Oct 10",
				],
				axisTicks: {
					show: false,
					color: '#B1BBC8'
				},
				axisBorder: {
					show: false,
					color: '#B1BBC8'
				},
				labels: {
					show: true,
					style: {
						colors: "#919AA3",
						fontSize: "12px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				tickAmount: 6,
				//max: 150,
				min: 0,
				labels: {
					formatter: (val) => {
						return '' + val + 'K'
					},
					style: {
						colors: "#919AA3",
						fontSize: "12px",
						fontFamily: 'Outfit',
					}
				}
			},
			legend: {
				show: true,
				position: 'bottom',
				fontSize: '14px',
				fontFamily: 'Outfit',
				offsetY: 7,
				itemMargin: {
					horizontal: 7.5,
					vertical: 0
				},
				labels: {
					colors: '#919AA3'
				},
				markers: {
					width: 10,
					height: 10,
					shape: 'square',
				}
			}
		};
		var chart = new ApexCharts(document.querySelector("#audience_overview_chart"), options);
		chart.render();
	}

	/* Top Browsing Pages Per Minute Chart JS */ 
	const getTopBrowsingPagesPerMinuteId = document.getElementById('top_browsing_pages_per_minute_chart');
	if (getTopBrowsingPagesPerMinuteId) {
		var options = {
			series: [{
				name: 'Top Browsing Pages Per Minute',
				data: [18, 30, 42, 18, 37, 26, 11, 34, 15, 22]
		  	},],
			colors: ["#2ED47E"],
			chart: {
				type: 'bar',
				height: 180,
				stacked: true,
				toolbar: {
					show: false
				},
				zoom: {
					enabled: false
				}
		  	},
			plotOptions: {
				bar: {
					horizontal: false,
					borderRadius: 0,
					borderRadiusApplication: 'end',
					borderRadiusWhenStacked: 'last',
					columnWidth: '25%',
					barHeight: '30%',
					dataLabels: {
						enabled: true,
						distributed: false,
						total: {
							enabled: true,
							offsetY: -10,
							style: {
								color: '#919AA3',
								fontSize: '14px',
								fontFamily: 'Outfit',
								fontWeight: 400
							}
						}
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: [
					"MON",
					"TUE",
					"WED",
					"THU",
					"FRI",
					"SAT",
					"SUN",
				],
				axisTicks: {
					show: false,
					color: '#ECEEF2'
				},
				axisBorder: {
					show: false,
					color: '#ECEEF2'
				},
				labels: {
					show: false,
					style: {
						colors: "#8695AA",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				}
			},
			yaxis: {
				labels: {
					show: false,
					style: {
						colors: "#9C9AB6",
						fontSize: "14px",
						fontFamily: 'Outfit',
						fontWeight: 500,
					}
				},
				axisBorder: {
					show: false,
					color: '#ECEEF2'
				},
				axisTicks: {
					show: false,
					color: '#ECEEF2'
				}
			},
			legend: {
				position: 'right',
				offsetY: 40,
				show: false,
			},
			fill: {
				opacity: 1
			},
			
			grid: {
				borderColor: '#F5F5F5', 
				strokeDashArray: 0,
				xaxis: {
					lines: {
						show: false,
					}
				},
			},
		};

		var chart = new ApexCharts(document.querySelector("#top_browsing_pages_per_minute_chart"), options);
		chart.render();
	}

	/* Visits By Country JS*/
    const getVisitsByCountryId = document.getElementById('visits_by_country_chart');
    if (getVisitsByCountryId) {

        var options = {
			series: [
				{
					name: "Projects",
					data: [81, 95, 87, 70, 72, 78]
				}
			],
			chart: {
				type: "bar",
				height: 397, // height: 317,
				toolbar: {
					show: false
				}
			},
			colors: [
				"#52C7FF", "#52C7FF", "#52C7FF", "#52C7FF", "#52C7FF", "#52C7FF"
			],
			plotOptions: {
				bar: {
					horizontal: true,
					distributed: true, // Add this line to enable separate colors for each bar
					barHeight: '50%',
				}
			},
			dataLabels: {
				enabled: true,
				formatter: (val) => {
					return '' + val / 1 + '%'
				},
				style: {
					fontSize: '14px',
					fontFamily: 'Outfit',
				}
			},
			legend: {
				show: false
			},
			xaxis: {
				categories: [
					"United States",
					"Canada",
					"Switzerland",
					"Mexico",
					"Sweden",
					"Australia"
				],
				axisBorder: {
					show: false,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				},
				labels: {
					show: false,
					style: {
						colors: "#919aa3",
						fontSize: "14px",
						fontFamily: 'Outfit',
					},
					formatter: (val) => {
						return '' + val / 1 + '%'
					},
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: "#475569",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				axisBorder: {
					show: true,
					color: '#e0e0e0'
				},
				axisTicks: {
					show: false,
					color: '#e0e0e0'
				}
			},
			grid: {
				borderColor: '#EAECF2', 
				strokeDashArray: 0,
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: false
					}
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "" + val + "%";
					}
				}
			}	
		};
		
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#visits_by_country_chart'), options);
		chart.render();

    }

	/* Users By Device JS*/
	const getUsersByDeviceId = document.getElementById('users_by_device_chart');
	if (getUsersByDeviceId) {
		var options = {
			series: [34, 36.1,  26.8, 20.8],
			chart: {
				height: 400,
				type: "donut"
			},
			labels: [
				"Desktop", "Mobile", "Tablet", "Laptop"
			],
			colors: [
				"#00CAE3", "#2ECC71", "#0E7AEE", "#796DF6"
			],
			stroke: {
				width: 4,
				show: true,
				colors: ["#ffffff"]
			},
			legend: {
				position: 'bottom',
				fontSize: '14px',
				fontFamily: 'Outfit',
				horizontalAlign: 'center',
				offsetY: -40,
				itemMargin: {
					horizontal: 8,
					vertical: 0
				},
				labels: {
					colors: '#919AA3'
				},
				markers: {
					width: 10,
					height: 10,
					shape: "square",
				},
				itemMargin: {
					horizontal: 5.5,
					vertical: 0
				},
			},
			responsive: [{
				breakpoint: 482,
				options: {
					legend: {
						position: 'top',
					},
				},
			}],
			plotOptions: {
				pie: {
					expandOnClick: false,
					offsetY: 0,
					donut: {
						size: '65%',
						labels: {
							show: false,
							name: {
								color: '#64748B'
							},
							value: {
								show: false,
								color: '#475569',
								fontSize: '26px',
								fontFamily: 'Outfit',
								fontWeight: '700'
							},
							total: {
								show: false,
								color: '#475569',
								fontSize: '16px',
								fontFamily: 'Outfit',
								label: 'Total Students',
							}
						}
					}
				}
			},
			dataLabels: {
				enabled: false
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return "" + val + "%";
					}
				}
			}
		}
		var chart = new ApexCharts(document.querySelector("#users_by_device_chart"), options);
		chart.render();
	}

	/* Performance Overview Chart JS*/
    const getPerformanceOverviewId = document.getElementById("performance_overview_chart");
    if (getPerformanceOverviewId) {
        var options = {
            series: [
                {
                    name: 'Email',
                    data: [[100, 20, 50]]
                },
                {
                    name: 'Organic Search',
                    data: [[300, 50, 70]]
                },
                {
                    name: 'Direct Browse',
                    data: [[500, 80, 80]]
                },
                {
                    name: 'Paid Search',
                    data: [[650, 40, 50]]
                },
                {
                    name: 'Social',
                    data: [[850, 60, 70]]
                },
                {
                    name: 'Referral',
                    data: [[900, 20, 60]]
                }
            ],
            chart: {
                type: 'bubble',
                height: 370,
				toolbar: {
					show: false
				}
            },
            colors: [
                '#FC7013', '#2ECC71', '#817EFB', '#00CAE3', '#E74C3C', '#2AA9FF'
            ],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true,
                strokeDashArray: 0,
                borderColor: "#F5F5F5"
            },
            xaxis: {
                min: 0,
                max: 1000,
                axisTicks: {
                    show: false,
                    color: '#DDE4FF'
                },
                axisBorder: {
                    show: true,
                    color: '#DDE4FF'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "14px",
						fontFamily: 'Outfit',
                    }
                }
            },
            yaxis: {
                tickAmount: 5,
                max: 100,
                min: 0,
                labels: {
                    formatter: (val) => {
                        return '$' + val + 'K'
                    },
                    style: {
                        colors: "#8695AA",
                        fontSize: "14px",
						fontFamily: 'Outfit',
                    }
                },
                axisBorder: {
                    show: true,
                    color: '#DDE4FF'
                },
                axisTicks: {
                    show: false,
                    color: '#DDE4FF'
                }
            },
            legend: {
                show: true,
                position: 'bottom',
                fontSize: '14px',
				fontFamily: 'Outfit',
                itemMargin: {
                    horizontal: 8,
                    vertical: 8
                },
                labels: {
                    colors: '#919AA3'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'square'
                }
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$" + val + "k";
                    }
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#performance_overview_chart"), options);
        chart.render();
    }

	/* Students Attendance Chart JS*/
    const getSalaryStatisticsId = document.getElementById("salary_statistics_chart");
    if (getSalaryStatisticsId) {

        var options = {
			series: [{
				name: 'Salary Statistics',
				data: [7000, 20000, 15000, 8000, 10000, 18000, 15000]
			}],
			chart: {
				height: 500,
				type: 'bar',
				events: {
					click: function (chart, w, e) {
						// console.log(chart, w, e)
					}
				},
				toolbar: {
					show: false,
				}
			},
			colors: ["#796DF6", "#FE9039", "#2AA9FF", "#00CAE3", "#E74C3C", "#667A91", "#2ECC71"],
			plotOptions: {
				bar: {
					columnWidth: "62%",
					rangeBarOverlap: false,
					isFunnel3d: false,
					distributed: true,
					colors: {
						ranges: [{
							from: 0,
							to: 0,
							color: undefined
						}],
						backgroundBarColors: ["#ECEFF2"],
						backgroundBarOpacity: 1,
						backgroundBarRadius: 0,
					},
				}
			},
			dataLabels: {
				enabled: false
			},
			legend: {
				show: false
			},
			xaxis: {
				labels: {
					show: true,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: true,
				},
				labels: {
					style: {
						colors: "#8695AA",
						fontSize: "14px",
						fontFamily: 'Outfit',
					}
				},
				categories: [
					"HR",
					"IT",
					"Marketing",
					"Sales",
					"Finance",
					"Developer",
					"Design"
				],
			},
			yaxis: {
				tickAmount: 5,
				max: 20000,
				min: 0,
				labels: {
                    formatter: (val) => {
                        return '$' + val + ''
                    },
                    style: {
                        colors: "#8695AA",
                        fontSize: "14px",
						fontFamily: 'Outfit',
                    }
                },
			},
			grid: {
				borderColor: "#F5F5F5",
				xaxis: {
					lines: {
						show: false
					}
				},
				yaxis: {
					lines: {
						show: true
					}
				},
			},

		};
		// Initialize and render the chart
		const chart = new ApexCharts(document.querySelector('#salary_statistics_chart'), options);
		chart.render();

    }

})();