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

export function filterCompanies(companies: any[], i: string | string[]) {

  const industry = i.toString().toLowerCase();

  if (industry === 'all') {
    return companies;
  } else {
    const filteredCompanies = companies.filter(item =>
      item.data.industry.toLowerCase() == industry
    )
    return filteredCompanies.length > 0 ? filteredCompanies : companies;
  }
}

export function filterInvestors(investors: any[], t: string | string[]) {

  const invType = t.toString().toLowerCase();

  if (invType === 'all') {
    return investors;
  } else {
    const filteredInvestors = investors.filter(item =>
      item.data.type.toLowerCase() == invType
    )
    return filteredInvestors.length > 0 ? filteredInvestors : investors;
  }
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}