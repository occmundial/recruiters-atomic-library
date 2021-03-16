const cardActive = {
  opacity: 1,
  height: "auto",
  maxHeight: "2000px",
  margin: "16px 0px 0px -46px",
  padding: "0px 0px 46px 46px",
  width: "fit-content",
  transition: "all 0.6s ease, margin-top 0.8s",
  position: "absolute",
  right: "0",
  zIndex: "9999",
  transform: "translateZ(0)",
  overflow: "hidden",
  pointerEvents: "auto",
};

const organizationCardActive = {
  right: "auto",
};

const cardDisable = {
  opacity: 0,
  height: "auto",
  maxHeight: "0px",
  margin: "0px 0px 0px 0px",
  padding: "0px 0px 0px 0px",
  overflow: "hidden",
  width: "auto",
  transition: "all 0.3s ease, margin-top 0.5s",
  position: "absolute",
  right: "0",
  zIndex: "9999",
  pointerEvents: "none",
};

const organizationCardDisable = {
  right: "auto",
};

const buttonDropDownActive = {
  transform: "rotate(180deg)",
};

const switchElementStyle = (element, style) => {
  Object.keys(style).forEach((styleKey) => {
    element.style[styleKey] = style[styleKey];
  });
};

const handleDropDownButton = (dropDownButton) => {
  dropDownButton.style.transform === ""
    ? switchElementStyle(dropDownButton, buttonDropDownActive)
    : (dropDownButton.style.transform = "");
};

const handleClickOnAccountWrap = (event) => {
  event.stopPropagation();

  // Organization
  const organizationDropDownButton = document.getElementById(
    "organizationDropDownButton"
  );
  if (organizationDropDownButton.style.transform !== "")
    organizationDropDownButton.style.transform = "";

  const organizationCard = document.getElementById("organizationCardWrap");

  if (organizationCard.style.opacity !== "0")
    switchElementStyle(organizationCard, {
      ...cardDisable,
      ...organizationCardDisable,
    });

  // Account
  const accountDropDownButton = document.getElementById(
    "accountDropDownButton"
  );
  handleDropDownButton(accountDropDownButton);

  const accountCard = document.getElementById("accountCardWrap");

  accountCard.style.opacity !== "0"
    ? switchElementStyle(accountCard, cardDisable)
    : switchElementStyle(accountCard, cardActive);
};

const handleClickOnOrganizationWrap = (event) => {
  event.stopPropagation();

  // Account
  const accountDropDownButton = document.getElementById(
    "accountDropDownButton"
  );
  if (accountDropDownButton.style.transform !== "")
    accountDropDownButton.style.transform = "";

  const accountCard = document.getElementById("accountCardWrap");

  if (accountCard.style.opacity !== "0")
    switchElementStyle(accountCard, cardDisable);

  // Organization
  const organizationDropDownButton = document.getElementById(
    "organizationDropDownButton"
  );
  handleDropDownButton(organizationDropDownButton);

  const organizationCard = document.getElementById("organizationCardWrap");

  organizationCard.style.opacity !== "0"
    ? switchElementStyle(organizationCard, {
        ...cardDisable,
        ...organizationCardDisable,
      })
    : switchElementStyle(organizationCard, {
        ...cardActive,
        ...organizationCardActive,
      });
};

const handleWindowClick = () => {
  
  // Account
  const accountDropDownButton = document.getElementById(
    "accountDropDownButton"
  );
  if (accountDropDownButton.style.transform !== "")
    accountDropDownButton.style.transform = "";

  const accountCard = document.getElementById("accountCardWrap");

  if (accountCard.style.opacity !== "0")
    switchElementStyle(accountCard, cardDisable);

  // Organization
  const organizationDropDownButton = document.getElementById(
    "organizationDropDownButton"
  );
  if (organizationDropDownButton.style.transform !== "")
    organizationDropDownButton.style.transform = "";

  const organizationCard = document.getElementById("organizationCardWrap");

  if (organizationCard.style.opacity !== "0") {
    switchElementStyle(organizationCard, {
      ...cardDisable,
      ...organizationCardDisable,
    });
  }
};

const handleWindowScroll = () => {
  // TODO handle header hiding/showing
  var scroll = window.scrollY;

  const headerStyle = document.getElementById("headerStyle");

  scroll > 20
    ? (headerStyle.style.background = "rgba(255, 255, 255, 0.85)")
    : (headerStyle.style.background = "#ffffff;");

  if (scroll > 20) {
    const header = document.getElementById("headerContainer");
    header.style.marginTop = "-64px";
  } else {
    const header = document.getElementById("headerContainer");
    header.style.marginTop = "0px";
  }

  // Hide account dropdown if visible
  const accountCard = document.getElementById("accountCardWrap");

  if (accountCard.style.opacity !== "0") {
    switchElementStyle(accountCard, cardDisable);
  }

  // Hide organization dropdown if visible
  const organizationCard = document.getElementById("organizationCardWrap");

  if (organizationCard.style.opacity !== "0") {
    switchElementStyle(organizationCard, cardDisable);
  }
};

export {
  handleClickOnAccountWrap,
  handleWindowClick,
  handleWindowScroll,
  handleClickOnOrganizationWrap,
};
