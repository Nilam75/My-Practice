function removeDuplicates(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      var isDuplicate = false;
      for (var j = i + 1; j < str.length; j++) {
        if (str[j] === char) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        result += char;
      }
    }
    return result;
  }
  
  var string = "Maharastra";
  var removedDuplicates = removeDuplicates(string);
  console.log(removedDuplicates);  // Output: Mahrst
