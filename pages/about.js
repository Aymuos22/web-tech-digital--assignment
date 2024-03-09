import React from 'react';
import styles from '../styles/About.module.css';
import Image from "next/image";
import about from '../img/about.png'

const About = () => {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <h2 className={styles.title}>About Us</h2>
                <p>Established in 1995 by a pizza enthusiast with a vision for perfection, our restaurant is dedicated to crafting the finest slices using only the freshest, locally-sourced ingredients. Central to our kitchen is a wood-fired oven, infusing our pizzas with a delightful crispness and smoky essence. Our menu boasts a diverse array of toppings, ranging from traditional pepperoni and mushroom to more daring choices like goat cheese and arugula. A standout favorite is our "Supreme" pizza, piled high with pepperoni, sausage, onions, bell peppers, and mushrooms.

We cater to diverse dietary needs with gluten-free and vegan options, ensuring all patrons can indulge in our offerings. With a cozy ambiance ideal for family gatherings or outings with friends, we prioritize exceptional customer service to leave a lasting impression. Our loyalty program rewards regulars with complimentary pizzas and exclusive benefits. Embracing sustainability, we utilize eco-friendly packaging and actively compost our food waste.
                </p>
            </div>
            <div>
                <Image src={about} alt={''} width={500} height={500}/>
            </div>
        </div>
    );
};

export default About;
