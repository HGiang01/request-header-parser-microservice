# Request Header Parser Microservice
The microservice provides information about client headers. Built as part of the freeCodeCamp Back End Development and APIs curriculum.

📚 [Course link](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)

💬 You will learn about Request Headers in this part, including their meaning in a request and how to get them.


## Overview & Feature

This tiny microservice returns the client's request header information as JSON, including the Host header (or the client's IP address), Accept-Language, and User-Agent.
- Host header: The domain name and port of the server the client wants to
- Accept-Language: A list of the natural languages and locales that the client prefers for the response (e.g., Accept-Language: en-US,en;q=0.9,vi;q=0.8)
- User-Agent: A string that identifies the application, operation system, vendor, and/or version of the  requesting user agent (e.g., a browser like Chrome)

## Requirements
- Node.js >= 22 (tested with Node 22)
- express 
- dotenv ( loads environment variables )
- cors

## Quick Start
```bash
# Clone repository
git clone https://github.com/HGiang01/request-header-parser-microservice.git

cd request-header-parser-microservice

# Install dependencies
npm install 

# Start server
npm start

# The app listens on PORT (default 3000)
# Visit http://localhost:3000

```

## Configuration
- `PORT`: Port the HTTP server listens on (default: `3000`).
- See `sample.env` for an example value. Note: environment variables must be provided by your shell or process manager; no `.env` loader is bundled.

## API Usage
Base URL (local): `http://localhost:3000`

`GET /api/whoami`
- Return the request headers information.
- Response:
  ```json
  {
    "ipaddress":"localhost:3000",
    "language":"en-US,en;q=0.9,vi;q=0.8",
    "software":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
  }
  ```

## License
MIT