define(
    ["esri/layers/BaseTileLayer"],function (BaseTileLayer) {
        var MyLayer=BaseTileLayer.createSubclass({
            properties: {
                urlTemplate: null,
                tint: {
                    value: null,
                    type: Color
                }
            },

            // generate the tile url for a given level, row and column
            getTileUrl: function(level, row, col) {
                return this.urlTemplate.replace("{z}", level).replace("{x}",
                    col).replace("{y}", row);
            },

            // This method fetches tiles for the specified level and size.
            // Override this method to process the data returned from the server.
            fetchTile: function(level, row, col) {

                // call getTileUrl() method to construct the URL to tiles
                // for a given level, row and col provided by the LayerView
                var url = this.getTileUrl(level, row, col);

                // request for tiles based on the generated url
                return esriRequest(url, {
                    responseType: "image"
                })
                    .then(function(response) {
                        // when esri request resolves successfully
                        // get the image from the response
                        var image = response.data;
                        var width = this.tileInfo.size[0];
                        var height = this.tileInfo.size[0];

                        // create a canvas with 2D rendering context
                        var canvas = document.createElement("canvas");
                        var context = canvas.getContext("2d");
                        canvas.width = width;
                        canvas.height = height;

                        // Apply the tint color provided by
                        // by the application to the canvas
                        if (this.tint) {
                            // Get a CSS color string in rgba form
                            // representing the tint Color instance.
                            context.fillStyle = this.tint.toCss();
                            context.fillRect(0, 0, width, height);

                            // Applies "difference" blending operation between canvas
                            // and steman tiles. Difference blending operation subtracts
                            // the bottom layer (canvas) from the top layer (tiles) or the
                            // other way round to always get a positive value.
                            context.globalCompositeOperation = "difference";
                        }

                        // Draw the blended image onto the canvas.
                        context.drawImage(image, 0, 0, width, height);

                        return canvas;
                    }.bind(this));
            }
        });
    });