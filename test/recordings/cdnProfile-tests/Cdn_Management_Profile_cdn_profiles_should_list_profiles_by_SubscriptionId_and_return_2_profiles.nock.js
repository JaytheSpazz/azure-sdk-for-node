// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile9550\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup2073/providers/Microsoft.Cdn/profiles/cdnTestProfile9550\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"EastUs\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n          \"name\":\"Premium\"\r\n        }\r\n      }\r\n    },{\r\n      \"name\":\"cdnTestProfile63\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles/cdnTestProfile63\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n      },\"location\":\"WestUs\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n          \"name\":\"Standard\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '900',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '11f6007d-1b46-4201-a008-a6e84c468831',
  'x-ms-client-request-id': '2d2b8785-07e4-4110-8863-a82cdb84e17a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ccf35fd0-baa3-40ee-a4f5-ea15698f277a',
  'x-ms-routing-request-id': 'WESTUS:20160302T231841Z:ccf35fd0-baa3-40ee-a4f5-ea15698f277a',
  date: 'Wed, 02 Mar 2016 23:18:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile9550\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup2073/providers/Microsoft.Cdn/profiles/cdnTestProfile9550\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"EastUs\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n          \"name\":\"Premium\"\r\n        }\r\n      }\r\n    },{\r\n      \"name\":\"cdnTestProfile63\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6554/providers/Microsoft.Cdn/profiles/cdnTestProfile63\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\",\"tag3\":\"val3\"\r\n      },\"location\":\"WestUs\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n          \"name\":\"Standard\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '900',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '11f6007d-1b46-4201-a008-a6e84c468831',
  'x-ms-client-request-id': '2d2b8785-07e4-4110-8863-a82cdb84e17a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ccf35fd0-baa3-40ee-a4f5-ea15698f277a',
  'x-ms-routing-request-id': 'WESTUS:20160302T231841Z:ccf35fd0-baa3-40ee-a4f5-ea15698f277a',
  date: 'Wed, 02 Mar 2016 23:18:40 GMT',
  connection: 'close' });
 return result; }]];