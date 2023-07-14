# Streaming Next.js Project README

This repository contains a Next.js project that requires OAuth authentication with Google Cloud. To run the project successfully, please follow the instructions provided below to install the necessary dependencies and create OAuth credentials in Google Cloud.

## Installation

To install the project dependencies, ensure that you have Node.js and npm (Node Package Manager) installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```
   git clone https://github.com/JorgeRojano/streaming_app.git
   ```

2. Navigate to the project directory:

   ```
   cd streaming_app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Google Cloud OAuth Credentials Setup

To authenticate with Google Cloud using OAuth, you need to create credentials in the Google Cloud Console. Follow the steps below to generate the required OAuth credentials:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).

2. Create a new project or select an existing project.

3. Enable the necessary APIs for your project. For example, if you need to use Google Cloud Storage, enable the Google Cloud Storage API.

4. Configure the OAuth consent screen:
   - In the left sidebar, go to "APIs & Services" > "OAuth consent screen".
   - Choose an appropriate user type (Internal or External) and click "Create".
   - Fill in the necessary information such as "Application name" and "Authorized domains".
   - Add any required scopes for the project.
   - Save the changes.

5. Create OAuth credentials:
   - In the left sidebar, go to "APIs & Services" > "Credentials".
   - Click on the "Create credentials" button and select "OAuth client ID".
   - Choose the application type (Web application or Other) depending on your project's needs.
   - Provide the necessary details such as "Name" and "Authorized JavaScript origins".
   - Add the appropriate redirect URIs based on your project requirements.
   - Click "Create" to generate the OAuth credentials.

6. Configure the project to use the credentials:
   - In the project directory, create a new file named `.env.local`.
   - Open the `.env.local` file and add the following content:
     ```
     GOOGLE_CLIENT_ID=<your-client-id>
     GOOGLE_CLIENT_SECRET=<your-client-secret>
     NEXTAUTH_SECRET=<your-secret-key>
     NEXTAUTH_URL="http://localhost:3000"
     ```
     Replace `<your-client-id>` and `<your-client-secret>` with the corresponding values from the OAuth credentials you generated.

     For more details see [Next Auth](https://next-auth.js.org/getting-started/example).

## Running the Project

After completing the installation and OAuth credentials setup steps, you can now run the Next.js project. Use the following command:

```
npm run dev
```

This will start the development server and provide you with a local URL where you can access the running application.

## Additional Configuration

If your project requires additional configuration, such as environment variables or specific Google Cloud services, please refer to the project documentation or contact the project maintainers for further guidance.

---

That's it! You should now have the project dependencies installed and the OAuth credentials for Google Cloud set up. You're ready to start working with your Next.js project! Enjoy coding!