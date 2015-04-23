# Office 365 Directory Sample for Web

**Table of contents**

* [Introduction](#introduction)
* [Prerequisites](#prerequisites)
* [Configure the sample](#configure) 
* [Run the sample](#run-the-sample)
* [Questions and comments](#questions-and-comments)
* [Additional resources](#additional-resources)

<a name="introduction"></a>
## Introduction

The Office 365 Directory Sample for Web uses the **Office 365 unified endpoint (preview)** to get information from Azure AD.

<a name="prerequisites"/>
### Prerequisites

* [Node.js](https://nodejs.org/). Node is required to run the sample on a development server. 
* [Set up your Office 365 development environment](https://msdn.microsoft.com/en-us/office/office365/howto/setup-development-environment).
* A registered Azure application. The application must have the following permissions:
    * Windows Azure Active Directory
        * Enable sign-on and read user's profiles
    * Microsoft Graph
        * Read and write all user's full profiles
* The registered Azure application also needs to have http://localhost:8080/ set as a reply URL. 

<a name="configure"/>
### Configure the sample

Open **app.js** and fill in your tenant information and Azure application client ID in the *tenant* and *cliendId* variables, respectively. 

<a name="run-the-sample"/>
### Run the sample

You will install the necessary dependencies and run the sample via the command line. Begin by opening a command prompt and navigating to your local repository's root folder. Once there, follow the steps below.

1. Install project dependencies by running ```npm install```.
2. Now that all the project dependencies have been installed, start the development server by running ```node server.js``` in the root folder.
3. Navigate to ```http://localhost:8080/``` using Google Chrome (because cookies are not accessible in Internet Explorer while your app is running in localhost, you'll need to use a different browser, such as Google Chrome, to test your application).

<a name="questions-and-comments"/>
## Questions and comments

We'd love to get your feedback on this sample. You can send your questions and suggestions to us:

* If you have any trouble running this sample, please [log an issue](https://github.com/OfficeDev/O365-Web-CORS-Directory/issues).
* For more general feedback, send an email to [docthis@microsoft.com](mailto:docthis@microsoft.com?subject=Feedback%20on%20the%20Office%20365%20Directory%20sample%20for%20Web).
  
<a name="additional-resources"/>
## Additional resources

- [Office 365 APIs documentation](http://aka.ms/kbwa5c)
- [Office 365 APIs starter projects and code samples](http://aka.ms/x1kpnz)
- [Office developer code samples](http://aka.ms/afh45z)
- [Office dev center](http://aka.ms/uftrm1)

## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.
