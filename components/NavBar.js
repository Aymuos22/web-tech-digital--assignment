import React from 'react';
import styles from '../styles/NavBar.module.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Logo from '../img/logo.png';
import { useSelector } from "react-redux";
import Link from "next/link";

const NavBar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div style={{ backgroundColor: 'black' }} className={styles.container}>
            <div className={styles.image_container}>
                <Image src={Logo} height={60} width={170} alt={'logo'} className={styles.logo} />
            </div>

            <div className={styles.navbar}>
                <div className={styles.item}>
                    <ul className={styles.list}>
                        <Link href={'/'} passHref>
                            <li className={styles.listItem} style={{ color: 'white' }}>Homepage</li>
                        </Link>
                        <Link href={'/about'} passHref>
                            <li className={styles.listItem} style={{ color: 'white' }}>About Us</li>
                        </Link>
                        <li className={styles.listItem}>
                            <Link className={styles.links} href={'/#services'} style={{ color: 'white' }}>Services</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link className={styles.links} href={'/#menu'} style={{ color: 'white' }}>Menu</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link className={styles.links} href={'/#contact'} style={{ color: 'white' }}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <Link href={"/cart"} style={{ color: 'white' }} className={styles.cart_container} passHref>
                    <div className={styles.item} id={styles.cartButton}>
                        <div>
                            <AiOutlineShoppingCart size={45} />
                        </div>
                        <div className={styles.counter}>
                            {quantity}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
