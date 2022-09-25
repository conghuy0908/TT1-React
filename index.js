function isFirstLetterUpperCase(name) {
    regexp = /^[A-Z]/;
    if (regexp.test(name)) {
       console.log("String's first character is uppercase");
    } else {
       console.log("String's first character is not uppercase");
    }
 }