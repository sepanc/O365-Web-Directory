/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

'use strict';

angular.module('directoryApp', [
  'routes',
  'directoryApp.home',
  'directoryApp.navigationBar',
  'AdalAngular'
])

.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function($routeProvider, $httpProvider, adalProvider) {

  var endpoints = {   
    'https://graph.microsoft.com': 'https://graph.microsoft.com',
  };

  // Initialize ADAL JS to handle authentication. 
  // See https://github.com/AzureAD/azure-activedirectory-library-for-js for details.
  adalProvider.init(
  {
    tenant: '{your-subdomain}.onmicrosoft.com',
    clientId: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    endpoints: endpoints, 
    cacheLocation: 'localStorage' // Enable this for IE, as sessionStorage does not work for localhost.
  },
  $httpProvider
  );
}]);

// *********************************************************
//
// O365-Web-Directory, https://github.com/OfficeDev/O365-Web-Directory
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// *********************************************************
