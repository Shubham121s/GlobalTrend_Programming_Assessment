function isAnagram(str1, str2) {
    // Removes spaces and convert into the lowercase letter
  
    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()
    // console.log(str1, str2)
  
    if (str1.length !== str2.length) {
      return false
    }
  
    // Sort the characters in the given string
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')
  
    // Compare the sorted String
  
    return str1 === str2
  }
  
  const check = isAnagram('modi', 'iomd')
  console.log(check)