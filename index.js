function showMenProducts(event) {
    const cards = document.querySelectorAll('#women-tshirt, #dress, #women-sweatshirt, #ethnic-wear');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("men-check");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}

function showWomenProducts(event) {
    const cards = document.querySelectorAll('#men-tshirt, #men-shirt, #polo, #red-tshirt, #men-sweatshirt');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("women-check");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}

function showLouisPhilippe(event) {
    const cards = document.querySelectorAll('#women-tshirt, #dress, #ethnic-wear, #men-shirt, #red-tshirt, #men-sweatshirt');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("lp");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}
function showErry(event) {
    const cards = document.querySelectorAll('#men-tshirt, #women-sweatshirt, #women-tshirt, #men-shirt, #red-tshirt, #ethnic-wear, #polo, #men-sweatshirt');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("ss");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}
function showPuma(event) {
    const cards = document.querySelectorAll('#men-tshirt, #women-sweatshirt, #women-tshirt, #men-shirt, #red-tshirt, #ethnic-wear, #polo, #dress');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("puma");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}

function showLush(event) {
    const cards = document.querySelectorAll('#men-tshirt, #women-sweatshirt, #dress, #men-shirt, #red-tshirt, #ethnic-wear, #polo, #men-sweatshirt');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("lush");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}
function showLevis(event) {
    const cards = document.querySelectorAll('#men-tshirt, #women-sweatshirt, #women-tshirt, #dress, #ethnic-wear, #polo, #men-sweatshirt');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("lev");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}

function threeRat(event) {
    const cards = document.querySelectorAll('#men-tshirt, #ethnic-wear, #dress');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("three");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}
function fourRat(event) {
    const cards = document.querySelectorAll('#women-sweatshirt, #women-tshirt, #men-shirt, #red-tshirt, #polo, #men-sweatshirt');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("four");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}
function price1(event) {
    const cards = document.querySelectorAll('#dress, #ethnic-wear, #men-sweatshirt');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("price1");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}
function price2(event) {
    const cards = document.querySelectorAll('#women-sweatshirt, #red-tshirt, #polo, #women-tshirt, #men-shirt, #men-tshirt');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    // Get the checkbox element
    const reloadCheckbox = document.getElementById("price2");

    // Add an event listener to the checkbox
    reloadCheckbox.addEventListener("change", function () {
        // Check if the checkbox is unchecked
        if (!reloadCheckbox.checked) {
            // Reload the page
            location.reload();
        }
    });
}

var counter = 0;
function myFunction() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts = document.getElementById("men-tshirt");
    console.log(allProducts);
    allProducts.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //console.log("IIIIDDDDD " + (event.target.parentElement).id);

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {

                // Get the img information
                const imgElement = ((event.target.parentElement).parentElement).querySelector('img');
                console.log("hggjhj " + imgElement);
                if (imgElement) {
                    // Get the src attribute of the child <img> tag
                    console.log(imgElement.src);
                    localStorage.setItem('image1', imgElement.src);
                }

                let siblingDiv = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv && siblingDiv.tagName === 'A') {
                    localStorage.setItem('card1', siblingDiv.textContent);

                }
            }

        }
    });
}


function myFunction2() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts2 = document.getElementById("men-shirt");
    console.log(allProducts2);
    allProducts2.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //var parentDiv = event.target.parentElement.id;

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {
                // Get the img information
                const imgElement2 = ((event.target.parentElement).parentElement).querySelector('img');
                console.log("hggjhj " + imgElement2);
                if (imgElement2) {
                    // Get the src attribute of the child <img> tag
                    console.log(imgElement2.src);
                    localStorage.setItem('image2', imgElement2.src);
                }

                let siblingDiv2 = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv2 && siblingDiv2.tagName === 'A') {
                    console.log("***** ID - " + siblingDiv2.textContent);
                    localStorage.setItem('card2', siblingDiv2.textContent);
                    console.log(siblingDiv2.textContent);
                }
            }

        }
    });

}

function myFunction3() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts3 = document.getElementById("men-sweatshirt");
    console.log(allProducts3);
    allProducts3.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //var parentDiv = event.target.parentElement.id;

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {
                // Get the img information
                const imgElement3 = ((event.target.parentElement).parentElement).querySelector('img');
                console.log("hggjhj " + imgElement3);
                if (imgElement3) {
                    // Get the src attribute of the child <img> tag
                    localStorage.setItem('image3', imgElement3.src);
                }

                let siblingDiv3 = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv3 && siblingDiv3.tagName === 'A') {
                    localStorage.setItem('card3', siblingDiv3.textContent);
                }
            }

        }
    });

}

