# Office 365 Directory Sample for Web

**Table of contents**

* [Prerequisites](#prerequisites)
* [Register and configure the app](#configure) 
* [Run the app](#run-the-sample)
* [Questions and comments](#questions-and-comments)
* [Additional resources](#additional-resources)

The Office 365 Directory Sample for Web uses the **Office 365 unified endpoint (preview)** to get information from Azure AD.

<a name="prerequisites"/>
## Prerequisites

This sample requires the following:
* [Node.js](https://nodejs.org/). Node is required to run the sample on a development server and to install dependencies.
* An Office 365 account. You can sign up for [an Office 365 Developer subscription](http://aka.ms/ro9c62) that includes the resources that you need to start building Office 365 apps.
* A Microsoft Azure tenant to register your application. Azure Active Directory provides identity services that applications use for authentication and authorization. A trial subscription can be acquired here: [Microsoft Azure](http://aka.ms/jjm0q7).

**Note**  You will also need to ensure your Azure subscription is bound to your Office 365 tenant. Check out the Active Directory team's blog post, [Creating and Managing Multiple Windows Azure Active Directories](http://aka.ms/lrb3ln) for instructions. In this post, the *Adding a new directory* section will explain how to do this. You can also read [Set up Azure Active Directory access for your Developer Site](http://aka.ms/fv273q) for more information.


<a name="configure"/>
## Register and configure the app

1. Sign into the [Azure Management Portal](https://manage.windowsazure.com/) using your Office 365 Developer Site credentials.

2. Click the **Active Directory** node in the left column and select the directory linked to your Office 365 subscription.

3. Select the **Applications** tab and then **Add** at the bottom of the screen.

4. On the pop-up, select **Add an application my organization is developing**. Then click the arrow to continue. 

5. Choose a name for the app, such as *SimpleMailApp*, and select **Web application and/or web API** as its Type. Then click the arrow to continue.

6. The value of **Sign-on URL** is the URL where the application will be hosted. Use *http://localhost:8080/* for the sample project.

7. The value of **App ID URI** is a unique identifier for Azure AD to identify the app. You can use http://{your_subdomain}/O365-Web-Directory, where {your_subdomain} is the subdomain of .onmicrosoft you specified while signing up for your Office 365 Developer Site. Then click the check mark to provision the application.

8. Once the application has been successfully added, you will be taken to the Quick Start page for the application. From here, select the **Configure** tab.

9. Scroll down to the **permissions to other applications** section and click the **Add application** button.

10. Click the plus sign in the **Office 365 unified API (preview)** row and then click the check mark at the top right to add it. Then click the check mark at the bottom right to continue.

11. In the **Office 365 unified API (preview)** row, select **Delegated Permissions**, and in the selection list, choose **Read all users' basic profiles**.

12. Click **Save** to save the app's configuration.

### Configure the app to allow the OAuth 2.0 implicit grant flow

In order to get an access token for Office 365 API requests, the application will use the OAuth implicit grant flow. You need to update the application's manifest to allow the OAuth implicit grant flow because it is not allowed by default. 

1. Select the **Configure** tab of the application's entry in the Azure Management Portal. 

2. Using the **Manage Manifest** button in the drawer, download the manifest file for the application and save it to the computer.

3. Open the manifest file with a text editor. Search for the *oauth2AllowImplicitFlow* property. By default it is set to *false*; change it to *true* and save the file.

4. Using the **Manage Manifest** button, upload the updated manifest file.

<a name="run-the-sample"/>
## Run the app

First, open **app.js** and fill in your tenant information and Azure application client ID in the *tenant* and *cliendId* variables, respectively. 

Next, you'll install the necessary dependencies and run the sample via the command line. Begin by opening a command prompt and navigating to your local repository's root folder. Once there, follow the steps below.

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
