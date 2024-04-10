const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();
const port = 3000;

// Use bodyParser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes for different pages
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <!-- Include Bootstrap CSS -->
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    body {
                        height:80%;
                        margin:auto;
                        text-align: center;
                        font-family: 'Arial', sans-serif;
                        padding: 15px;
                        background-color: lightblue;
                        padding: 15px 25px;
                        margin: 10px 0;
                        box-sizing: border-box;
                        border-radius: 4px;
                    }
                    h1 {
                        color: brown;
                        text-align: center;
                        font-family: Georgia, 'Times New Roman', Times, serif;
                        font-size: 20px;
                    }
                    p {
                        color: black;
                        font-size: 17px;
                        line-height: 2.0;
                        margin-bottom: 20px;
                    }
                    img {
                        display: block;
                        margin: 0 auto;
                        max-width: 100%;
                        height: auto;
                        margin-bottom: 20px;
                    }
                    
                    nav li {
                        display: inline;
                        margin-right: 25px;
                    }
                    
                    .navbar {
                        padding: 20px 25px;
                    }
                    
                    .nav-link {
                        font-size: 18px;
                        font-weight: bold;
                        padding: 10px;
                        font-family: Georgia, 'Times New Roman', Times, serif;
                        font-style: italic;
                        text-decoration: underline;
                    
                    }
                    
                    .navbar-nav li {
                        padding-right: 20px;
                    }
                    h3 {
                        color: black;
                        font-family: Georgia, 'Times New Roman', Times, serif;
                        font-size: 19px;
                    }
                </style>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Learning App</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mathpractice">Math Practice</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <br/>
                <div class="container">
                    <h1>Welcome to our online platform for kids' learning! Our app is designed to make learning fun and engaging for children of all ages. With a wide range of interactive lessons, games, and activities, we strive to provide a holistic learning experience that caters to various learning styles.</h1>
                    <br/>
                    <p>At our platform, children can explore subjects such as math, science, language arts, coding, and more, all in a safe and supportive environment. Our carefully curated content is aligned with educational standards and designed by experts to ensure that kids receive quality instruction while having fun.</p>
                    <p>Whether your child is just starting their learning journey or looking to expand their knowledge, our app offers something for everyone. From interactive quizzes to creative projects, there's always something new to discover and learn.</p>
                   <h3>Join us today and unlock a world of knowledge and creativity for your child. Together, let's inspire a love for learning that will last a lifetime.</h3>
                    <br/>
                    <br/>
                   <h2>Subscribe to Our Newsletter</h2>
                   <form action="/subscribe" method="post">
                       <div class="form-group">
                           <label for="email">Email address:</label>
                           <input type="email" class="form-control" id="email" name="email" required>
                       </div>
                       <button type="submit" class="btn btn-primary">Subscribe</button>
                   </form>

                   </div>
            </body>
        </html>
    `);
});
app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    // Here you can add code to save the email to your database or send it to your newsletter service
    console.log('New subscriber email:', email);
    res.send('Thank you for subscribing!');
});

app.get('/about', (req, res) => {
    res.send(`
        <html>
        <head>
        <!-- Include Bootstrap CSS -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body {
                height:80%;
                margin:auto;
                text-align: center;
                font-family: 'Arial', sans-serif;
                padding: 15px;
                background-color: lightblue;
                padding: 15px 25px;
                margin: 10px 0;
                box-sizing: border-box;
                border-radius: 4px;
            }
            h1 {
                color: brown;
                text-align: center;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: 20px;
            }
            p {
                color: black;
                font-size: 17px;
                line-height: 2.0;
                margin-bottom: 20px;
            }
            img {
                display: block;
                margin: 0 auto;
                max-width: 100%;
                height: auto;
                margin-bottom: 20px;
            }
            
            nav li {
                display: inline;
                margin-right: 25px;
            }
            
            .navbar {
                padding: 20px 25px;
            }
            
            .nav-link {
                font-size: 18px;
                font-weight: bold;
                padding: 10px;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-style: italic;
                text-decoration: underline;
            
            }
            
            .navbar-nav li {
                padding-right: 20px;
            }
            h3 {
                color: black;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: 19px;
            }
        </style>
    </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Learning App</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mathpractice">Math Practice</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="container">
                <h1>About Us</h1>
                <p>Welcome to our Learning App for Kids! We are passionate about providing fun and interactive learning experiences for children.</p>
                <p>Our mission is to make learning enjoyable and accessible to every child, helping them develop important skills while having fun.</p>
                <p>Feel free to explore our website and discover the exciting learning opportunities we offer!</p>
                
                <h2>Contact Us</h2>
                <form action="/contact" method="post">
                    <div class="form-group">
                        <label for="name">Your Name:</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Your Email:</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </body>
    </html>
