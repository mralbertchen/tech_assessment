module.exports = ( id ) => {
  switch (Number(id)) {
    case 1:
      return [ 3.09, 104, 5.522, 1.55, 3.10 ];
      break;
    case 2:
      return [ 5.32, 302, 443 ];
      break;
    case 3:
      return [ 2.54, 50.3, 383.66 ];
      break;
  }
};