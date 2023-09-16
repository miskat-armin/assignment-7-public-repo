# Course Roster
## Project Features
   +  ### Course selection
   The project includes a feature where it allows users to select courses they wanna purchase. After selecting a course it's credit and price is added to total price and credit pool. Upon trying to select same course twice the user will be prompted with a warning.

   +  ### Credit & Price Calculation
   The project calculates the total credit hours and price as users select courses. It keeps track of total credit and total price so that user do not exceed over the provided credit limit and their budget.

   +  ### Toasting for notifications
   The project uses toast to show user important messages that does not hinder with user interactivity. Toast provides instant feedback when user perform an action like selecting a course that's already in their cart list. Toasts are displayed at the top-center of the screen and automatically close after a short duration, ensuring a smooth and non-intrusive UI experience.
   
## State Management
+ totalCredit: Keep track of the total credit of currently selected courses. Each time a new course is selected, it's credit is added to the existing totalCredit state. 
`setTotalCredit(totalCredit + selectedItem.totalCredit)`

+ totalPrice: Keep track of the total Price of currently selected courses. Each time a new course is selected, it's price is added to the existing totalPrice state.
`setTotalPrice(totalPrice + selectedItem.totalPrice)`
 
+ courseData: It's the list of data we got from server aka JSON object. after fetching the json object, we parse it and set it to courseData. we then map through it to render our course list. 

+ selectedItem: Last selected item, used for checking whether credit limit is exceeded or not. When user clicks the select button on a card, Info of that card are set to this state.

+ selectedCourses: List of all selected courses. Each time select button is clicked we check whether totalCredit exceeded the limit or not, if it doesn't then we append the existing selectedCourse state with the selectedItem(Last selected item).
