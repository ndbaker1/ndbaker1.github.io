<div class="project">
  <div class="blur">
    <div class="project-desc" />
    <div class="github-link-box" />
  </div>
</div>

<style>
  .projects-container {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 80%;
  }
  .project {
    position: relative;
    background-size: cover;
    width: 46%;
    margin: 2%;
    height: 600px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    display: inline-block;
    color: white;
    overflow: hidden;
  }
  @media screen and (max-width: 900px) {
    /* one project per row if the screen is too small */
    .project {
      width: 100%;
    }
  }
  /* background blur when hover */
  .blur {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    padding-top: 50px;
    transition: 100ms;
  }
  .blur:hover {
    backdrop-filter: blur(7px);
  }
  /* Project title properties */
  .blur h1 {
    padding-top: 35px;
  }
  /* icons for programming languages used */
  .project-icon {
    height: 128px;
  }
  .project-desc {
    margin: auto;
    width: 60%;
    font-size: 1.4rem;
  }

  /* github link formatting */
  .github-link-box {
    transform: translateX(-50%);
    left: 50%;
    position: absolute;
    bottom: 50px;
  }

  /* same formatting found from navbar.css */
  .github-link {
    display: inline-block;
    padding: 10px 12px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: rgba(16, 5, 38, 0.557);
    transition: 0.5s;
  }
  .github-link:hover {
    background-color: rgba(15, 5, 36, 0.769);
    border-color: slategrey;
  }
  .github-link img {
    width: 64px;
  }
</style>
