/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

'use strict';

angular.module('directoryApp.home', [])

.controller('homeController', ['adalAuthenticationService', '$http', function(adalService, $http) {
	// Set up view model and variables used by our view.
	var vm = this;
	vm.organization = []; 
	vm.selectedEmployee;

	var tenant = null;

  ///////////////////////////////////////
  //
  // Gets tenant name that is required for
  // some API calls. 
  //
  ///////////////////////////////////////
	var getTenant = function() {
		if (adalService.userInfo.userName == '') {
			return;
		}

		tenant = adalService.userInfo.userName;
		tenant = tenant.substring(tenant.indexOf('@') + 1, tenant.length);
	}

	// Call the function to get the tenant name.
	getTenant();

  ///////////////////////////////////////
  //
  // Get thumbnail photos for each employee
  // in the collection passed to the function.
  //
  ///////////////////////////////////////
	var getThumbnailPhotos = function(employees) {
		// Iterate over employees and add them to view model.
		employees.value.forEach(function(employee) {
   		vm.organization.push(employee);
   	});

		// Iterate over employees and get each one of their thumbnail photos.
    vm.organization.forEach(function(employee) {
      // Build request to get thumbnail.
      var request = {
        method: 'GET',
        url: "https://graph.microsoft.com/beta/" + tenant + "/users/" + employee.objectId + "/thumbnailPhoto",
        responseType: 'arraybuffer'
      };

      // Execute thumbnail request.
      $http(request)
        .success(function(data, status, headers, config) {

          // Convert raw image data to encoded data to display.
          var dataArray = new Uint8Array(data);
          var dataBinary = String.fromCharCode.apply(null, dataArray);
          var dataEncoded = btoa(dataBinary);
          var imageUrl = "data:image/*;base64,"+ dataEncoded;

          // Attach image URL to employee object. 
          employee.photoSrc = imageUrl;
        })
        .error(function(data, status, headers, config) {
          console.log('Get ME/THUMBNAILPHOTO failed.');

          // No thumbnail found, supply a placeholder. 
          employee.photoSrc = "assets/default.png";
        });
    });
	}

  ///////////////////////////////////////
  //
  // Get all of our user data.
  //  1. Get logged in user info.
  //  2. Then get all the users in the tenant.
  //  3. Then get each of those users' profile thumbnails.
  //
  ///////////////////////////////////////
  $http.get("https://graph.microsoft.com/beta/me")
    .success(function(data, status, headers, config) {

     	vm.signedInUser = data;	
      vm.organization.push(vm.signedInUser);

      $http.get("https://graph.microsoft.com/beta/" + tenant + "/users")
  			.success(function(data, status, headers, config) {
  				getThumbnailPhotos(data);
  			})
  			.error(function(data, status, headers, config) {
		    	console.log('Get TENANT/USERS failed.');
		    });
    })
    .error(function(data, status, headers, config) {
    	console.log('Get ME failed.');
    });

}])

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

