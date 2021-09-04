export function formatDescription(text) {
  let sentencesArr = text.split('. ');
  // The last two sentences are always the promoted wine from spoonacular which we do not want to display, so we remove them from the array.
  sentencesArr.splice(-2, 2)

  if (sentencesArr[sentencesArr.length -1].indexOf('Mt') >= 0) {
    // Checks for things like "Mt. Veeder" in the wine promotion sentences which will mistakenly split a sentence in half. In this case, we remove the last element of the array to ensure we've removed all the promo text.
    sentencesArr.pop()
  }
  // Make sure the last sentence has a period.
  sentencesArr[sentencesArr.length - 1] = sentencesArr[sentencesArr.length - 1] + '.'
  return sentencesArr.join('. ')
}