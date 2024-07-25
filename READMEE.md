
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

-create custom hook to fetch the now playing movie data
-create new redux movieSlice to add the now playing movie data.


=====================
creating browserhome page with 
        -Header
        -main controller
            -video title
            -video background
        -second controller
            -movies *n in row with seprated from the category
===================
fixed the app till Header 

---now fixing the main controller
//able to readout the nowplaying movie data from the main controller no errors as of now

//now error is fixed with early return in main controller
creating browserhome page with 
        -Header
        -main controller
            -video title

            ### no issues till here ###

======================

second controller
----------------
-fetching popular movies data
-created secondCtrl redux slice to store popular movies
-UI like netflix movies scrolling implemented.
-setting youtube autoplay
-added popular movies in secondary controller
-added top rated movies and upcoming movies

------------
-fixing responsive moviecards
-passing data over the Link

-I am using <Link/> to pass data from the component and passing it through URL
--using useLocation() i am able to read the data.

The useLocation hook from React Router is helpful in accessing the location object, which contains information about the current URL and its state. When you pass state to a component using Link or useNavigate, you can retrieve this state in the destination component using useLocation.