function myFunction4() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts4 = document.getElementById("women-tshirt");
    console.log(allProducts4);
    allProducts4.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //var parentDiv = event.target.parentElement.id;

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {
                // Get the img information
                const imgElement4 = ((event.target.parentElement).parentElement).querySelector('img');
                console.log("hggjhj " + imgElement4);
                if (imgElement4) {
                    // Get the src attribute of the child <img> tag
                    localStorage.setItem('image4', imgElement4.src);
                }

                let siblingDiv4 = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv4 && siblingDiv4.tagName === 'A') {
                    localStorage.setItem('card4', siblingDiv4.textContent);
                }
            }

        }
    });

}
function myFunction5() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts5 = document.getElementById("women-sweatshirt");
    console.log(allProducts5);
    allProducts5.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //var parentDiv = event.target.parentElement.id;

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {
                // Get the img information
                const imgElement5 = ((event.target.parentElement).parentElement).querySelector('img');

                if (imgElement5) {
                    // Get the src attribute of the child <img> tag
                    localStorage.setItem('image5', imgElement5.src);
                }

                let siblingDiv5 = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv5 && siblingDiv5.tagName === 'A') {
                    localStorage.setItem('card5', siblingDiv5.textContent);
                }
            }

        }
    });

}
function myFunction6() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts6 = document.getElementById("dress");
    console.log(allProducts6);
    allProducts6.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //var parentDiv = event.target.parentElement.id;

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {
                // Get the img information
                const imgElement6 = ((event.target.parentElement).parentElement).querySelector('img');

                if (imgElement6) {
                    // Get the src attribute of the child <img> tag
                    localStorage.setItem('image6', imgElement6.src);
                }

                let siblingDiv6 = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv6 && siblingDiv6.tagName === 'A') {
                    localStorage.setItem('card6', siblingDiv6.textContent);
                }
            }

        }
    });

}

function myFunction7() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts7 = document.getElementById("ethnic-wear");
    console.log(allProducts7);
    allProducts7.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //var parentDiv = event.target.parentElement.id;

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {
                // Get the img information
                const imgElement7 = ((event.target.parentElement).parentElement).querySelector('img');

                if (imgElement7) {
                    // Get the src attribute of the child <img> tag
                    localStorage.setItem('image7', imgElement7.src);
                }

                let siblingDiv7 = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv7 && siblingDiv7.tagName === 'A') {
                    localStorage.setItem('card7', siblingDiv7.textContent);
                }
            }

        }
    });

}
function myFunction8() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts8 = document.getElementById("polo");
    console.log(allProducts8);
    allProducts8.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //var parentDiv = event.target.parentElement.id;

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {
                // Get the img information
                const imgElement8 = ((event.target.parentElement).parentElement).querySelector('img');

                if (imgElement8) {
                    // Get the src attribute of the child <img> tag
                    localStorage.setItem('image8', imgElement8.src);
                }

                let siblingDiv8 = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv8 && siblingDiv8.tagName === 'A') {
                    localStorage.setItem('card8', siblingDiv8.textContent);
                }
            }

        }
    });

}
function myFunction9() {
    counter++;
    //alert(counter);
    console.log(counter);

    localStorage.setItem('counterValue', counter);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

    var allProducts9 = document.getElementById("red-tshirt");
    console.log(allProducts9);
    allProducts9.addEventListener('click', function (event) {
        //alert("listener")
        // Check if the clicked element is an anchor tag (a)
        if (event.target.tagName === 'I') {
            // Get the id of the clicked link
            var link = event.target.id;
            console.log("LIIIIIIkkkkk " + link);
            //var parentDiv = event.target.parentElement.id;

            if (((event.target.parentElement).parentElement) && ((event.target.parentElement).parentElement).tagName === 'DIV') {
                // Get the img information
                const imgElement9 = ((event.target.parentElement).parentElement).querySelector('img');

                if (imgElement9) {
                    // Get the src attribute of the child <img> tag
                    localStorage.setItem('image9', imgElement9.src);
                }

                let siblingDiv9 = ((event.target.parentElement).parentElement).nextElementSibling;
                //console.log(siblingDiv)
                if (siblingDiv9 && siblingDiv9.tagName === 'A') {
                    localStorage.setItem('card9', siblingDiv9.textContent);
                }
            }

        }
    });

}
