export function withHttp(url: string) {
  return !/^https?:\/\//i.test(url) ? `http://${url}` : url;
}

export function shuffle(array: any[]) {
  var currentIndex = array.length, temporaryValue: any, randomIndex: number;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function filterCompanies(companies: any[], industry: string) {

  if (industry === 'All') {
    return companies;
  } else {
    const filteredCompanies = companies.filter(item =>
      item.data.industry == industry
    )
    return filteredCompanies;
  }
}