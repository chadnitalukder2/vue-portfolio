<template>
    <section class="about_section">
        <div class="section-title-block">
            <h2 class="section-title">Contact</h2>
            <h5 class="section-description">Get in Touch</h5>
        </div>
        <div class="container">
            <div class="contact-info">
                <h2>
                    Get in Touch
                </h2>
                <p>
                    Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum
                    egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.
                </p>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt">
                    </i>
                    <span>
                        Los Angeles, USA
                    </span>
                </div>
                <div class="info-item">
                    <i class="fas fa-envelope">
                    </i>
                    <span>
                        alexsmith@example.com
                    </span>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone">
                    </i>
                    <span>
                        +123 654 78900
                    </span>
                </div>
                <div class="info-item">
                    <i class="fas fa-check">
                    </i>
                    <span>
                        Freelance Available
                    </span>
                </div>
            </div>
            <div class="contact-form">
                <h2>
                    Contact Form
                </h2>
                <form action="#">
                    <input placeholder="Full Name" required="" type="text" />
                    <input placeholder="Email Address" required="" type="email" />
                    <textarea placeholder="Message for me" required="" rows="5"></textarea>

                    <input type="submit" value="Send message" />
                </form>
            </div>
        </div>

    </section>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

.about_section {
    padding: 0 70px 50px;
    width: 100%;
    height: auto;
    font-family: Oswald, Helvetica, sans-serif;

    .section-title-block {
        margin-bottom: 40px;

        .section-title {
            display: inline-block;
            font-size: 22px;
            position: relative;
            margin: 0 0 0 -70px;
            padding: 10px 20px 10px 63px;
            background-color: #ffcd38;
            color: #fff;
            line-height: 1.1em;
            font-weight: 500;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

            &:after {
                display: block;
                width: 5px;
                height: 100%;
                position: absolute;
                bottom: 5px;
                left: -4px;
                content: "";
                border: 1px solid #ebbd34;
                transform: skew(0deg, 65deg);
                background: #ebbd34;
            }
        }

        .section-description {
            display: inline-block;
            margin: 0 0 0 15px;
            color: #888;
            font-size: 14px;
            font-weight: 200;
        }
    }
}

.container {
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    width: 100%;
    gap: 30px;
    box-sizing: border-box;
}

.contact-info,
.contact-form {
    flex: 1;
}

.contact-info h2,
.contact-form h2 {
    font-size: 18px;
    color: #1d1c1cce;
    font-weight: 500;
    margin-bottom: 25px;
    position: relative;
}

.contact-info h2::after,
.contact-form h2::after {
    content: '';
    width: 84px;
    height: 2px;
    background-color: #f1c40f;
    position: absolute;
    bottom: -5px;
    left: 0;
}

.contact-info p {
    font-size: 16px;
    line-height: 1.5;
    color: #666;
    font-weight: 300;
    margin-bottom: 20px;
    font-family: 'PT Sans', 'Helvetica', sans-serif;
}

.contact-info .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.contact-info .info-item i {
    font-size: 20px;
    margin-right: 10px;
    color: #333;
}

.contact-info .info-item span {
    font-size: 16px;
    color: #333;
}

.contact-form form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
        font-size: 16px;
        padding: 10px;
        font-family: 'PT Sans', 'Helvetica', sans-serif;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
    }
    textarea:focus-visible,input:focus-visible{
        outline: none;
        border-bottom: 2px solid #f1c40f;
    }
}

.contact-form form input[type="submit"] {
    background-color: #fff;
    border: 2px solid #f1c40f;
    color: #333333f5;
    font-size: 14px;
    font-weight: 500;
    width: 140px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.contact-form form input[type="submit"]:hover {
    background-color: #f1c40f;
    color: #fff;
}
</style>