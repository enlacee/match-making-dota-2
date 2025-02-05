<template>
    <footer id="footer" class="">
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <h2>Contact Me</h2>
                        <p>Have questions or need support? Feel free to reach out!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-contact wow fadeIn">
            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-6">
                        <address>
                            <a id="input-text" href="mailto:contact@anibalcopitan.com">contact@anibalcopitan.com</a>
                        </address>
                        <button id="button-click" class="btn btn-primary" @click="copyText()">Copy Email</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    border: 1px solid red;
}
</style>
  