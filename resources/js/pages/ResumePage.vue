<template>
    <section class="about_section">
        <div class="section-title-block">
            <h2 class="section-title">Resume</h2>
            <h5 class="section-description">1 Years of Experience</h5>
        </div>

        <div class="container">
            <div class="section">
                <h2>Education</h2>
                <div class="item">
                    <div class="date">2010</div>
                    <h3>Specialization Course</h3>
                    <p class="info">University of Studies</p>
                    <p class="description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                        tortor.</p>
                </div>
                <div class="item">
                    <div class="date">2009</div>
                    <h3>Specialization Course</h3>
                    <p class="info">University of Studies</p>
                    <p class="description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                        tortor.</p>
                </div>
                <div class="item">
                    <div class="date">2008</div>
                    <h3>Specialization Course</h3>
                    <p class="info">University of Studies</p>
                    <p class="description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                        tortor.</p>
                </div>
            </div>
            <div class="section">
                <h2>Experience</h2>
                <div class="item">
                    <div class="date">Dec 2012 - Current</div>
                    <h3>Frontend-developer</h3>
                    <p class="info">Web Agency</p>
                    <p class="description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                        tortor.</p>
                </div>
                <div class="item">
                    <div class="date">Dec 2011 - Nov 2012</div>
                    <h3>Web Designer</h3>
                    <p class="info">Apple Inc.</p>
                    <p class="description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                        tortor.</p>
                </div>
                <div class="item">
                    <div class="date">Jan 2010 - Dec 2011</div>
                    <h3>Graphic Designer</h3>
                    <p class="info">Web Agency</p>
                    <p class="description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                        tortor.</p>
                </div>
            </div>
            <div class="section skills">
                <h2>Design Skills</h2>
                <div class="skill">
                    <h3>Web Design</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: 90%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>Graphic Design</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: 80%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>Print Design</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: 70%;"></div>
                    </div>
                </div>
                <h2 style="  padding-top: 16px;">Coding Skills</h2>
                <div class="skill">
                    <h3>HTML5</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: 95%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>CSS3</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: 90%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>jQuery</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: 85%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>Wordpress</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: 80%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>PHP</h3>
                    <div class="progress">
                        <div class="progress-bar" style="width: 75%;"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="download-cv-block">
            <a class="button" target="_blank" href="#">Download CV</a>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.about_section {

    padding: 0 70px 50px;
    width: 100%;
    height: auto;
    font-family: Oswald, Helvetica, sans-serif;
    @media (max-width: 1098px) {
        padding: 0 20px 50px;
        }

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
                left: -5px;
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
    gap: 20px;
}

.section {
    border-left: 1px solid #f4f9ed;
    background-color: white;
    flex-basis: 31%;
    padding-left: 23px;
}

.section h2 {
    font-size: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #f4b400;
    display: inline-block;
    color: #222;
    font-family: 'PT Sans', Helvetica, sans-serif;
    line-height: 1.5em;
    margin-left: -23px;


}

.item {
    margin-bottom: 20px;
}

.item .date {
    background-color: #9bd952;
    color: white;
    margin-left: -23px;
    padding: 5px 8px 5px 23px;
    border-radius: 3px;
    font-size: 14px;
    display: inline-block;
    margin-bottom: 10px;
    font-family: Oswald, Helvetica, sans-serif;
}

.item h3 {
    margin: 0;
    color: #222;
    font-size: 1em;
}

.item {
    .info {
        margin: 5px 0;
        color: #a5a5a5;
        font-weight: 300;
        line-height: 1.45em;
        font-size: 12px;
        font-family: 'PT Sans', Helvetica, sans-serif;

    }

    .description {
        font-family: 'PT Sans', Helvetica, sans-serif;
        font-size: 0.875em;
        margin: 0 0 10px;
        font-weight: 300;
        color: #666;
    }
}

.skills .skill {
    margin-bottom: 12px;
}

.skills .skill h3 {
    font-family: Oswald, Helvetica, sans-serif;
    color: #222;
    font-size: 14px;
    margin: 0;
}

.skills .skill .progress {
    background-color: #f4f4f4;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 5px;
}

.skills .skill .progress .progress-bar {
    height: 10px;
    background-color: #f4b400;
}


.download-cv-block {
    margin: 30px 0 20px;

    .button {
        display: inline-block;
        padding: 0.8em 2em;
        margin-bottom: .25em;
        font-size: 0.875em;
        line-height: 1.2;
        border: 0;
        outline: 0;
        border: 2px solid #ffcd38;
        color: #222;
        text-shadow: none;
        background: none;
        border-radius: 0;
        font-family: 'PT Sans', Helvetica, sans-serif;
        transition: all .3s;
        &:hover{
            background-color: #ffcd38;
            color: #fff;
        }
    }
}
</style>