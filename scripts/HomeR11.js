const cardActive = {
  opacity: 1,
  height: "auto",
  maxHeight: "2000px",
  margin: "8px 0px 0px -46px",
  padding: "0px 0px 46px 46px",
  width: "254px",
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

const previousScrollPosition = {
  scrollY: 0,
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

const handleDocumentScroll = () => {
  const header = document.getElementById("headerContainer");
  header.style.marginTop = "64px";
};

const handleWindowScroll = () => {
  // Hide account dropdown if visible
  const accountDropDownButton = document.getElementById(
    "accountDropDownButton"
  );
  if (accountDropDownButton.style.transform !== "")
    accountDropDownButton.style.transform = "";

  const accountCard = document.getElementById("accountCardWrap");
  if (accountCard.style.opacity !== "0") {
    switchElementStyle(accountCard, cardDisable);
  }

  // Hide organization dropdown if visible
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

  // Header
  var scroll = window.pageYOffset;

  const headerStyle = document.getElementById("headerStyle");

  previousScrollPosition.scrollY > 10
    ? (headerStyle.style.background = "rgba(255, 255, 255, 0.85)")
    : (headerStyle.style.background = "");

  const header = document.getElementById("headerContainer");
  if (scroll > previousScrollPosition.scrollY) {
    header.style.marginTop = "-64px";
  } else {
    header.style.marginTop = "0px";
  }
  previousScrollPosition.scrollY = window.pageYOffset;
};

export {
  handleClickOnAccountWrap,
  handleWindowClick,
  handleWindowScroll,
  handleClickOnOrganizationWrap,
  handleDocumentScroll,
};
