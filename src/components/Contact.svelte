<script>
</script>

<div id="contact" class="flex w-full min-h-screen">
  <div id="contact-form" class="grid gap-5 p-7 m-auto rounded-xl shadow-xl">
    <div class="contact-form-title">
      <div class="title-container">
        <div class="title-unsent title-exit-right">Get in Touch</div>
        <div class="title-sent title-exit-left">Message Sent. Thank You!</div>
      </div>
    </div>
    <div class="line-load">
      <div class="bar" />
    </div>
    <div class="grid grid-cols-2 gap-10 w-full">
      <input name="name" class="form-input" placeholder="Name" />
      <input name="email" class="form-input" type="email" placeholder="Email" />
    </div>
    <input name="phone" class="form-input" type="tel" placeholder="Phone Number" />
    <textarea name="message" class="form-input" placeholder="Message..." />
    <button type="submit" class="form-btn m-auto w-20 rounded-2xl">
      <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
        />
      </svg>
      Submit
    </button>
  </div>
</div>

<style>
  /*-------- [ Form ]*/
  #contact-form {
    background: #fff;
  }

  /*------ [ Form Title ]*/
  .contact-form-title {
    font-size: 30px;
    color: #333333;
    text-transform: uppercase;
    padding-bottom: 32px;
    overflow: hidden;
  }
  .title-container {
    font-size: 2rem;
    position: relative;
    padding-bottom: 10px;
  }

  /* formatting for unsent message */
  .title-unsent {
    position: absolute;
  }
  .title-exit-right {
    animation: slide-out-right 0.5s ease forwards;
  }
  @keyframes slide-out-right {
    0% {
      left: 0;
    }
    100% {
      left: 100%;
    }
  }
  /* formatting for sent message */
  .title-sent {
    position: absolute;
    left: -100%;
  }
  .title-exit-left {
    animation: slide-in-right 0.5s ease forwards;
  }
  @keyframes slide-in-right {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }

  /*------- [ Input Boxes ]*/

  .form-input {
    display: block;
    width: 100%;
    background: #f2f2f2;
    border-radius: 20px;
    border: none;
    resize: none;

    font-size: 20px;
    line-height: 1.2;
    padding: 0 28px;
  }
  .form-input:hover {
    background: #e0e0e0;
  }
  .form-input:focus {
    background: #d0d0d0;
  }

  input.form-input {
    height: 62px;
    outline: none;
  }
  textarea.form-input {
    min-height: 162px;
    padding-top: 19px;
    padding-bottom: 13px;
    outline: none;
  }

  /*------- [ Form Button ]*/

  .form-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    min-width: 150px;
    height: 62px;
    box-shadow: 0 5px #888;

    border: 1px solid #888;
    outline: none;

    font-size: 16px;
    color: black;
    line-height: 1.2;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s, background-color 0.4s;
  }
  .form-btn:hover {
    background-color: #616161;
    color: white;
  }
  .form-btn:active {
    box-shadow: 0 1px #666;
    transform: translateY(4px);
  }
  .btn-icon {
    fill: black;
    height: 16px;
    padding-right: 10px;
  }

  /* loading animation */
  .line-load {
    height: 5px;
    width: 100%;
    overflow: hidden;
  }
  .line-load .bar {
    position: relative;
    height: 5px;
    width: 100%;
    background-color: dodgerblue;
    animation-name: bouncing-load;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  @keyframes bouncing-load {
    0% {
      left: -100%;
    }
    49% {
      left: 100%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }
</style>
