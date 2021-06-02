// data { currency: '', amount: ''}
export const currencyFormatter = (data) => {
  return ((data.amount * 100) / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency,
  });
};

export const stripeCurrencyFormatter = (data) => {
  return (data.amount / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency,
  });
};


export const objMapper=ratings=>{
  let ratingNumbers=[];
  ratings.forEach(x=>ratingNumbers.push((x.star)))
  const sum = arr => arr.reduce((prev, curr) => prev + curr) ;

  return(sum(ratingNumbers))
}

export const commentMapper=ratings=>{
  let comments=[];
  ratings.forEach(x=>comments.push((x.text)))
  return comments;
}

export const starMapper=ratings=>{
  let star=[];
  ratings.forEach(x=>star.push((x.star)))
  return star;
}

export const nameMapper=ratings=>{
  let name=[];
  ratings.forEach(x=>name.push((x.name)))
  return name;
}
