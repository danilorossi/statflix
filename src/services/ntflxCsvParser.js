import * as Papa from 'papaparse';
// import stringSimilarity from 'string-similarity';

export const parseCsv = (csvString) => {
  var result = Papa.parse(csvString);
  const rawData = result.data;
  rawData.shift();
  rawData.pop();

  const yearSet = new Set();

  const accumulateByDayDictionary = {};
  const accumulateByDayOfWeekDictionary = {};

  const sampleData = rawData.map((entry, idx) => {
    const [ title, dateString ] = entry;
    const [ day, month, shortYear ] = dateString.split('/');
    // TODO assure year is correct
    // TODO expect different formats?
    const formattedDateString = `20${shortYear}-${month}-${day}`;
    const date = new Date(Date.parse(formattedDateString));
    yearSet.add(date.getFullYear());
    const item = {
      title,
      date,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      weekDay: date.getDay(),
    }

    const key = `${item.day}-${item.month}-${item.year}`;
    if(!accumulateByDayDictionary[key]) {
      accumulateByDayDictionary[key] = {
        count: 1,
        year: item.year,
        month: item.month,
        day: item.day,
        weekDay: item.weekDay,
        date,
        items: [item]
      };
    } else {
      accumulateByDayDictionary[key] = {
        ...accumulateByDayDictionary[key],
        count: accumulateByDayDictionary[key].count + 1,
        items: accumulateByDayDictionary[key].items.concat(item)
      }
    }

    const keyWeekDay = item.weekDay;
    if(!accumulateByDayOfWeekDictionary[keyWeekDay]) {
      accumulateByDayOfWeekDictionary[keyWeekDay] = {
        count: 1,
        weekDay: item.weekDay,
        date,
        items: [item]
      };
    } else {
      accumulateByDayOfWeekDictionary[keyWeekDay] = {
        ...accumulateByDayOfWeekDictionary[keyWeekDay],
        count: accumulateByDayOfWeekDictionary[keyWeekDay].count + 1,
        items: accumulateByDayOfWeekDictionary[keyWeekDay].items.concat(item)
      }
    }
    return item;
  }).sort((a, b) => a.date - b.date);

  const yearsList = Array.from(yearSet).sort((a, b) => a - b);
  // const accumulateByDayDictionary = Object.values(accumulateByDayDictionary);
  const accumulateByWeekDay = Object.values(accumulateByDayOfWeekDictionary).sort((a, b) => b.count - a.count);

  const episodesPerMonth = yearsList.map(year =>
    ({ year, data: computeAccumulateByMonth(sampleData, year) })
  ).sort((a, b) => a.year - b.year);


  const mostActiveDay = Object.values(accumulateByDayDictionary).sort((a, b) => b.count - a.count)[0]
  const episodesPerYear = episodesPerMonth.map(yearData => {

      const count = yearData.data.reduce((acc, curr) => {
        return acc + curr.count
      }, 0);

      return {
        year: yearData.year,
        count,
      }
  }).sort((a, b) => a.year - b.year);



  // Episodes in general per day?

  // Most seen per month

  // Time to finish Series (or season would be great)

  // hours spent per week

  // day of week you watch netflix the most
  console.log(computeSimilarities(sampleData))
  return {
    yearsList,
    sampleData,
    episodesPerMonth,
    episodesPerYear,
    mostActiveDay,
    accumulateByDayDictionary,
    accumulateByWeekDay,
  }

}


export const computeSimilarities = sampleData => {

  let dictionary = {};

  sampleData.forEach(entry => {
    const searchKey = entry.title.split(':')[0];

    sampleData.forEach(recursionEntry => {

      if(recursionEntry.title.startsWith(searchKey)) {
        const list = dictionary[searchKey] || [];
        const match = list.filter(d => d.title === recursionEntry.title)
        if(match.length === 0) {
          list.push({...recursionEntry})
          dictionary[searchKey] = list//.sort((a, b) => a.date - b.date);
        }

      }
    })

  })

  console.log(dictionary)
  return null




  // const result = stringSimilarity.findBestMatch(
  //   sampleData[0].title,
  //   sampleData.map(data => data.title)
  // )
  //
  // console.log('Homeland episodes : ' +sampleData.filter(s => s.title.startsWith('Homeland')).length)
  // console.log(result)
  //
  // const firstPass = result.ratings.filter(entry => entry.rating > 0.7)
  // console.log('> 0.7: ' + firstPass.length, firstPass)
  //
  // const x = stringSimilarity.findBestMatch(
  //   sampleData[0].title.substring(0, 7),
  //   firstPass.map(data => data.target.substring(0, 7))
  // )
  //
  // return x.ratings.filter(entry => entry.rating > 0.5)
}

export const computeAccumulateByMonth = (sampleData, year) => {
    const dictionary = sampleData.reduce((acc, curr) => {

      if( curr.year !== year ) return acc;

      const key = `${curr.year}-${curr.month}-01`;
      const entry = acc[key];

      if(entry) {
        return {
          ...acc,
          [key]: {
            ...entry,
            key,
            entries: acc[key].entries.concat(curr),
            count: entry.count + 1
          }
        }
      } else {
        return {
          ...acc,
          [key]: {
            key,
            month: curr.month,
            date: curr.date,
            year: curr.year,
            entries: [curr],
            count: 1
          }
        };
      }

    }, {});
    return Object.keys(dictionary).map(k => dictionary[k]);
  }
