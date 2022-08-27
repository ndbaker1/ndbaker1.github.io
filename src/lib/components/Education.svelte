<script lang="ts">
  export let title: string
  export let location: string
  export let date: string
</script>

<div>
  <h5>{title}</h5>
  <p>{location}</p>
  <p>
    <img
      alt="calendar"
      src="https://img.icons8.com/material-outlined/192/calendar--v1.png"
      width="20px"
    />
    &nbsp;
    {date}
  </p>
</div>
