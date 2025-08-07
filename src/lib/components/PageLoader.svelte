<div class="page-loader"></div>

<style>
  .page-loader {
    z-index: 999;
    background-color: #111;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    animation: load-in 0.6s ease-in-out 0.5s forwards;
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
