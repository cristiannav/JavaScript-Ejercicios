function lettersOnly(input){
  var regex = /[^a-z A-Z Ã¡Ã©Ã­Ã³ÃºÃ±Ã¼ÃÃ‰ÃÃ“ÃšÃ‘Ãœ]/g;
  input.value = input.value.replace(regex, "");
}
