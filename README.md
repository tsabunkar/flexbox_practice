How to conrtol the layouts/Responsiveness of our Components without using boostrap (bcoz using bootstap and Angular material is not acceptable, Since bootstrap is library used to provide custom styling, which 
has already been achieved using ANgular Material so it is not sensable to use to bootstrap library [which is such a huge libr, just for Responsiveness or layout] ) --use-->
[[ Flexbox ]]

(bcoz Grid is not a part of angular material, So use0 flex-layout)

Git link:
https://github.com/angular/flex-layout

Flex documentation :
https://github.com/angular/flex-layout/wiki/API-Documentation

Angular Flex-Layout :
->Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery
->Flex-layout is a package which uses flexbox-css behind the scene, This allow us developer to precision
  our components layout using directives.
-> This directives can find 
     Documentation > Static API (https://github.com/ angular/flex-layout/wiki/Declarative-API-Overview)
     Documentation > Responsive API (https://github.com/angular/flex-layout/wiki/Responsive-API)
-> Static API :
The Angular Layout API is an intuitive list of HTML directives (aka attributes) that can be used on HTML containers and elements. Instead of using traditional CSS stylesheets, developers will define their layouts declaratively directly in the HTML.

*> API for DOM containers:  (parent Component which act as container)
fxLayout - (It is added to container element, Which tells how the child elements should be positined )
            fxLayout can have values like :   row | column | row-reverse | column-reverse
            If fxLayout is row, Which simply means all child compo is in row
fxLayoutAlign - 
          main-axis: start | center | end | space-around | space-between | space-evenly
          cross-axis: start | center | end | stretch | space-between | space-around | baseline
          
*> API for DOM elements: (All child Component which is present inside the parent container)
fxFlex - "" | px | % | vw | vh | <grow> <shrink> <basis> 
fxFlexOrder - int


===========================================================================================================
Useful Resources To Learn more about flex:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
