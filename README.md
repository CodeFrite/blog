# Blog @codefrite

I always wanted to talk about my everyday tech projects, music, write a few words in japanese, share my thoughts on the latest tech trends, and more. Like many of us, I have been wandering in the tutorial rabbit hole, learning a bit about various subjects like AI, emulator programming, lexer/tokenizer/compiler programming, blockchain development, finding a clever way to solve a programming problem, and so on ... I have always tried to use these newly acquired skills and knowledges in my everyday job. Along the way, I learned a lot and also forgot the details.

I finally reached a point where I think that I've learned enough a various subjects to start building things with these puzzle pieces. That's why I am gonna take the time needed to write about my projects and share the technical details with you hoping that these journey will feel less lonely and hopefully informative to you.

# Requirements

In order to get things done, I'll begin small with basic needs and refine them as I go. I'll try to keep in mind that the initial purpose of this blog is to present myself, present small technical findings and talk about my current projects in a blog format, so mainly with code, text and images. Here is the core list of features I'll be needing:

## Must Have

- A blog that allows to quickly add posts with minimal formatting: no DB for storing the posts, no content delivery network connection for media content but simple links to Youtube videos, no user authentication and personnalized experience, ...
- Hosted on github pages: therefore, no server side processing, no backend, ...
- A simple way to write posts
- A simple way to share code snippets
- A visual way to present my projects and redirect to their respective github repositories and live demos
- Fast loading using server side pre-rendering
- Possibility to see code in action either by linking to a codepen or when possible by embedding the code directly in the post
- Responsive design for mobile and desktop navigation
- SVG homemade animations for a more vivid experience and to have fun
- Document the process in blog posts that I'll integrate later in the blog

## Nice to Have

- A timeline component to summarize my curriculum and projects I've worked on
- A way to regroup posts using tags like `coding`, `testing`, `gameboy emulator`, `blockchain`, `music`, `japanese`, ...

# Tech stack

- Next.js for server side pre-rendering, routing and code splitting
- Markdown for writing posts
- MDX for rendering markdown within React components
- Plain CSS for styling and responsive design
- Github pages for hosting
- Storybook for React components unit testing and parameterization

# Development Approach

I am excited to start writing blog posts. Therefore, when it comes to the development approach, I'll be following a straight forward path making sure that all the required pieces are correctly set up and working together. The critical path I'll be following is:

- [Step 1: Project setup and hosting on GitHub Pages](docs/Step%201/Project%20setup%20and%20hosting%20on%20GitHub%20Pages.md)
- Step 2: Rendering posts with Markdown and MDX integration logic
- Step 3: Listing posts and navigating to a post
- Step 4: Blog wireframes (layout), responsive design and branding
- Step 5: Code snippets sharing
- Step 6: My projects components
- Step 7: About Me page
- Step 8: Landing page composition and blog routing
