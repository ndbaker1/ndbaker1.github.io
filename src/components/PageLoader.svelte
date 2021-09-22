<div class="page-loader" />

<style>
  .page-loader {
    z-index: 999;
    background-color: black;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    animation: load-in 0.5s ease 0.5s forwards;
  }
  @keyframes load-in {
    0% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
</style>
