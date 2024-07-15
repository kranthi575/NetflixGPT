
#NetflixGPT

-create ReactApp
-Configured Tailwindcss
-Added Header
-Routing of App
-Login Form
-SignUp form
-Form Validation
-useRef Hook
-Firebase setup
-Deploying our app to production
-create signup user account
-Implement signIn user Api
-Created Redux store with userSlice

#Bug1:
    User is able to accessing the private data without signing into the application
 #Fix:
 ----
        Identity one common componenet which is part of the all private pages and perform the auth validation in that component if user is not authorized redirect into the login page
        ~in our case <Header/> is the commom component

#Bug2 Fix: unsubscribing the changeevent when component unmounts

#Bestpractices: use one file to store all the constants variables like static URL's.


==========================

-creating custom hook to fetch the now playing movie data
-creating new redux movieSlice to add the now playing movie data.



