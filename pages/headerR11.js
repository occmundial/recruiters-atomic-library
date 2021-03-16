import styles from "../styles/HeaderR11.module.css";
import * as functions from "../scripts/HomeR11";

export default function Home() {
  if (typeof window !== "undefined") {
    window.addEventListener("click", functions.handleWindowClick);
    window.addEventListener("scroll", functions.handleWindowScroll());
  }

  return (
    <>
      {/* <section className={styles.main}>
        <p>Header</p>
        <button onClick={() => functions.myFunction()}>Click me</button>
      </section> */}

      <div id="headerContainer" className={styles.headerContainer}>
        <div id="headerStyle" className={styles.headerStyle}>
          <div className={styles.innerHeaderContainer}>
            <div className={styles.navElementsContainer}>
              <div className={styles.groupContainer}>
                {/**Logo occmundial */}
                <div className={styles.logoContainer}>
                  <a href="http://localhost:8029/actividad/">
                    <span className={styles.logo}></span>
                  </a>
                </div>
                {/**Nombre de la organización */}
                <div>
                  <div
                    className={styles.buttonDropDownDefault}
                    onClick={(event) =>
                      functions.handleClickOnOrganizationWrap(event)
                    }
                  >
                    <div className={styles.buttonDropDownText}>
                      <div className={styles.buttonDropDownFlex}>
                        <p
                          className={`${styles.text} ${styles.textSubHeading} ${styles.textHighEmphasis}`}
                        >
                          Nombre de la organi...
                        </p>
                        <span id="organizationDropDownButton"
                          className={`${styles.icon} ${styles.iconSmall}`}
                        ></span>
                      </div>
                    </div>
                    {/**Organization Card */}
                    <div
                      id="organizationCardWrap"
                      className={styles.accountCardDisable}
                      style={{ opacity: 0 }}
                    >
                      <div className={styles.organizationCard}>
                        <div>
                          <a
                            className={styles.navItemLink}
                            href="http://localhost:64660/Vacantes/Clasificaciones/"
                          >
                            <span
                              className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                            >
                              Organización 1
                            </span>
                          </a>
                        </div>
                        <div>
                          <a
                            className={styles.navItemLink}
                            href="http://localhost:64660/Administracion/NotasReclutador/"
                          >
                            <span
                              className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                            >
                              Organización 2
                            </span>
                          </a>
                        </div>
                        <div>
                          <a
                            className={styles.navItemLink}
                            href="http://localhost:64660/Paquetes/EstadoCuenta/"
                          >
                            <span
                              className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                            >
                              Organización 3
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**Cart *Messages *Account */}
              <div className={`${styles.groupContainer}`}>
                {/**Cart */}
                <div className={styles.cartWrap}>
                  <a
                    href="http://localhost:5002/checkout/?utm_source=sight&utm_medium=referral&utm_campaign="
                    rel="nofollow"
                    id="cart"
                  >
                    <div className={styles.cartButton}>
                      {/* p tag for count */}
                      <div className={styles.navIcon}>
                        <div className={styles.flexBox}>
                          <div
                            className={`${styles.icon} ${styles.cartIcon}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**Messages */}
                <div className={styles.messagesWrap}>
                  <div className={styles.messagesButton}>
                    {/* p tag for count */}
                    <div className={styles.navIcon}>
                      <div className={styles.flexBox}>
                        <div
                          className={`
                            ${styles.icon}
                            ${styles.messagesIcon}
                          `}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**Account */}
                <div>
                  <div className={styles.accountWrap}>
                    <div
                      className={styles.buttonDropDownDefault}
                      onClick={(event) =>
                        functions.handleClickOnAccountWrap(event)
                      }
                    >
                      <div className={styles.buttonDropDownText}>
                        <div className={styles.buttonDropDownFlex}>
                          <p
                            className={`
                            ${styles.text} 
                            ${styles.textSubHeading} 
                            ${styles.textHighEmphasis}
                            `}
                          >
                            <div className={styles.avatarCircle}>
                              <div className={styles.avatarContentWrap}>
                                <div
                                  className={`${styles.avatarContent} ${styles.avatarContentCapital}`}
                                >
                                  <span>MR</span>
                                </div>
                                <div
                                  className={`${styles.avatarContent} ${styles.avatarIcon}`}
                                ></div>
                              </div>
                            </div>
                          </p>
                          <span id="accountDropDownButton"
                            className={`
                              ${styles.icon}
                              ${styles.dropDownIcon}
                            `}
                          ></span>
                        </div>
                      </div>
                      {/**Account Card */}
                      <div
                        id="accountCardWrap"
                        className={styles.accountCardDisable}
                        style={{ opacity: 0 }}
                      >
                        <div className={styles.accountCard}>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="http://localhost:64660/Vacantes/Clasificaciones/"
                            >
                              <span
                                className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                              >
                                Clasificaciones de CV's
                              </span>
                            </a>
                          </div>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="http://localhost:64660/Administracion/NotasReclutador/"
                            >
                              <span
                                className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                              >
                                Notas de CV's
                              </span>
                            </a>
                          </div>
                          <div>
                            <div className={styles.menuSeparator}></div>
                          </div>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="http://localhost:64660/Paquetes/EstadoCuenta/"
                            >
                              <span
                                className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                              >
                                Estado de Cuenta
                              </span>
                            </a>
                          </div>
                          <div>
                            <div className={styles.menuSeparator}></div>
                          </div>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="http://localhost:64660/DatosPersonales/"
                            >
                              <span
                                className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                              >
                                Datos personales
                              </span>
                            </a>
                          </div>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="http://localhost:64660/DatosPersonales/CambiarClave/"
                            >
                              <span
                                className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                              >
                                Cambiar contraseña
                              </span>
                            </a>
                          </div>
                          <div>
                            <div className={styles.menuSeparator}></div>
                          </div>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="https://h3.occ.com.mx/Mercer/MisPerfiles"
                            >
                              <span
                                className={`
                                  ${styles.text}
                                  ${styles.textStandard}
                                  ${styles.textNoEmphasis}
                                `}
                              >
                                Índices salariales
                              </span>
                            </a>
                          </div>
                          <div>
                            <div className={styles.menuSeparator}></div>
                          </div>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="https://occayuda.zendesk.com/hc/es"
                            >
                              <span
                                className={`
                                ${styles.text}
                                ${styles.textStandard}
                                ${styles.textNoEmphasis}
                              `}
                              >
                                Ayuda
                              </span>
                            </a>
                          </div>
                          <div>
                            <div className={styles.menuSeparator}></div>
                          </div>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="https://occayuda.zendesk.com/hc/es"
                            >
                              <span
                                className={`
                                ${styles.text}
                                ${styles.textStandard}
                                ${styles.textNoEmphasis}
                              `}
                              >
                                Cerrar sesión
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**Actividad *Vacantes *Talento */}
              <div className={`${styles.groupContainer} ${styles.itemsCenter}`}>
                {/**Actvidad */}
                <div className={styles.actividadWrap}>
                  <div className={styles.navIcon}>
                    <div className={styles.flexBox}>
                      <div
                        className={`
                          ${styles.icon}
                          ${styles.actividadIcon}
                        `}
                      ></div>
                      <p
                        className={`
                          ${styles.text}
                          ${styles.textMicro}
                          ${styles.textHighEmphasis}
                        `}
                      >
                        <span className={styles.navIconText}>Actividad</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/**Vacantes */}
                <div className={styles.vacantesWrap}>
                  <div className={styles.navIcon}>
                    <div className={styles.flexBox}>
                      <div
                        className={`${styles.icon} ${styles.vacantesIcon}`}
                      ></div>
                      <p
                        className={`
                          ${styles.text}
                          ${styles.textMicro}
                          ${styles.textHighEmphasis}
                        `}
                      >
                        <span className={styles.navIconText}>Vacantes</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/**Talento */}
                <div className={styles.talentoWrap}>
                  <div className={styles.navIcon}>
                    <div className={styles.flexBox}>
                      <div
                        className={`${styles.icon} ${styles.talentoIcon}`}
                      ></div>
                      <p
                        className={`
                          ${styles.text}
                          ${styles.textMicro}
                          ${styles.textHighEmphasis}
                        `}
                      >
                        <span className={styles.navIconText}>Talento</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.divtest}></div> */}
    </>
  );
}
