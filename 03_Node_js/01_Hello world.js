// console.log("Hello World!");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Important</title>
  </head>
  <body>
      <!-- Heading  -->
      <h1 title="Para_Heading1" style="color: red;">This is Important Heading.</h1> 
      
      <!-- Paragraph -->
      <p title="Paragraph1" style="color: greenyellow;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odit maiores quasi eos voluptates a eveniet sapiente magni architecto, consectetur quas suscipit placeat consequuntur exercitationem.</p> 
      
      <!-- Horizontal Line -->
      <hr> 
      <h2 title="Link_Heading2" style="color: indianred;">This is Link Heading.</h2>
      
      <!-- Anchor Tag (Link Tag) -->
      <a title="Movie_Site" style="color:blue" href="https:moviesverse.me" target="_blank"><em>Go To Movie Site...</em></a> 
      
      <!-- New Line -->
      <br>
      <hr>
      <p title="Paragraph2"><b>This image is all about facial recognition system</b>.<br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in nobis cum voluptatum architecto minus nemo sed, aliquid ipsa doloribus reiciendis, distinctio voluptas officiis quod velit quas asperiores aspernatur beatae aut dignissimos assumenda facere. Earum eum, facere possimus omnis consequuntur velit, est, tempora quia veritatis dolorum sed. Ullam doloribus nostrum, ratione quae hic a accusantium sunt? Amet suscipit a hic quas, aspernatur voluptates accusamus ex ut officia, at itaque, soluta voluptate. Dolorum aut, numquam. Delectus quo unde cumque, tempora sapiente necessitatibus cupiditate illo saepe, voluptate soluta earum pariatur nesciunt, <i>architecto consectetur assumenda consequuntur deserunt eos excepturi? Enim, molestiae! Saepe, voluptate.</i></p>
      <h3 title="Image_Heading3" style="color:yellowgreen;">This is Image Heading.</h3>
  
      <!-- Image Tag -->
      <img title="Image" src="facial-recognition.png" alt="facial recognition" width="250" height="300">
      <h4 title="Greeting_Heading4" style="color: darkgoldenrod; font-size: 30px;" >THANK YOU !</h4>
      <hr>
      <div><iframe width="100%" height="600" src="https://www.youtube.com/embed/EZCc_4abdcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <hr>
      <p style="color: darkgoldenrod; font-size: 20px">For Download the video go to below link : -</p>
      <a style="color: blue;" href="https://yt1s.com" target="_blank">Download Video Here...</a>
      <p style="color: darkgoldenrod; font-size: 20px">Paste this:- <strong>https://youtu.be/EZCc_4abdcE</strong> </p>
      
  
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});