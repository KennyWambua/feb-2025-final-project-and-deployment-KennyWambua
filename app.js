// Blog post data
const blogPosts = {
    1: {
        title: "Getting Started with JavaScript",
        date: "March 15, 2025",
        content: `
            <h2>Introduction to JavaScript</h2>
            <p>JavaScript is a versatile programming language that powers the interactive elements of the web. In this comprehensive guide, we'll explore the fundamentals of JavaScript and how it can be used to create dynamic web applications.</p>

            <h2>Why Learn JavaScript?</h2>
            <p>JavaScript is essential for modern web development. It allows you to:</p>
            <ul>
                <li>Create interactive user interfaces</li>
                <li>Handle user input and events</li>
                <li>Manipulate the DOM (Document Object Model)</li>
                <li>Make asynchronous requests to servers</li>
                <li>Build full-stack applications</li>
            </ul>

            <h2>Basic Syntax and Concepts</h2>
            <p>Let's start with some basic JavaScript concepts:</p>
            <pre><code>// Variables
let name = "John";
const age = 25;

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow functions
const greet = (name) => "Hello, " + name + "!";

// Objects
const person = {
    name: "John",
    age: 25,
    greet() {
        return "Hello, I'm " + this.name;
    }
};</code></pre>

            <h2>DOM Manipulation</h2>
            <p>JavaScript allows you to interact with HTML elements:</p>
            <pre><code>// Select an element
const element = document.querySelector('.my-class');

// Change content
element.textContent = 'New content';

// Add event listener
element.addEventListener('click', () => {
    console.log('Element clicked!');
});</code></pre>

            <h2>Next Steps</h2>
            <p>To continue your JavaScript journey, consider exploring:</p>
            <ul>
                <li>ES6+ features and modern JavaScript</li>
                <li>Asynchronous programming with Promises and async/await</li>
                <li>Working with APIs and JSON data</li>
                <li>Popular JavaScript frameworks like React, Vue, or Angular</li>
            </ul>
        `,
        tags: ["JavaScript", "Web Development", "Programming", "Beginner"]
    },
    2: {
        title: "Introduction to CSS Flexbox",
        date: "March 10, 2025",
        content: `
            <h2>Understanding Flexbox</h2>
            <p>CSS Flexbox is a powerful layout model that makes it easy to design flexible responsive layouts without using float or positioning. Let's dive into how to use Flexbox effectively in your web projects.</p>

            <h2>Basic Flexbox Concepts</h2>
            <p>Flexbox is based on two main concepts:</p>
            <ul>
                <li>Flex Container: The parent element that holds flex items</li>
                <li>Flex Items: The children elements that are laid out using flexbox</li>
            </ul>

            <h2>Creating a Flex Container</h2>
            <pre><code>.container {
    display: flex;
    /* or */
    display: inline-flex;
}</code></pre>

            <h2>Flex Container Properties</h2>
            <p>Key properties for controlling flex container behavior:</p>
            <pre><code>.container {
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content: flex-start | flex-end | center | space-between | space-around;
    align-items: stretch | flex-start | flex-end | center | baseline;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}</code></pre>

            <h2>Flex Item Properties</h2>
            <p>Properties for controlling individual flex items:</p>
            <pre><code>.item {
    flex-grow: 0; /* default */
    flex-shrink: 1; /* default */
    flex-basis: auto; /* default */
    /* or use the shorthand */
    flex: 0 1 auto;
}</code></pre>

            <h2>Practical Example</h2>
            <p>Here's a common use case - creating a responsive navigation bar:</p>
            <pre><code>.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.nav-links {
    display: flex;
    gap: 1rem;
}</code></pre>

            <h2>Best Practices</h2>
            <ul>
                <li>Use flexbox for one-dimensional layouts (row or column)</li>
                <li>Consider using CSS Grid for two-dimensional layouts</li>
                <li>Test your layouts across different screen sizes</li>
                <li>Use flex-wrap to handle overflow content</li>
            </ul>
        `,
        tags: ["CSS", "Flexbox", "Web Design", "Layout"]
    },
    3: {
        title: "Understanding HTML5 Semantic Elements",
        date: "March 5, 2025",
        content: `
            <h2>The Importance of Semantic HTML</h2>
            <p>Semantic HTML elements provide meaning to your web content, making it more accessible, maintainable, and SEO-friendly. Let's explore how to use these elements effectively in your web projects.</p>

            <h2>Key Semantic Elements</h2>
            <p>HTML5 introduced several new semantic elements:</p>
            <ul>
                <li>&lt;header&gt; - Represents introductory content</li>
                <li>&lt;nav&gt; - Contains navigation links</li>
                <li>&lt;main&gt; - Contains the main content of the page</li>
                <li>&lt;article&gt; - Represents self-contained content</li>
                <li>&lt;section&gt; - Represents a thematic grouping of content</li>
                <li>&lt;aside&gt; - Represents content that's tangentially related</li>
                <li>&lt;footer&gt; - Represents the footer of a document or section</li>
            </ul>

            <h2>Example Structure</h2>
            <pre><code>&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;article&gt;
            &lt;h1&gt;Article Title&lt;/h1&gt;
            &lt;section&gt;
                &lt;h2&gt;Section Title&lt;/h2&gt;
                &lt;p&gt;Content goes here...&lt;/p&gt;
            &lt;/section&gt;
        &lt;/article&gt;

        &lt;aside&gt;
            &lt;h3&gt;Related Content&lt;/h3&gt;
            &lt;ul&gt;
                &lt;li&gt;Related item 1&lt;/li&gt;
                &lt;li&gt;Related item 2&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/aside&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;Copyright 2025&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;</code></pre>

            <h2>Benefits of Semantic HTML</h2>
            <ul>
                <li>Improved accessibility for screen readers</li>
                <li>Better SEO rankings</li>
                <li>Cleaner, more maintainable code</li>
                <li>Easier to understand document structure</li>
            </ul>

            <h2>Accessibility Considerations</h2>
            <p>When using semantic elements, consider these accessibility tips:</p>
            <ul>
                <li>Use appropriate heading levels (h1-h6)</li>
                <li>Include ARIA labels when necessary</li>
                <li>Ensure proper contrast ratios</li>
                <li>Test with screen readers</li>
            </ul>
        `,
        tags: ["HTML5", "Semantic HTML", "Accessibility", "Web Development"]
    }
};

