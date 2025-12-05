(function() {
	"use strict";

    //**<---- Marketing Charts ---->**//

	/* Website Traffic JS*/
	const getWebsiteTrafficId = document.getElementById('website_traffic_chart');
	if (getWebsiteTrafficId) {
		
        var dom = document.getElementById('website_traffic_chart');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};

        var option;

        option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Sessions', 'Unique Visitors', 'Bounce Rate%', 'Page Views'],
                show: true,
                itemWidth: 11,
                itemHeight: 11,
                padding: 0,
                itemGap: 20,
                borderWidth: 0,
                top: '0%',
                bottom: '5%',
                textStyle: {
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit',
                },
                icon: 'rect', // Shape of legend symbols: 'circle', 'rect', 'roundRect', 'triangle', 'diamond', or custom path
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: true,
            },
            toolbox: {
                show: false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {     // Axis label settings
                    show: true,
                    formatter: '{value}', // Custom label format
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit'
                },
                axisTick: {      // Axis tick settings
                    show: true,
                    alignWithLabel: true,
                    length: 5,
                    lineStyle: {
                        color: '#D6D6D6',
                        width: 1
                    }
                },
                axisLine: {      // Axis line settings
                    show: true,
                    lineStyle: {
                        color: '#D6D6D6',
                        width: 1,
                        type: 'solid' // 'solid', 'dashed', 'dotted'
                    }
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {     // Grid lines for the axis
                    show: true,
                    lineStyle: {
                        color: '#EAECF2',
                        type: 'solid'
                    }
                },
                axisLabel: {     // Axis label settings
                    show: true,
                    formatter: '{value}', // Custom label format
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit'
                },
            },
            color: ['#2ECC71', '#138BFD', '#FC7013', '#E74C3C'],
            series: [
                {
                    name: 'Sessions',
                    type: 'line',
                    step: 'start',
                    data: [2200, 2320, 2010, 2340, 1800, 3300, 2100]
                },
                {
                    name: 'Unique Visitors',
                    type: 'line',
                    step: 'middle',
                    data: [3200, 3820, 3010, 3340, 3900, 5300, 5100]
                },
                {
                    name: 'Bounce Rate%',
                    type: 'line',
                    step: 'end',
                    data: [5500, 5320, 5010, 5540, 6900, 6300, 6100]
                },
                {
                    name: 'Page Views',
                    type: 'line',
                    step: 'end',
                    data: [500, 500, 500, 500, 500, 500, 500]
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
        window.addEventListener('resize', myChart.resize);
	}

    /* Website Traffic JS*/
	const getConversionRateId = document.getElementById('conversion_rate_chart');
	if (getConversionRateId) {
		
        var dom = document.getElementById('conversion_rate_chart');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });

        var option;

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
                }
            },
            legend: {
                show: false,
            },
            toolbox: {
                show: false,
            },
            color: ['#817EFB', '#52D689', '#52C7FF',],
            series: [
                {
                    name: 'Expected',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    top: '0%',
                    bottom: '0%',
                    
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        opacity: 0.7
                    },
                    
                    data: [
                        { value: 80, name: 'Visitors' },
                        { value: 50, name: 'Leads' },
                        { value: 40, name: 'Customers' },
                    ]
                },
                {
                    name: 'Actual',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    top: '0%',
                    bottom: '0%',
                    maxSize: '80%',
                    label: {
                        position: 'inside',
                        formatter: '{c}%',
                        color: '#475569',
                        fontSize: 14,
                        fontFamily: 'Outfit'
                    },
                    itemStyle: {
                        opacity: 1,
                        borderColor: '#fff',
                        borderWidth: 0,
                    },
                    emphasis: {
                        label: {
                            position: 'inside',
                            formatter: '{b}Actual: {c}%',
                        }
                    },
                    data: [
                        { value: 70, name: 'Visitors' },
                        { value: 20, name: 'Leads' },
                        { value: 10, name: 'Customers' },
                    ],
                    // Ensure outer shape will not be over inner shape when hover.
                    z: 100
                }
            ]
        };
        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
        window.addEventListener('resize', myChart.resize);
	}

    /* Camping Performance JS*/
	const getCampingPerformanceId = document.getElementById('camping_performance_chart');
	if (getCampingPerformanceId) {
		
        var dom = document.getElementById('camping_performance_chart');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });

        var option;

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
            legend: {
                show: true,
                itemWidth: 11,
                itemHeight: 11,
                padding: 0,
                itemGap: 20,
                borderWidth: 0,
                left: 'center',
                right: 'center',
                bottom: '0',
                textStyle: {
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit',
                },
                icon: 'rect', // Shape of legend symbols: 'circle', 'rect', 'roundRect', 'triangle', 'diamond', or custom path
            },
            color: ['#796DF6', '#1CDFF4', '#2ECC71', '#FFB264', '#E74C3C'],
            series: [
                {
                    name: 'Camping Performance',
                    type: 'pie',
                    radius: '67%',
                    label: {
                        show: false,
                    },
                    center: ['50%', '35%'],
                    data: [
                        { value: 50, name: 'Visitor Count' },
                        { value: 20, name: 'Activity Participation' },
                        { value: 15, name: 'Customer Satisfaction Score' },
                        { value: 10, name: 'Revenue' },
                        { value: 5, name: 'Campground Occupancy Rate' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        if (option && typeof option === 'object') {
        myChart.setOption(option);
        }
        window.addEventListener('resize', myChart.resize);

	}

    /* Sales and Revenue JS*/
    const getSalesAndRevenueId = document.getElementById('sales_and_revenue_chart');
    if (getSalesAndRevenueId) {

        var dom = document.getElementById('sales_and_revenue_chart');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};

        var option;

        option = {
            xAxis: {
                data: ['Animals', 'Fruits', 'Cars']
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: '3%',
                containLabel: true,
            },
            color: ['#817EFB'],
            xAxis: {
                type: 'category',
                data: ['Q1', 'Q2', 'Q3'],
                axisLabel: {     // Axis label settings
                    show: true,
                    formatter: '{value}', // Custom label format
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit'
                },
                axisTick: {      // Axis tick settings
                    show: true,
                    alignWithLabel: true,
                    length: 5,
                    lineStyle: {
                        color: '#D6D6D6',
                        width: 1
                    }
                },
                axisLine: {      // Axis line settings
                    show: true,
                    lineStyle: {
                        color: '#D6D6D6',
                        width: 1,
                        type: 'solid' // 'solid', 'dashed', 'dotted'
                    }
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {     // Grid lines for the axis
                    show: true,
                    lineStyle: {
                        color: '#EAECF2',
                        type: 'solid'
                    }
                },
                axisLabel: {     // Axis label settings
                    show: true,
                    formatter: '{value}K', // Custom label format
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit'
                },
            },
            dataGroupId: '',
            animationDurationUpdate: 500,
            series: {
                type: 'bar',
                id: 'sales',
                data: [
                    {
                        value: 50,
                        groupId: 'Q1'
                    },
                    {
                        value: 20,
                        groupId: 'Q2'
                    },
                    {
                        value: 40,
                        groupId: 'Q3'
                    }
                ],
                universalTransition: {
                    enabled: true,
                    divideShape: 'clone'
                }
            }
        };

        myChart.on('click', function (event) {
            if (event.data) {
                var subData = drilldownData.find(function (data) {
                    return data.dataGroupId === event.data.groupId;
                });
                if (!subData) {
                    return;
                }
                myChart.setOption({
                    xAxis: {
                        data: subData.data.map(function (item) {
                            return item[0];
                        })
                    },
                    series: {
                        type: 'bar',
                        id: 'sales',
                        dataGroupId: subData.dataGroupId,
                        data: subData.data.map(function (item) {
                            return item[1];
                        }),
                        universalTransition: {
                            enabled: true,
                            divideShape: 'clone'
                        }
                    },
                    graphic: [
                        {
                            type: 'text',
                            left: 50,
                            top: 20,
                            style: {
                                text: 'Back',
                                fontSize: 18
                            },
                            onclick: function () {
                                myChart.setOption(option);
                            }
                        }
                    ]
                });
            }
        });

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
        window.addEventListener('resize', myChart.resize);
    }

    /* Students Attendance Chart JS*/
    const getStudentsAttendanceId = document.getElementById("students_attendance_chart");
    if (getStudentsAttendanceId) {

        var dom = document.getElementById('students_attendance_chart');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};

        var option;

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
            legend: {
                show: true,
                itemWidth: 11,
                itemHeight: 11,
                padding: 0,
                itemGap: 20,
                borderWidth: 0,
                left: 'center',
                right: 'center',
                bottom: '0',
                top: 'bottom',
                align: 'auto',
                textStyle: {
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit',
                },
                icon: 'rect', // Shape of legend symbols: 'circle', 'rect', 'roundRect', 'triangle', 'diamond', or custom path
            },
            toolbox: {
                show: false,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            color: ['#2ECC71', '#FFB264', '#E74C3C'],
            series: [
                {
                    name: 'Student Structure',
                    type: 'pie',
                    radius: [50, 150],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    label: {
                        show: false,
                    },
                    data: [
                        { value: 85, name: 'Present' },
                        { value: 50, name: 'Late' },
                        { value: 30, name: 'Absent' },
                    ]
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);

    }

    /* Applications Received Chart JS*/
    const getApplicationsReceivedId = document.getElementById("applications_received_chart");
    if (getApplicationsReceivedId) {

        var dom = document.getElementById('applications_received_chart');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};

        var option;

        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: true,
                itemWidth: 11,
                itemHeight: 11,
                padding: 0,
                itemGap: 7,
                borderWidth: 0,
                left: '0',
                top: '40',
                align: 'auto',
                orient: 'vertical',
                textStyle: {
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit',
                },
                icon: 'rect', // Shape of legend symbols: 'circle', 'rect', 'roundRect', 'triangle', 'diamond', or custom path
            },
            series: [
                {
                    name: 'Applications Received',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['79%', '57%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 4,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 14,
                            fontFamily: 'Outfit',
                            fontWeight: '400',
                            color: '#475569',
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: 'Sales 45' },
                        { value: 735, name: 'HR 30' },
                        { value: 580, name: 'Marketing 25' },
                        { value: 484, name: 'IT 10' },
                        { value: 300, name: 'Finance 5' }
                    ]
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);

    }

    /* Marketing Expenses Chart JS*/
    const getMarketingExpensesId = document.getElementById("marketing_expenses_chart");
    if (getMarketingExpensesId) {

        var dom = document.getElementById('marketing_expenses_chart');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};

        var option;

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                show: false,
            },
            color: ['#25AFE0', '#FFBE40', '#EE6666', '#91CC75', '#00E396', '#666CFF', '#6FD3F7', '#EE6666', '#6FD3F7'],
            series: [
                {
                    name: 'Marketing Expenses',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['35%', '60%'],
                    //center: ['79%', '57%'],
                    label: {
                        position: 'inner',
                        fontSize: 14,
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        borderRadius: 8,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    data: [
                        { value: 10, name: 'Email Marketing' },
                        { value: 10, name: 'Influencer ' },
                        { value: 15, name: 'Google Ads' },
                        { value: 15, name: 'Social Media' },
                        { value: 10, name: 'Back Links' },
                        { value: 10, name: 'Ad Campaign' },
                        { value: 30, name: 'Event Sponsorship ', selected: false }
                    ]
                },
                {
                    name: 'Offline Marketing',
                    type: 'pie',
                    radius: ['68%', '78%'],
                    labelLine: {
                        length: 30
                    },
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        borderRadius: 8,
                        borderColor: '#fff',
                        borderWidth: 6
                    },
                    data: [
                        { value: 30, name: 'Revenue' },
                        { value: 70, name: 'Audit Report' },
                    ]
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
        

    }

    /* Teachers Attendance JS */ 
	const getTeachersAttendanceId = document.getElementById('teachers_attendance_chart');
	if (getTeachersAttendanceId) {

        var dom = document.getElementById('teachers_attendance_chart');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};

        var option;

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
            legend: {
                show: true,
                itemWidth: 11,
                itemHeight: 11,
                padding: 0,
                itemGap: 20,
                borderWidth: 0,
                left: 'center',
                right: 'center',
                bottom: '0',
                top: 'bottom',
                align: 'auto',
                textStyle: {
                    color: '#919AA3',
                    fontSize: 14,
                    fontFamily: 'Outfit',
                },
                icon: 'rect', // Shape of legend symbols: 'circle', 'rect', 'roundRect', 'triangle', 'diamond', or custom path
            },
            color: ['#796DF6', '#FE9039', '#E74C3C'],
            series: [
                {
                    name: 'Teachers Attendance',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '45%'],
                    label: {
                        show: false,
                    },
                    data: [
                        { value: 90, name: 'Present' },
                        { value: 7, name: 'Late' },
                        { value: 3, name: 'Absent' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                },
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
		

	}
    
})();