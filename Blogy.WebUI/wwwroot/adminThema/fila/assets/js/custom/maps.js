(function() {
	"use strict";

	// Sales By Locations Map JS
	const getSalesByLocationsMapId = document.getElementById('sales_by_locations_map');
	if (getSalesByLocationsMapId) {
		var markers = [
			{ name: "France", coords: [45.8206, 3.8025] },
			{ name: "Canada", coords: [60.1304, -106.3468] },
			{ name: "Germany", coords: [50.8206, 10.8025] },
			{ name: "China", coords: [35.524, 105.3188] },
			{ name: "United States", coords: [40.1304, -106.3468] },
			{ name: "Australia", coords: [-30.7069, 130.6043] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#sales_by_locations_map",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Country Stats Map JS
	const getCountryStatsId = document.getElementById('country_stats_map');
	if (getCountryStatsId) {
		var markers = [
			{ name: "Germany", coords: [50.8206, 10.8025] },
			{ name: "China", coords: [35.524, 105.3188] },
			{ name: "United States", coords: [40.1304, -106.3468] },
			{ name: "Australia", coords: [-30.7069, 130.6043] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#country_stats_map",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

	// Visits By Country Map JS
	const getVisitsByCountryId = document.getElementById('visits_by_country');
	if (getVisitsByCountryId) {
		var markers = [
			{ name: "France", coords: [45.8206, 3.8025] },
			{ name: "Canada", coords: [60.1304, -106.3468] },
			{ name: "Germany", coords: [50.8206, 10.8025] },
			{ name: "China", coords: [35.524, 105.3188] },
			{ name: "United States", coords: [40.1304, -106.3468] },
			{ name: "Australia", coords: [-30.7069, 130.6043] },
		];
		  
		var jvm = new jsVectorMap({
			map: "world_merc",
			selector: "#visits_by_country",
			// zoomButtons: true,
			onLoaded(map) {
				window.addEventListener("resize", () => {
					map.updateSize();
				});
			},
			regionStyle: {
			   initial: { fill: '#d1d4db' }
			},
			labels: {
				markers: {
					render: (marker) => marker.name
				}
			},
			markersSelectable: true,
			selectedMarkers: markers.map((marker, index) => {
				var name = marker.name;
			
				if (name === "Russia" || name === "Brazil") {
					return index;
				}
			}),
			markers: markers,
			markerStyle: {
				initial: { fill: "#5c5cff" },
				selected: { fill: "#ff5050" }
			},
			markerLabelStyle: {
				initial: {
					fontFamily: "Inter",
					fontWeight: 400,
					fontSize: 0
				}
			}
		});
	}

})();