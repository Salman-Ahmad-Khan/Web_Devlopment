###HTML & CSS
#Code repository for HTML & CSS 

HTML is the language in which most websites are written. HTML is used to create pages and make them functional.

Hypertext means that the document contains links that allow the reader to jump to other places in the document or to another document altogether. The latest version is known as HTML5.

A Markup Language is a way that computers speak to each other to control how text is processed and presented. To do this HTML uses two things: tags and attribute.

##What are Tags and Attributes?
Tags and attributes are the basis of HTML.

They work together but perform different functions.

##What Are HTML Tags?
Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets. An example of a tag is: <h1>.

Most tags must be opened <h1> and closed </h1> in order to function.

What are HTML Attributes?
Attributes contain additional pieces of information. Attributes take the form of an opening tag and additional info is placed inside.

An example of an attribute is:

<img src="" alt="">

In this instance, the image source (src) and the alt text (alt) are attributes of the <img> tag.

##Golden Rules To Remember
The vast majority of tags must be opened (<tag>) and closed (</tag>) with the element information such as a title or text resting between the tags.
When using multiple tags, the tags must be closed in the order in which they were opened. For example:

<strong><em>This is really important!</em></strong>


###Basic Construction of an HTML Page
These tags should be placed underneath each other at the top of every HTML page that you create.

<!DOCTYPE html> — This tag specifies the language you will write on the page. In this case, the language is HTML 5.

<html> — This tag signals that from here on we are going to write in HTML code.

<head> — This is where all the metadata for the page goes — stuff mostly meant for search engines and other computer programs.

<body> — This is where the content of the page goes.

###Further Tags
Inside the <head> tag, there is one tag that is always included: <title>, but there are others that are just as important:

<title>
This is where we insert the page name as it will appear at the top of the browser window or tab.
<meta>
This is where information about the document is stored: character encoding, name (page context), description.


###Let’s try out a basic <head> section:

<head>
<title>My First Webpage</title>
<meta charset="UTF-8">
<meta name="description" content="This field contains information about your page. It is usually around two sentences long.">.
<meta name="author" content="Conor Sheils">
</header>

#How to Add HTML Headings To Your Web Page
In HTML, headings are written in the following elements:

<h1>
<h2>
<h3>
<h4>
<h5>
<h6>