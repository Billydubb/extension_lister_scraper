export function formatNumberOfRatings(numberOfRatingsString?: string) {
    if(!numberOfRatingsString) {
      return
    }
    // Use a regular expression to match the number and the suffix
    const match = numberOfRatingsString.match(/^(\d+(\.\d+)?)([kKmM])$/);
    
    if (!match) {
      // If the input doesn't match the expected format, return the original string or handle it as needed
      return parseInt(numberOfRatingsString);
    }
    
    let number = parseFloat(match[1]);
    const suffix = match[3].toLowerCase();
    
    switch (suffix) {
      case 'k':
        number *= 1000;
        break;
      case 'm':
        number *= 1000000;
        break;
    }
    
    return number;
  
}