export const projects = [
    {
        id: 1,
        name: "Furniture Ecommerce Application",
        description: "This ReactJs ecommerce application displays a selection of products fetched from an Express back end. Products can be fetched by id or category and costumers can add items to their cart. Checkout is done using stripe and the charge post request is handled on the back end",
        gitUrl: "https://github.com/BVolt/furn-buddy-frontEnd",
        hostedUrl:"https://demo-furniture-buddy.netlify.app",
        gitApi: "https://github.com/BVolt/furn-buddy-backend"
    },
    {
        id: 2,
        name: "Watch List",
        description: "Watch List allows user to create a watch list from movies that they browse through by category or searching. This watch list is then stored associated with the users login credentials so that it may be accessed later. Data storage as well as authentication is handled using firebase. The movie data is fetched from an external API known as The Movie Database. Application was built in ReactJS. ",
        gitUrl: "https://github.com/BVolt/watch-list",
        hostedUrl:"https://watch-list-fb3a1.web.app/",

    },
    {
        id: 3,
        name: "Activities Menu and API",
        description: "This Activities Menu presents prices, descriptions, and images of activities for a would be Island resort. The front end menu is built with React. All of the data associated with each activity is served up by the back end application built with Express.",
        gitUrl: "https://github.com/BVolt/activities-menu",
        hostedUrl:"https://activities-menu.netlify.app",
        gitApi: "https://github.com/BVolt/activities-api"
    },
    {
        id: 4,
        name: "Tetris",
        description: "This project is modeled after the classic tetris and is built using vanilla JavaScript, HTML, and CSS. CSS grid organizes all squares into rows and columns. In JavaScript, a two dimensional array holds the references to each DOM node that makes up the grid. From accessing the 2D array, all game functions can be performed",
        gitUrl: "https://github.com/BVolt/tetris-js",
        hostedUrl:"https://tetris-js-johnson.netlify.app/",
    },
    {
        id: 5,
        name: "Training Client Table",
        description: "Training Client Table is an application that stores information concering fitness, training clients. The table allows for user input with validation parameters and then the user may open an extended details page to see metrics such as BMR, BMI, and Calorie recomendations for each client. This application was built with vanilla Javascript, HTML, and CSS.",
        gitUrl: "https://github.com/BVolt/client-table",
        hostedUrl:"https://training-client-data.netlify.app",
    }
]
