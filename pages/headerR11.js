import styles from "../styles/HeaderR11.module.css";
import * as functions from "../scripts/HomeR11";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      {/* <section className={styles.main}>
        <p>Header</p>
        <button onClick={() => functions.myFunction()}>Click me</button>
      </section> */}

      <div className={styles.headerContainer}>
        <div className={styles.headerStyle}>
          <div className={styles.innerHeaderContainer}>
            <div className={styles.navElementsContainer}>
              {/**Logo occmundial */}
              <div className={styles.groupContainer}>
                <div className={styles.logoContainer}>
                  <a href="http://localhost:8029/actividad/">
                    <span className={styles.logo}></span>
                  </a>
                </div>
              </div>
              {/**Cart *Messages *Account */}
              <div className={classNames(styles.groupContainer)}>
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
                            className={classNames(styles.icon, styles.cartIcon)}
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
                          className={classNames(
                            styles.icon,
                            styles.messagesIcon
                          )}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**Account */}
                <div>
                  <div className={styles.accountWrap}>
                    <div className={styles.buttonDropDownDefault}>
                      <div className={styles.buttonDropDownText}>
                        <div className={styles.buttonDropDownFlex}>
                          <button onClick={() => functions.myFunction()}>
                            <span>MR</span>
                          </button>
                          <span
                            onClick={() => functions.myFunction()}
                            className={classNames(
                              styles.icon,
                              styles.dropDownIcon
                            )}
                          ></span>
                        </div>
                      </div>
                      <div className={styles.accountCardActive}>
                        <div className={styles.accountCard}>
                          <div>
                            <a
                              className={styles.navItemLink}
                              href="http://localhost:64660/Vacantes/Clasificaciones/"
                            >
                              <span
                                className={classNames(
                                  styles.text,
                                  styles.textStandard,
                                  styles.textNoEmphasis
                                )}
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
                                className={classNames(
                                  styles.text,
                                  styles.textStandard,
                                  styles.textNoEmphasis
                                )}
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
                                className={classNames(
                                  styles.text,
                                  styles.textStandard,
                                  styles.textNoEmphasis
                                )}
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
                                className={classNames(
                                  styles.text,
                                  styles.textStandard,
                                  styles.textNoEmphasis
                                )}
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
                                className={classNames(
                                  styles.text,
                                  styles.textStandard,
                                  styles.textNoEmphasis
                                )}
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
                                className={classNames(
                                  styles.text,
                                  styles.textStandard,
                                  styles.textNoEmphasis
                                )}
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
                                className={classNames(
                                  styles.text,
                                  styles.textStandard,
                                  styles.textNoEmphasis
                                )}
                              >
                                Ayuda
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
              <div
                className={classNames(
                  styles.groupContainer,
                  styles.itemsCenter
                )}
              >
                {/**Actvidad */}
                <div className={styles.actividadWrap}>
                  <div className={styles.navIcon}>
                    <div className={styles.flexBox}>
                      <div
                        className={classNames(
                          styles.icon,
                          styles.actividadIcon
                        )}
                      ></div>
                      <p
                        className={classNames(
                          styles.text,
                          styles.textMicro,
                          styles.textHighEmphasis
                        )}
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
                        className={classNames(styles.icon, styles.vacantesIcon)}
                      ></div>
                      <p
                        className={classNames(
                          styles.text,
                          styles.textMicro,
                          styles.textHighEmphasis
                        )}
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
                        className={classNames(styles.icon, styles.talentoIcon)}
                      ></div>
                      <p
                        className={classNames(
                          styles.text,
                          styles.textMicro,
                          styles.textHighEmphasis
                        )}
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
    </>
  );
}
