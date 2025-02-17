import { notFound } from "next/navigation"

const blogPosts = [
  {
    slug: "intro-to-web-accessibility",
    title: "Introduction to Web Accessibility",
    content: `
      <h1>Introduction to Web Accessibility</h1>
      <p>Web accessibility is the practice of making websites usable by as many people as possible, including those with disabilities. It's not just about compliance with laws and regulations; it's about creating a better user experience for everyone.</p>
      <h2>Why is Web Accessibility Important?</h2>
      <p>Web accessibility is crucial because:</p>
      <ul>
        <li>It ensures equal access to information and functionality for all users</li>
        <li>It improves usability for everyone, not just those with disabilities</li>
        <li>It can lead to better search engine optimization (SEO)</li>
        <li>It helps companies avoid legal issues related to discrimination</li>
      </ul>
      <h2>Key Principles of Web Accessibility</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) define four main principles:</p>
      <ol>
        <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive.</li>
        <li><strong>Operable:</strong> User interface components and navigation must be operable.</li>
        <li><strong>Understandable:</strong> Information and the operation of user interface must be understandable.</li>
        <li><strong>Robust:</strong> Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
      </ol>
      <h2>Getting Started with Web Accessibility</h2>
      <p>To start making your websites more accessible:</p>
      <ol>
        <li>Learn about WCAG guidelines and accessibility standards</li>
        <li>Use semantic HTML to provide structure and meaning to your content</li>
        <li>Ensure proper color contrast for text and background</li>
        <li>Provide alternative text for images</li>
        <li>Make your site keyboard accessible</li>
        <li>Use ARIA attributes when necessary to enhance accessibility</li>
      </ol>
      <p>Remember, web accessibility is an ongoing process. Regularly test your websites with various tools and real users to ensure they remain accessible as you add new content and features.</p>
    `,
  },
  {
    slug: "aria-attributes-explained",
    title: "ARIA Attributes Explained",
    content: `
      <h1>ARIA Attributes Explained</h1>
      <p>ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content and applications more accessible to people with disabilities. These attributes supplement HTML so that commonly used interactions and widgets can be passed to assistive technologies when there's not otherwise a mechanism.</p>
      <h2>Why Use ARIA?</h2>
      <p>ARIA is useful in situations where HTML falls short in conveying information to assistive technologies. It's particularly helpful for dynamic content and advanced user interface controls developed with JavaScript and AJAX.</p>
      <h2>Key ARIA Concepts</h2>
      <h3>1. Roles</h3>
      <p>ARIA roles define what an element is or does. For example:</p>
      <pre><code>&lt;div role="button"&gt;Click me&lt;/div&gt;</code></pre>
      <p>This tells assistive technologies that the div should be treated as a button.</p>
      <h3>2. Properties</h3>
      <p>ARIA properties express characteristics of elements. For example:</p>
      <pre><code>&lt;input type="text" aria-required="true"&gt;</code></pre>
      <p>This indicates that the input field is required.</p>
      <h3>3. States</h3>
      <p>ARIA states describe the current condition of an element. For example:</p>
      <pre><code>&lt;button aria-pressed="false"&gt;Toggle&lt;/button&gt;</code></pre>
      <p>This indicates whether a toggle button is currently pressed or not.</p>
      <h2>Common ARIA Attributes</h2>
      <ul>
        <li><strong>aria-label:</strong> Provides a label for an object</li>
        <li><strong>aria-labelledby:</strong> Identifies the element(s) that labels the current element</li>
        <li><strong>aria-describedby:</strong> Identifies the element(s) that describes the object</li>
        <li><strong>aria-hidden:</strong> Indicates whether the element is exposed to an accessibility API</li>
        <li><strong>aria-expanded:</strong> Indicates whether a control is expanded or collapsed</li>
      </ul>
      <h2>Best Practices for Using ARIA</h2>
      <ol>
        <li>Use native HTML elements and attributes whenever possible</li>
        <li>Don't change native semantics, unless you really have to</li>
        <li>All interactive ARIA controls must be usable with the keyboard</li>
        <li>Don't use role="presentation" or aria-hidden="true" on a visible focusable element</li>
        <li>All interactive elements must have an accessible name</li>
      </ol>
      <p>Remember, no ARIA is better than bad ARIA. Only use these attributes when necessary, and always test with actual assistive technologies to ensure they're working as intended.</p>
    `,
  },
  {
    slug: "creating-accessible-forms",
    title: "Creating Accessible Forms",
    content: `
      <h1>Creating Accessible Forms</h1>
      <p>Forms are a crucial part of many web applications, allowing users to input data, make selections, and interact with the site. However, poorly designed forms can be a significant barrier for users with disabilities. Here's how to create accessible forms:</p>
      <h2>1. Use Proper HTML Structure</h2>
      <p>Start with a semantic HTML structure:</p>
      <pre><code>
&lt;form&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Personal Information&lt;/legend&gt;
    &lt;!-- Form fields go here --&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;
      </code></pre>
      <p>Use &lt;fieldset&gt; to group related fields and &lt;legend&gt; to provide a description for the group.</p>
      <h2>2. Label Your Form Controls</h2>
      <p>Always use &lt;label&gt; elements, properly associated with their inputs:</p>
      <pre><code>
&lt;label for="name"&gt;Name:&lt;/label&gt;
&lt;input type="text" id="name" name="name"&gt;
      </code></pre>
      <h2>3. Provide Clear Instructions</h2>
      <p>Use clear, concise language for labels and instructions. If additional help is needed, use aria-describedby:</p>
      <pre><code>
&lt;label for="password"&gt;Password:&lt;/label&gt;
&lt;input type="password" id="password" name="password" aria-describedby="password-help"&gt;
&lt;p id="password-help"&gt;Password must be at least 8 characters long.&lt;/p&gt;
      </code></pre>
      <h2>4. Use Proper Input Types</h2>
      <p>HTML5 provides several input types that can enhance accessibility and usability:</p>
      <pre><code>
&lt;input type="email"&gt;
&lt;input type="tel"&gt;
&lt;input type="date"&gt;
&lt;input type="number"&gt;
      </code></pre>
      <h2>5. Indicate Required Fields</h2>
      <p>Clearly indicate which fields are required. You can use the required attribute and aria-required:</p>
      <pre><code>
&lt;label for="email"&gt;Email (required):&lt;/label&gt;
&lt;input type="email" id="email" name="email" required aria-required="true"&gt;
      </code></pre>
      <h2>6. Provide Error Messages</h2>
      
<p>When form validation fails, provide clear error messages. Use aria-invalid and aria-describedby to associate error messages with inputs:</p>
<pre><code>
&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input type="email" id="email" name="email" aria-invalid="true" aria-describedby="email-error"&gt;
&lt;p id="email-error" role="alert"&gt;Please enter a valid email address.&lt;/p&gt;
</code></pre>
<h2>7. Make Forms Keyboard Accessible</h2>
<p>Ensure all form controls can be accessed and operated using only a keyboard. This includes custom widgets like date pickers or autocomplete fields.</p>
<h2>8. Use Proper Button Text</h2>
<p>Use descriptive text for buttons. Avoid generic text like "Submit" or "Click Here". Instead, use action-oriented text like "Create Account" or "Search Products".</p>
<h2>9. Group Related Inputs</h2>
<p>Use fieldset and legend to group related inputs, especially for radio buttons and checkboxes:</p>
<pre><code>
&lt;fieldset&gt;
  &lt;legend&gt;Preferred Contact Method:&lt;/legend&gt;
  &lt;input type="radio" id="contact-email" name="contact" value="email"&gt;
  &lt;label for="contact-email"&gt;Email&lt;/label&gt;
  &lt;input type="radio" id="contact-phone" name="contact" value="phone"&gt;
  &lt;label for="contact-phone"&gt;Phone&lt;/label&gt;
&lt;/fieldset&gt;
</code></pre>
<h2>10. Test Your Forms</h2>
<p>Always test your forms with various assistive technologies and keyboard-only navigation to ensure they're truly accessible.</p>
<p>By following these guidelines, you can create forms that are accessible to all users, regardless of their abilities or the devices they use.</p>
    `,
  },
  {
    slug: "importance-of-semantic-html",
    title: "The Importance of Semantic HTML",
    content: `
      <h1>The Importance of Semantic HTML</h1>
      <p>Semantic HTML refers to the use of HTML markup to reinforce the meaning of the content, rather than merely to define its appearance. By using semantic HTML, we provide additional information about the document structure, which can significantly improve accessibility, SEO, and maintainability.</p>
      <h2>Why is Semantic HTML Important?</h2>
      <ol>
        <li><strong>Accessibility:</strong> Screen readers and other assistive technologies rely on semantic HTML to interpret and navigate content effectively.</li>
        <li><strong>SEO:</strong> Search engines use semantic markup to better understand the content and context of web pages.</li>
        <li><strong>Maintainability:</strong> Semantic HTML makes code easier to read and maintain for developers.</li>
        <li><strong>Device Independence:</strong> Properly structured content can be effectively displayed on various devices and platforms.</li>
      </ol>
      <h2>Key Semantic HTML Elements</h2>
      <ul>
        <li><strong>&lt;header&gt;:</strong> Represents introductory content, typically a group of introductory or navigational aids.</li>
        <li><strong>&lt;nav&gt;:</strong> Represents a section of a page that links to other pages or to parts within the page.</li>
        <li><strong>&lt;main&gt;:</strong> Represents the dominant content of the body of a document.</li>
        <li><strong>&lt;article&gt;:</strong> Represents a self-contained composition in a document, page, application, or site.</li>
        <li><strong>&lt;section&gt;:</strong> Represents a standalone section of a document, which doesn't have a more specific semantic element to represent it.</li>
        <li><strong>&lt;aside&gt;:</strong> Represents a portion of a document whose content is only indirectly related to the document's main content.</li>
        <li><strong>&lt;footer&gt;:</strong> Represents a footer for its nearest sectioning content or sectioning root element.</li>
      </ul>
      <h2>Examples of Semantic vs Non-Semantic HTML</h2>
      <h3>Non-Semantic HTML:</h3>
      <pre><code>
&lt;div id="header"&gt;
  &lt;div id="nav"&gt;
    &lt;div class="nav-item"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/div&gt;
    &lt;div class="nav-item"&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div id="main-content"&gt;
  &lt;div class="article"&gt;
    &lt;div class="article-title"&gt;Article Title&lt;/div&gt;
    &lt;div class="article-content"&gt;Article content goes here...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div id="footer"&gt;Copyright 2023&lt;/div&gt;
      </code></pre>
      <h3>Semantic HTML:</h3>
      <pre><code>
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
    &lt;p&gt;Article content goes here...&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;Copyright 2023&lt;/footer&gt;
      </code></pre>
      <h2>Best Practices for Using Semantic HTML</h2>
      <ol>
        <li>Use HTML elements for their intended purpose.</li>
        <li>Avoid using &lt;div&gt; and &lt;span&gt; when a more semantic element is appropriate.</li>
        <li>Use heading tags (&lt;h1&gt; to &lt;h6&gt;) to create a logical document outline.</li>
        <li>Use &lt;button&gt; for clickable actions and &lt;a&gt; for navigation.</li>
        <li>Use &lt;table&gt; only for tabular data, not for layout purposes.</li>
        <li>Use &lt;form&gt;, &lt;label&gt;, and appropriate input types for forms.</li>
        <li>Use &lt;figure&gt; and &lt;figcaption&gt; for images with captions.</li>
      </ol>
      <p>By embracing semantic HTML, we create web content that is more accessible, SEO-friendly, and easier to maintain. It's a fundamental practice in modern web development that benefits both users and developers.</p>
    `,
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <article className="prose lg:prose-xl mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

