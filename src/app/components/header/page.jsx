import styles from "./Header.module.css";
import Image from "next/image";
export default function Header() {
    return (
        <header className={styles.menuBg}>
            <div className={styles.menuFlex}>
                <Image className={styles.menuLogo}
                    src="logoPrincipal.svg"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />

                <nav className={styles.navigationWraper}>
                    <ul className={styles.navigation}>
                        <li><a className={styles.nav_link} href="#somos">Sobre</a></li>
                        <li><a className={styles.nav_link} href="#servicos" >Serviços</a></li>
                        <li><a className={styles.nav_link} href="#exemplos" >Exemplos</a></li>
                        <li><a className={styles.nav_link} href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}