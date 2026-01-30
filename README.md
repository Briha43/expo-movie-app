🔐 API Key Setup

This app uses the OMDb (IMDb) API to fetch movie data

You must create your own API key to run the project

Steps:

Go to https://www.omdbapi.com/

Click API Key → choose FREE

Enter your email and get the API key

Add API key to project:

Create a .env file in the project root

Add this line:

EXPO_PUBLIC_OMDB_API_KEY=your_api_key_here


Replace your_api_key_here with your actual API key

Notes:

.env is ignored by GitHub (already in .gitignore)
Expo requires env variables to start with EXPO_PUBLIC_
Restart Expo after adding .env:
npx expo start -c
