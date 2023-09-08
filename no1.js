function changeWord(selectedText, changedText, text) {
    return text.replaceAll(selectedText, changedText);
  }
  const kalimat1 = "Andini sangat mencintai kamu selamanya";
  const kalimat2 = "Gunung bromo tak akan mempu menggambarkan besarnya cintaku padamu";
  
  console.log(changeWord("mencintai", "membenci", kalimat1));
  console.log(changeWord("bromo", "semeru", kalimat2));
  