// Blog post handling
document.addEventListener('DOMContentLoaded', function() {
    // Handle post detail page
    const postId = new URLSearchParams(window.location.search).get('id');
    if (postId && blogPosts[postId]) {
        displayPost(postId);
    }

    // Handle post form
    const postForm = document.getElementById('post-form');
    if (postForm) {
        postForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('post-title').value;
            const content = document.getElementById('post-content').value;
            addPost(title, content);
            postForm.reset();
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            handleContactSubmit(formData);
            contactForm.reset();
        });
    }
});

function displayPost(postId) {
    const post = blogPosts[postId];
    if (!post) return;

    document.title = `${post.title} - Apex Blog`;
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-content').innerHTML = post.content;

    // Add tags
    const tagsContainer = document.getElementById('post-tags');
    post.tags.forEach(tag => {
        const tagElement = document.createElement('a');
        tagElement.href = '#';
        tagElement.className = 'post-tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
}

function addPost(title, content) {
    const postsGrid = document.querySelector('.posts-grid');
    if (!postsGrid) return;

    const postCard = document.createElement('article');
    postCard.className = 'post-card';
    
    // Generate a unique ID for the post
    const postId = Date.now();
    
    postCard.innerHTML = `
        <h3>${title}</h3>
        <p>${content.substring(0, 150)}${content.length > 150 ? '...' : ''}</p>
        <a href="pages/post.html?id=${postId}" class="read-more">Read More</a>
    `;
    
    // Add the new post at the beginning of the grid
    postsGrid.insertBefore(postCard, postsGrid.firstChild);
    
    // Show success message
    showNotification('Post published successfully!');
}

function handleContactSubmit(formData) {
    // Here you would typically send the form data to a server
    console.log('Contact form submitted:', formData);
    showNotification('Message sent successfully! We\'ll get back to you soon.');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Add styles for the notification
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#2ecc71';
    notification.style.color = 'white';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    
    // Remove the notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 