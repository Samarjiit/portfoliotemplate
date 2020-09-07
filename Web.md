# Web Tasks and Questions





## Questions
### Conceptual  

Q. What is the difference between state and props?  (ReactJS)  
A. The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.
Props (short for properties) are a Component’s configuration. Props are how components talk to each other. They are received from above component and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data — callback functions may be passed in as props.  
  
Q. What is the best way in express to render static data to the website? (check if they know about express.static)  
A. Use express.static() and point the static files into it.  

Q. What is create-react-app? (VERY BASIC QUES)  
A. create-react-app is the official CLI (Command Line Interface) for React to create React apps with no build configuration.(can ask about build configurations at this point hehehe)   

Q. How can you host your nodeJS app on AWS?(also ask if they use windows then how to do in windows)
A. AWS comes with free trial for 1 year on basic configuration of virtual machine, one can use ubuntu and setup nodeJS simply. BUT the most important thing to look in their answer is if they know about .pem key that AWS provides (& how to use it <for windows simply use putty>).   

Q. What is the main dependency that is required by bootstrap? (if they got confused u can give hint & tell them it is concerned with animations)  
A. jQuerry (then ask what will happenif we remove it <css properties works but animations like on carousels and similar things do not work>)  
  
Q. Is using CDN (Content Delievery Network) is a good choice?(iska answer aane dena phle)>>>>>uske baad----> WHY???
A. Yes, it can save page loading time---> (ispe 1 more question raise krna HOW???)----> since, CDN are availaible everywhere so, by using them we can store it to browsed caache and later whenever user visits the website again scripts will not download again. (CDN baki dusri sites pr bhi hote hai to waha se download ho gya to humari site pe loading time decrease ho jaega.)

Q. What is server side and client side rendering in React?
A. In client side all the js code is download and all the content in rendered inside the browser itself in the case of Create-react-app .
While in server-side rendering components get converted and pre-rendered in the server and send back pure HTML, CSS pages to user.

Q. What is JSX and why do we use it inside react application?
A. JSX stands for JavaScript XML which is an extension of react and allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

  
### BAsic

Q. What is a pseudo-class? 
A. (jo colon laga k likthe hai wo) It is a CSS technique which sets the style when an element changes its state. E.g. style changes when mouse hover, different styles for visited or unvisited links, etc.  

Q. Name any CSS framework other than bootstrap?
A. Material UI, Semantic UI etc.

Q. How to center a div? 
A. Use margin:auto;

Q. What are CSS selectors? Give some examples?
A. CSS selectors are a way to select different html elements. For example we can use dot-classname for classes, hashtag-id for IDs, TAG_ELEMENT for any html element etc.

Q. What is box-model in CSS?
A. It refers how different HTML elements are laid out. For every html tag first there is content, then comes padding, then border and finally margin.

Q. What is Namespacing in JavaScript?  
A. It is usually not a good practice to use global variables in programming languages including JavaScript. However, you may be forced to use global variables sometimes. So, JavaScript introduces the concept of namespacing which ties down a part of the code and register it with a unique name.  

Q. How can you reduce page loading time?  
A. These are the following ways you can reduce web page loading time: reduce image size, remove unnecessary widgets, HTTP compression, placing CSS at the top and script referencing at the bottom or external files, reduce lookups, minimise redirects and caching.  

Q. What is CORS?  
A. Cross-Origin Resource Sharing (CORS) is a mechanism that enables different resources on a web page to be requested from another domain outside the domain from which the request originated. (ye bhi puch lena how do u bypass it (agar answer a gya to bande ko knowledge hai))  
  
Q. What do u understand by SEO?
A. Search engine optimisation (website goggle k search results me upar dikhni chahiye)  

Q. What are the new form elements introduced in HTML5?  
A (BONUS question hai ye) The new form elements introduced in HTML5 are:

datalist – specifies a list of options for input controls.
keygen – generates an encryption key.
output – defines the result of an expression.  
  
Q. What’s the best way to integrate 5 different stylesheets into a website?  
A. It usually depends on how the site is laid out. However, in most cases combining the stylesheets into single a one is the best approach. You can use Gulp to do so.  

Q. Upar wala ansswer me gulp bola to thik nhi to ask them if they know about gulp and grunt???  
A. Libraries hai ye production build banane ke liye (image compression, css & js minify also html uglify ye sab krti hai)'

Q.  What is the difference between null value and undefined value?  
A. Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value.  

Q. What are the web technologies that you are proficient in?  
A. you must have expert skills in three technologies: HTML5, CSS3 and JavaScript. Apart from that, you should be able to have at least some working knowledge of some of the other technologies like popular frameworks, APIs and database management.  

Q. What are the different types of pop-up boxes available in JavaScript? Explain them.  
A. There are three types of pop-up boxes:

Alert – it just displays a message with an OK button.
Confirm – it pops up a confirmation message window with OK and Cancel button.
Prompt – it pops up a dialog box asking user input followed confirmation buttons.  

Q. What is Scope in JavaScript? Name the different types of Scopes.  
A. The scope defines the accessibility of the functions and variables in an application. There are two types of scopes: local and global.  

Q. What is the difference between ‘==’ and ‘===’ operators?  
A. Though both of them belongs to the comparison operator category, the ‘==’ operator checks the value whereas, the ‘===’ operator checks both the value and the type.  

Q. By which mechanism in JavaScript can you detect the operating system on a client machine?  
A. The operating system on a client system can be known by using the JavaScript property navigator.appVersion.  

Q. Have you used Git for pushing live changes on the website? (What Do you understand by version control (k k upar ek question feeeee))   
A. Git to pata hi hai aur version control wo hai jo git krta hai (having a log of changes so that u can go back to a certain stage of app if something goes wrong...)
