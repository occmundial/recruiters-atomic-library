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
              {/**Cart *Messages *User */}
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
                          <button>
                            <span>MR</span>
                          </button>
                          <span className={classNames(styles.icon, styles.dropDownIcon)}></span>
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
