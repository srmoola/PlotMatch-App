require(["esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Editor",
        "esri/geometry/geometryEngine",
        "esri/widgets/BasemapToggle",
        "esri/widgets/BasemapGallery"],

    function(esriConfig, Map, MapView, FeatureLayer, Editor, geometryEngine, BasemapToggle, BasemapGallery) {

        esriConfig.apiKey = "AAPK58b0f8c95c1d421b8dbab8f0dedae7893zIXB4LE3wY-4EItzWEuYWSS8afmyJss4ZshRftt7GgXHeNL1pv7qK-DADuQAc3h";



        const vacantLayer = new FeatureLayer({
            url: "https://services5.arcgis.com/dPzjn4sOTtWEknso/arcgis/rest/services/ResidentialCommercialVacant_Parcels/FeatureServer/0",
            outFields: ["*"]
        });

        const trafficLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/Nearest_Traffic_Volume___trafficvolume_js421_to_ResidentialCommercialVacant_Parcels/FeatureServer",
            outFields: ["*"],
        })

        const map = new Map({
            basemap: "dark-gray",
            layers: [vacantLayer]
        });

        let view = new MapView({
            map: map,
            center: [-83.487656, 42.304011], // Longitude, latitude
            zoom: 14, // Zoom level
            container: "viewDiv", // Div elements
        });

        // map.add(vacantLayer, 0);

        view.on("click", function(event) {

            view.popup.autoOpenEnabled = false;
            var query = trafficLayer.createQuery();
            var query2 = vacantLayer.createQuery();
            query.geometry = geometryEngine.buffer(event.mapPoint, 1250, "meters");
            query.outFields = ["*"];
            query2.outFields = ["OwnerName"];

            view.hitTest(event.screenPoint, { include: vacantLayer }).then(function(response) {

                if (response.results.length > 0) {
                    trafficLayer.queryFeatures(query).then(function(results){
                        if (results.features.length > 0) {
                            // Get the closest feature from the results
                            const road = results.features[0];
                            const roadAttributes = road.attributes;
                            const score = Math.round((roadAttributes.aadt/60000) * 50 + Math.round(Math.random() * 26) + Math.round(Math.random() * 26)) + Math.round(Math.random() * 26);
                            // Display the attribute information in the popup
                            vacantLayer.queryFeatures(query2).then(function(results) {
                                const feature = response.results[0].graphic;
                                const attributes = feature.attributes;
                                const ownerName = feature.getAttribute("OwnerName");
                                var popupContent = "<b>Owner:</b> " + ownerName;
                                popupContent += "<br><br><b>Owner's Address:</b> " + feature.getAttribute("OwnerAddress") + ", " + feature.getAttribute("OwnerCity") + ", " + feature.getAttribute("OwnerState") + " " + feature.getAttribute("OwnerZipCode");
                                popupContent += "<br><br><b>PlotMatch Score:</b> " + score;
                                view.popup.content = popupContent;
                            });

                            // Open the popup at the clicked location
                            view.popup.open({
                                title: "Vacant Lot",
                                location: event.mapPoint
                            });
                        }
                        else {
                            var popupContent = "No road name found <br>"
                            view.popup.content = popupContent;
                            view.popup.open({
                                title: "Error: ",
                                location: event.mapPoint
                            });
                        }
                    });
                }
            });
        });

        const basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "arcgis-imagery"
        });

        view.ui.add(basemapToggle,"bottom-right");
    });