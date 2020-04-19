# openapi
Example on how to load an OpenAPI file in a frontend Swagger.

# Steps to setup Swagger-UI

## Packages 
	``yarn add swagger-ui buffer``
	
## angular.json

	```
            "styles": [
              "src/styles.css",
              "node_modules/swagger-ui/dist/swagger-ui.css"
            ],
	```

## pollyfill.js
	
	```
	import { Buffer } from 'buffer';
	...
	(window as any).Buffer = Buffer;
	```