const myFunction = () => {
  const accountCardActive = {
    opacity: 1,
    height: 'auto',
    maxHeight: '2000px',
    margin: '20px 0px 0px -46px',
    padding: '0px 0px 46px 46px',
    width: 'fit-content',
    transition: 'all 0.6s ease, margin-top 0.8s',
    position: 'absolute',
    right: 0,
    zIndex: '9999',
    transform: 'translateZ(0)',
    overflow: 'hidden',
  }

  const accountCardDisable = {
    opacity: 0,
    height: 'auto',
    maxHeight: '0px',
    margin: '0px 0px 0px -16px',
    padding: '0px 0px 46px 16px',
    overflow: 'hidden',
    width: 'auto',
    transition: 'all 0.3s ease, margin-top 0.5s',
    position: 'absolute',
    right: 0,
    zIndex: '9999',
  }

  const cardWrap = document.getElementById("accountCardWrap");

  if (cardWrap.style.opacity !== '0') {

    Object.keys(accountCardDisable).forEach((element) => {
      cardWrap.style[element] = accountCardDisable[element];
    });

  } else {

    Object.keys(accountCardActive).forEach((element) => {
      cardWrap.style[element] = accountCardActive[element];
    });

  }

};

export { myFunction };
