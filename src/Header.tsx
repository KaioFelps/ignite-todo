import styles from "./header.module.css"
import rocketLogo from "./assets/rocket.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <h1><img src={rocketLogo} alt="Logo Rocket"/> to<span>do</span></h1>
        </header>
    )
}