# duro-code-challenge
Duro Code Challenge


Hi dear Candidate!


Ready for the challenge? Keep calm, really is very easy! 

### Goal

Call REST Api and show the result using as reference a figma design.

### Project Structure

Use <b>React Js v16.0.0+</b> with Flux or Redux, regarding Flux or Redux, the choice is yours!
Use the project structure that suits you best. We are interested in seeing your ability to structure components, so do your best. 

### Challenge

#### First Step

Invoke the REST API using a <code><b>POST</b></code>

REST API at 

https://app.swaggerhub.com/apis/don-chambitas/duro_code_challenge/1.0.0#/Products/viewDetail

Request Format

<b>Headers</b>
<br/>
<code>Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</code>

```json
{
  "catalog": "products",
  "country": "us",
  "id": 25
}
```

Catch the response

```json
{
  "name": "Amazing Product",
  "company": "Amazing Company",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "cpn": "89-00001",
  "eid": "122-00987",
  "revision": 3,
  "created": "2018-03-12",
  "createdBy": "Michael Corr",
  "modified": "2018-03-14",
  "related": [
    {
      "eid": "56037-XDER",
      "country": {
        "name": "Brasil",
        "code": "br"
      },
      "created": "2020-05-28",
      "status": "Approved",
      "company": {
        "name": "Intertico",
        "profile": "Web, UI/UX Design"
      }
    },
    {
      "eid": "05822-FXSP",
      "country": {
        "name": "Belarus",
        "code": "by"
      },
      "created": "2020-02-04",
      "status": "In Progress",
      "company": {
        "name": "Agoda",
        "profile": "Houses & Hotels"
      }
    },
    {
      "eid": "00347-BCLQ",
      "country": {
        "name": "Philipines",
        "code": "ph"
      },
      "created": "2020-01-09",
      "status": "Success",
      "company": {
        "name": "RedGee",
        "profile": "Transportation"
      }
    },
    {
      "eid": "4472-QREX",
      "country": {
        "name": "Argentina",
        "code": "ar"
      },
      "created": "2020-03-09",
      "status": "Success",
      "company": {
        "name": "The Hill",
        "profile": "Software & Hardware"
      }
    }

  ]
}
```

#### Second Step

Render the response using this figma design

https://www.figma.com/file/D6QayJ8zbNplrk4QzxegeT/Duro-Labs?node-id=0%3A1

#### Third Step (optional)

Make the view responsive for smartphones

#### Super Bonus (optional)

Make some Unit Test using Cypress / Puppeteer

Ready? Go!