`);
});

// Contact form submission route
app.post('/contact', (req, res) => {
const name = req.body.name;
const email = req.body.email;
const message = req.body.message;

// Here you can add code to handle the contact form submission, such as sending an email to the organization
// For simplicity, we'll just log the form data to the console
console.log('New message from:', name, email);
console.log('Message:', message);

// Respond with a thank you message
res.send('Thank you for your message! We will get back to you soon.');
});


app.get('/mathpractice', (req, res) => {
    const images = [
        '/kids.png',
        '/mathpractice/image2.jpg',
        '/mathpractice/image3.jpg'
        // Add more image URLs as needed
    ];

    // Generate HTML to display images
    const galleryHTML = images.map(image => `<img src="${image}" alt="Gallery Image" class="img-fluid">`).join('');

    // Send the HTML response
    res.send(`
        <html>
        <head>
        <!-- Include Bootstrap CSS -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body {
                height:80%;
                margin:auto;
                text-align: center;
                font-family: 'Arial', sans-serif;
                padding: 15px;
                background-color: lightblue;
                padding: 15px 25px;
                margin: 10px 0;
                box-sizing: border-box;
                border-radius: 4px;
            }
            h1 {
                color: brown;
                text-align: center;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: 20px;
            }
            p {
                color: black;
                font-size: 17px;
                line-height: 2.0;
                margin-bottom: 20px;
            }
            img {
                display: block;
                margin: 0 auto;
                max-width: 100%;
                height: auto;
                margin-bottom: 20px;
            }
            
            nav li {
                display: inline;
                margin-right: 25px;
            }
            
            .navbar {
                padding: 20px 25px;
            }
            
            .nav-link {
                font-size: 18px;
                font-weight: bold;
                padding: 10px;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-style: italic;
                text-decoration: underline;
            
            }
            
            .navbar-nav li {
                padding-right: 20px;
            }
            h3 {
                color: black;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: 19px;
            }

            .check-answers-button {
                padding: 1px 6px;
                border: 1px outset buttonborder;
                border-radius: 3px;
                color: buttontext;
                background-color: buttonface;
            }
        </style>
    </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Learning App</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mathpractice">Math Practice</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <div class="gallery-container">
                    <div class="gallery">
                        ${galleryHTML}
                    </div>
                </div>
                <div class="math-practice">
                    <h1>Math Practice</h1>
                    <hr>
                    <p>Type your answer for each math sum below. Right click 'Check answers' and select 'Open link in new tab' to open a calculator when finished!</p>
                    <form id="math-practice-form">
                        <div class="sum">
                            <p>Q1) 14 + 7 =</p>
                            <div class="answer">
                                <label>
                                    <input type="text" name="q1">
                                </label>
                            </div>
                        </div>
                        <div class="sum">
                            <p>Q2) 8 - 3 =</p>
                            <div class="answers">
                                <label>
                                    <input type="text" name="q2">
                                </label>
                            </div>
                        </div>
                        <div class="sum">
                            <p>Q3) 4 x 3 =</p>
                            <div class="answers">
                                <label>
                                    <input type="text" name="q3">
                                </label>
                            </div>
                        </div>
                        <div class="sum">
                            <p>Q4) 30 / 6 =</p>
                            <div class="answers">
                                <label>
                                    <input type="text" name="q4">
                                </label>
                            </div>
                        </div>
                        <div class="sum">
                            <p>Q5) 4 x __ = 12</p>
                            <div class="answers">
                                <label>
                                    <input type="text" name="q5">
                                </label>
                            </div>
                        </div>
                        </br>
                        <a href="https://www.google.com/search?q=calculator&rlz=1C1ONGR_en-GBIE978IE978&oq=calcy&gs_lcrp=EgZjaHJvbWUqDwgBEAAYChiDARixAxiABDIJCAAQRRg5GIAEMg8IARAAGAoYgwEYsQMYgAQyDwgCEAAYChiDARixAxiABDIPCAMQABgKGIMBGLEDGIAEMg8IBBAAGAoYgwEYsQMYgAQyDAgFEAAYChixAxiABDIJCAYQABgKGIAEMgwIBxAAGAoYsQMYgAQyDwgIEAAYChiDARixAxiABDIPCAkQABgKGIMBGLEDGIAE0gEIMzc1NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" class="check-answers-button">Check answers</a>
                    </form>
                </div
            </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
